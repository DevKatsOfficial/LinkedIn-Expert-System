import os
import sys
sys.path.append(os.path.abspath("."))
import time
from datetime import timedelta, datetime, time as datetime_time
from random import randint

from func_timeout import func_timeout as f_timeout, FunctionTimedOut
from selenium.common.exceptions import NoSuchElementException

import config
from config import db
from selenium_script.initilize_chrome_deriver import load_and_parse_profile, initialize_chrome, load_site, login, \
    quit_browser

MAX_ONE_DAY_PROFILES = 500
experts_parsed_count_model = config.db.experts_parsed_count


def parse_new_profiles_on_priority(driver, already_parsed_profiles_count):
    config.config_logger.debug('parsing new profiles started')
    new_profiles = db.experts.find({
        "scrap_datetime": None
    })
    for new_profile in new_profiles:
        if already_parsed_profiles_count >= MAX_ONE_DAY_PROFILES:
            break
        _url = new_profile.get('linkedin_url')
        if _url:
            _url = _url
            try:
                f_timeout(
                    300, load_and_parse_profile,
                    args=(driver, _url, new_profile.get('_id', None), new_profile.get('userId', None)),
                    kwargs={'expert_model': new_profile, 'update_case': False}
                )
            except config.StopLinkedinParsingError:
                break
            except FunctionTimedOut:
                pass
            except Exception as e:
                with open('exception_logs.log', 'a+') as f:
                    f.write(str(e))
            time.sleep(randint(600, 900))
            already_parsed_profiles_count += 1
    config.config_logger.debug('parsing new profiles ended')
    return already_parsed_profiles_count


def refresh_old_profiles(driver, already_parsed_profiles_count):
    config.config_logger.debug('parsing old profiles started')
    date_ten_days_ago = datetime.utcnow() - timedelta(days=10)
    profiles_to_refresh = db.experts.find({"scrap_datetime": {"$lt": date_ten_days_ago}}).sort("scrap_datetime")
    for profile_to_refresh in profiles_to_refresh:
        if already_parsed_profiles_count >= MAX_ONE_DAY_PROFILES:
            break
        _url = profile_to_refresh.get('linkedin_url')
        if _url:
            _url = _url
            try:
                f_timeout(
                    300, load_and_parse_profile,
                    args=(driver, _url, profile_to_refresh.get('_id', None), profile_to_refresh.get('userId', None)),
                    kwargs={'expert_model': profile_to_refresh, 'update_case': True}
                )
            except config.StopLinkedinParsingError:
                break
            except FunctionTimedOut:
                pass
            except Exception as e:
                with open('exception_logs.log', 'a+') as f:
                    f.write(str(e))
            time.sleep(randint(600, 900))
            already_parsed_profiles_count += 1
            # after refresh each profile, check if new profile come then parse it first
            already_parsed_profiles_count = parse_new_profiles_on_priority(driver, already_parsed_profiles_count)
    # on end also check to parse new profiles
    already_parsed_profiles_count = parse_new_profiles_on_priority(driver, already_parsed_profiles_count)
    config.config_logger.debug('parsing old profiles started')
    return already_parsed_profiles_count


def parse_new_and_old_profiles_recursively(driver, already_parsed_profiles_count):
    already_parsed_profiles_count = parse_new_profiles_on_priority(driver, already_parsed_profiles_count)
    refresh_old_profiles(driver, already_parsed_profiles_count)

    # to run continously without login
    config.config_logger.debug('all old and new profile parsed, new profile will parse after 5 min.')
    time.sleep(300)
    if already_parsed_profiles_count < MAX_ONE_DAY_PROFILES:
        parse_new_and_old_profiles_recursively(driver, already_parsed_profiles_count)


def parse_profiles():
    driver = initialize_chrome()
    driver.maximize_window()
    try:
        already_parsed_profiles_count = experts_parsed_count_model.find_one(
            {'date': datetime.combine(datetime.utcnow().today(), datetime_time())}
        ).get("count", 0)
    except Exception:
        already_parsed_profiles_count = 0
    if already_parsed_profiles_count < MAX_ONE_DAY_PROFILES:
        load_site(driver)
        if driver.current_url.__contains__("login"):
            login(driver, username=config.USERNAME, password=config.PASSWORD)
        time.sleep(6)
        parse_new_and_old_profiles_recursively(driver, already_parsed_profiles_count)
    quit_browser(driver)


parse_profiles()