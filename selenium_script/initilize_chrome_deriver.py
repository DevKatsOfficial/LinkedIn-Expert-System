import os
import sys
import time
from random import randint
sys.path.append(os.path.abspath("."))

from bs4 import BeautifulSoup
from func_timeout import func_timeout, FunctionTimedOut
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

import config
from parse_html.linkedin_user_profile import parse_and_save_expert_profile
from utilities.extract_data import get_attr_value_from_html_soup, xpath_soup


def initialize_chrome():
    """This method is used to initialize chrome driver"""
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')
    driver_path = os.path.abspath("") + '/selenium_script/chromedriver'
    driver = webdriver.Chrome(executable_path=driver_path, options=chrome_options)
    # driver = webdriver.Chrome(executable_path=driver_path)
    return driver


def load_site(driver, url=config.ORIGIN_SITE_LOGIN_URL):
    """
    This method return updated driver object after loading of desired url
    :param url:
    :return:  updated driver after page loading in browser
    """
    driver.get(url)
    if driver.current_url == config.ORIGIN_SITE_LOGIN_URL:
        config.config_logger.debug('Login page loaded')
    return driver


def quit_browser(driver):
    """
    user to quit running browser.
    :return:
    """
    driver.quit()


def click_all_see_more(driver):
    """
    This method find all the elements having "See more" text and return click on all the
    element to see all content
    :return:
    """
    try:
        see_more_buttons = driver.find_elements_by_xpath("//*[contains(text(), 'See more')]")

        for btn in see_more_buttons:
            try:
                if btn.text:
                    actions = ActionChains(driver)
                    actions.move_to_element(btn).perform()
                    btn.send_keys(Keys.RETURN)
                    time.sleep(3)
            except Exception as e:
                """some element contain text attribute empty, and we click on this an exception raise"""
                print(e)
                pass
    except Exception:
        pass


def click_show_more_edu(driver):
    """
    This method find element having more education text and perform click operation to see detail
    :return:
    """
    try:
        more_edu_buttons = driver.find_element_by_xpath("//*[contains(text(), 'more education')]")
        config.config_logger.debug('Load More education')
        actions = ActionChains(driver)
        actions.move_to_element(more_edu_buttons).perform()
        actions.click()
        actions.perform()
    except Exception:
        pass


def click_show_more_experiences(driver):
    """
    This method find element having more experiences text and perform click operation to see detail
    :return:
    """
    try:
        more_edu_buttons = driver.find_element_by_xpath("//*[contains(text(), 'more experience')]")
        config.config_logger.debug('Load More experiences')
        actions = ActionChains(driver)
        time.sleep(2)
        actions.move_to_element(more_edu_buttons).perform()
        actions.click()
        time.sleep(4)
        actions.perform()
        try:
            time.sleep(4)
            driver.find_element_by_xpath("//*[contains(text(), 'more experience')]")
            click_show_more_experiences(driver)
        except Exception:
            pass
    except Exception:
        pass


def click_show_more_experiences_roles(driver):
    """
    This method find element having more experiences text and perform click operation to see detail
    :return:
    """
    try:
        more_edu_buttons = driver.find_elements_by_xpath("//*[contains(text(), 'more role')]")
        config.config_logger.debug('Load More roles of same company experiences')
        for more_edu_button in more_edu_buttons:
            actions = ActionChains(driver)
            time.sleep(2)
            actions.move_to_element(more_edu_button).perform()
            actions.click()
            time.sleep(2)
            actions.perform()
    except Exception:
        pass


def click_see_more_summary(driver):
    """
    This method expand summary section in browser
    :return:
    """
    try:
        see_more_summary = driver.find_element_by_xpath("//*[contains(text(), 'see more')]")
        time.sleep(2)
        actions = ActionChains(driver)
        time.sleep(2)
        actions.move_to_element(see_more_summary).perform()
        see_more_summary.send_keys(Keys.RETURN)
        time.sleep(2)
    except Exception:
        pass


def scroll_to_bottom(driver):
    """
    This method is use to scroll full page down to bottom
    :return:
    """
    try:
        height = driver.execute_script("return document.body.scrollHeight")
        new_height = 0

        # Get scroll height
        last_height = driver.execute_script("return document.body.scrollHeight")

        while True:
            # Scroll down to bottom
            driver.execute_script("window.scrollTo(0, " + str(last_height) + ");")

            # Wait to load page
            time.sleep(4)

            # Calculate new scroll height and compare with last scroll height
            if last_height < height:
                last_height += 500
            else:
                new_height = driver.execute_script("return document.body.scrollHeight")
                height = new_height
            if new_height <= last_height:
                break
    except Exception:
        pass


def scroll_to_top(driver):
    """
    This method is scroll browser from bottom to top
    :return:
    """
    try:
        height = 0
        new_height = 0

        # Get scroll height
        last_height = driver.execute_script("return document.body.scrollHeight")

        while True:
            # Scroll down to bottom
            driver.execute_script("window.scrollTo(0, " + str(last_height) + ");")

            # Wait to load page
            time.sleep(4)

            # Calculate new scroll height and compare with last scroll height
            if last_height > height:
                last_height -= 500
            else:
                new_height = 0
            if new_height >= last_height:
                break
    except Exception:
        pass


def click_all_show_more(driver):
    try:
        count = 0
        should_execute = True
        while count < 2:
            show_more_buttons = driver.find_elements_by_xpath("//*[contains(text(), 'Show more')]")
            for btn in show_more_buttons:
                try:
                    if btn.text:
                        actions = ActionChains(driver)
                        actions.move_to_element(btn).perform()
                        # actions.click()
                        btn.send_keys(Keys.RETURN)
                        time.sleep(8)
                except Exception as e:
                    print(e)
                    pass
            count += 1
    except Exception:
        pass


def click_show_more_skill(driver):
    try:
        show_more_buttons = driver.find_elements_by_xpath("//*[contains(text(), 'Show more')]")
        config.config_logger.debug('Load More skills')
        for btn in show_more_buttons:
            try:
                if btn.text:
                    actions = ActionChains(driver)
                    actions.move_to_element(btn).perform()
                    # actions.click()
                    btn.send_keys(Keys.RETURN)
                    time.sleep(8)
            except Exception as e:
                pass
    except Exception:
        pass


def skills_endorsements_section(driver):
    try:
        config.config_logger.debug('Load More skills endorsements section')
        # obj = driver.find_element_by_xpath("//*[contains(text(), 'Skills &amp; Endorsements')]")
        objs = driver.find_elements(By.XPATH, "//*[contains(string(), 'Skills & Endorsements')]")
        for obj in objs:
            if obj.text == "Skills & Endorsements":
                x = obj.text
                # obj.find_element_by_xpath("..").find_element_by_xpath("//*[contains(text(), 'Show more')]")
                flag = True
                while flag:
                    inner_html = obj.get_attribute("innerHTML")
                    if "Show more" in inner_html:
                        # obj = obj.find_element_by_xpath("//*[contains(text(), 'Show more')]")
                        break
                    obj = obj.find_element_by_xpath("..")

                xx = 0
                for svg in obj.find_elements_by_tag_name('svg'):
                    flag = True
                    while flag:
                        try:
                            flag = False
                            svg = svg.find_element_by_xpath("..")
                            actions = ActionChains(driver)
                            actions.move_to_element(svg).perform()
                            actions.click()
                            svg.send_keys(Keys.RETURN)
                            # f = open('{}.html'.format(count), 'w')
                            # f.write(driver.page_source)
                            # f.close()
                        except:
                            flag = True
                break
    except Exception:
        pass


def get_xpath_of_projects_and_publications(soup_obj):
    xpath_data = {}
    if not isinstance(soup_obj, BeautifulSoup):
        soup_obj = BeautifulSoup(soup_obj, "html.parser")
    project_section = get_attr_value_from_html_soup(soup_obj, config.PROJECTS_SECTION_SELECTORS['section'])
    if project_section:
        button_element = get_attr_value_from_html_soup(project_section,  config.PROJECTS_SECTION_SELECTORS['expand_button'])
        if button_element:
            xpath_data['projects_html'] = xpath_soup(button_element)
    publications_section = get_attr_value_from_html_soup(soup_obj, config.PUBLICATIONS_SECTION_SELECTORS['section'])
    if publications_section:
        button_element = get_attr_value_from_html_soup(publications_section,  config.PUBLICATIONS_SECTION_SELECTORS['expand_button'])
        if button_element:
            xpath_data['publications_html'] = xpath_soup(button_element)
    return xpath_data


def open_accomplishments_section_and_return_html_dict(driver):
    html_data = {'main_html': driver.page_source}
    config.config_logger.debug('Loading accomplishment section')
    try:
        xpath_data = get_xpath_of_projects_and_publications(driver.page_source)
        for k, v in xpath_data.items():
            try:
                button = driver.find_element_by_xpath(v)
                actions = ActionChains(driver)
                actions.move_to_element(button).perform()
                actions.click()
                button.send_keys(Keys.RETURN)
                time.sleep(8)
                click_all_show_more(driver)
                html_data[k] = driver.page_source
            except Exception as e:
                pass
        return html_data
    except Exception as e:
        return html_data


def login(driver, username=config.USERNAME, password=config.PASSWORD):
    """
    TO DO: don't login if user is already login
    TO DO: Send email in case web show recaptcha
    :param driver:
    :param username:
    :param password:
    :return:
    """
    username_field = driver.find_element_by_id("username")
    password_field = driver.find_element_by_id("password")

    username_field.send_keys(username)
    password_field.send_keys(password)

    soup = BeautifulSoup(driver.page_source, features="html.parser")

    driver.find_element_by_xpath("//form").submit()
    config.config_logger.debug('URL after login: {}'.format(driver.current_url))
    if driver.current_url.contains('www.linkedin.com/authwall'):
        config.config_logger.error('Not able to login')
        perform_another_login(driver)
        raise ValueError()
    else:
        config.config_logger.debug('linkedIn login Done')


def perform_another_login(driver, username=config.USERNAME, password=config.PASSWORD):
    """
    TO DO: don't login if user is already login
    TO DO: Send email in case web show recaptcha
    :param driver:
    :param username:
    :param password:
    :return:
    """
    try:
        driver.find_element_by_xpath(u'//a[text()="Sign in"]').click()
    except Exception:
        config.config_logger.exception('Exception occured while clicking on sign In')

    username_field = driver.find_element_by_id("login-email")
    password_field = driver.find_element_by_id("login-password")

    username_field.send_keys(username)
    password_field.send_keys(password)

    soup = BeautifulSoup(driver.page_source, features="html.parser")

    driver.find_element_by_xpath("//form").submit()
    config.config_logger.debug('URL after login: {}'.format(driver.current_url))
    if driver.current_url.contains('www.linkedin.com/authwall'):
        config.config_logger.error('Not able to login')
        raise ValueError()
    else:
        config.config_logger.debug('linkedIn login Done')

"""
ToDo: recaptcha handling
validate site load successfully
"""


def load_and_parse_profile(driver, _url, expert_model_id):
    config.config_logger.debug('parsing {}'.format(_url))
    load_site(driver, url=_url)
    time.sleep(10)
    scroll_to_bottom(driver)
    scroll_to_top(driver)
    time.sleep(4)
    click_see_more_summary(driver)
    config.config_logger.debug('Summary Done')
    time.sleep(4)
    click_show_more_experiences(driver)
    # load experience roles
    click_show_more_experiences_roles(driver)
    time.sleep(4)
    click_all_see_more(driver)
    time.sleep(4)
    click_show_more_edu(driver)
    time.sleep(4)
    click_all_show_more(driver)
    click_show_more_skill(driver)
    skills_endorsements_section(driver)
    html_data = open_accomplishments_section_and_return_html_dict(driver)
    time.sleep(2)
    parse_and_save_expert_profile(**html_data, linkedin_url=_url, expert_model_id=expert_model_id)


