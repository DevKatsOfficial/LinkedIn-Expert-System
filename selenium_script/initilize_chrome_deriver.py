import os
import sys
import time
from random import randint
sys.path.append(os.path.abspath("."))
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

import config
from parse_html.linkedin_user_profile import parse_and_save_expert_profile
from utilities.extract_data import get_attr_value_from_html_soup, xpath_soup


def initialize_chrome():
    """This method is used to initialize chrome driver"""
    driver = webdriver.Chrome(executable_path=r"./chromedriver")
    return driver


driver = initialize_chrome()


def load_site(url=config.ORIGIN_SITE_LOGIN_URL):
    """
    This method return updated driver object after loading of desired url
    :param url:
    :return:  updated driver after page loading in browser
    """
    driver.get(url)
    return driver


def quit_browser(driver):
    """
    user to quit running browser.
    :return:
    """
    driver.quit()


def click_all_see_more():
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


def click_show_more_edu():
    """
    This method find element having more education text and perform click operation to see detail
    :return:
    """
    try:
        more_edu_buttons = driver.find_element_by_xpath("//*[contains(text(), 'more education')]")
        actions = ActionChains(driver)
        actions.move_to_element(more_edu_buttons).perform()
        actions.click()
        actions.perform()
    except Exception:
        pass


def click_show_more_experiences():
    """
    This method find element having more experiences text and perform click operation to see detail
    :return:
    """
    try:
        more_edu_buttons = driver.find_element_by_xpath("//*[contains(text(), 'more experiences')]")
        actions = ActionChains(driver)
        time.sleep(2)
        actions.move_to_element(more_edu_buttons).perform()
        actions.click()
        time.sleep(2)
        actions.perform()
    except Exception:
        pass


def click_see_more_summary():
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


def scroll_to_bottom():
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


def scroll_to_top():
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


def click_all_show_more():
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


def click_show_more_skill():
    try:
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
                pass
    except Exception:
        pass


def skills_endorsements_section():
    try:
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
    PROJECT_SECTION_SELECTOR_FOR_XPATH = {
        "section": {"tag": "section", "class": "projects", "fetch_method": "find"},
        "svg": {"tag": "svg",  "fetch_method": "find"}
    }
    project_section = get_attr_value_from_html_soup(soup_obj, PROJECT_SECTION_SELECTOR_FOR_XPATH['section'])
    if project_section:
        svg_element = get_attr_value_from_html_soup(project_section,  PROJECT_SECTION_SELECTOR_FOR_XPATH['svg'])
        if svg_element:
            xpath_data['projects_html'] = xpath_soup(svg_element)
    PUBLICATIONS_SECTION_SELECTOR_FOR_XPATH = {
        "section": {"tag": "section", "class": "publications", "fetch_method": "find"},
        "svg": {"tag": "svg",  "fetch_method": "find"}
    }
    publications_section = get_attr_value_from_html_soup(soup_obj, PUBLICATIONS_SECTION_SELECTOR_FOR_XPATH['section'])
    if publications_section:
        svg_element = get_attr_value_from_html_soup(publications_section,  PUBLICATIONS_SECTION_SELECTOR_FOR_XPATH['svg'])
        if svg_element:
            xpath_data['publications_html'] = xpath_soup(svg_element)
    return xpath_data


def open_accomplishments_section_and_return_html_dict():
    html_data = {'main_html': driver.page_source}
    try:
        # xpath_data = get_xpath_of_projects_and_publications(driver.page_source)
        # for k, v in xpath_data.items():
        #     svg = driver.find_element_by_xpath(v)
        #     try:
        #         actions = ActionChains(driver)
        #         actions.move_to_element(svg).perform()
        #         actions.click()
        #         svg.send_keys(Keys.RETURN)
        #         time.sleep(8)
        #         html_data[k] = driver.page_source
        #     except Exception as e:
        #         pass
        # return html_data
        obj = driver.find_element_by_xpath("//*[contains(text(), 'Accomplishments')]")
        flag = True
        while flag:
            inner_html = obj.get_attribute("innerHTML")
            if ("Projects" in inner_html or
                "Honors" in inner_html or
                "Awards" in inner_html or
                "Publications" in inner_html or
                "Language" in inner_html or
                "Organization" in inner_html):
                flag = False
            obj = obj.find_element_by_xpath("..")
        # return obj

        svgs = obj.find_elements_by_tag_name("svg")
        count = 1
        for svg in svgs:
            try:
                actions = ActionChains(driver)
                actions.move_to_element(svg).perform()
                actions.click()
                svg.send_keys(Keys.RETURN)
                time.sleep(8)
            except:
                flag = True
                while flag:
                    try:
                        flag = False
                        svg = svg.find_element_by_xpath("..")
                        actions = ActionChains(driver)
                        actions.move_to_element(svg).perform()
                        actions.click()
                        svg.send_keys(Keys.RETURN)
                    except :
                        flag = True
            file_name = ""
            flag = True
            count = 0
            while flag:
                if count >=5:
                    break
                count +=1
                file_name = ""
                if svg.text.startswith("Language\n"):
                    file_name = "language_html"

                if svg.text.startswith("Honors & Awards\n"):
                    file_name = "honors_html"
                if svg.text.startswith("Publications\n"):
                    file_name = "publications_html"
                if svg.text.startswith("Organization\n"):
                    file_name = "organization"
                if svg.text.startswith("Projects\n"):
                    file_name = "projects_html"
                if svg.text.startswith("Courses\n"):
                    file_name = "courses_html"
                svg = svg.find_element_by_xpath("..")
                if file_name:
                    flag = False
            html_data[file_name] = driver.page_source
        return html_data
    except Exception as e:
        import traceback
        traceback.print_exc()
        return html_data


def login(username=config.USERNAME, password=config.PASSWORD):
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


driver.maximize_window()
load_site()

"""
ToDo: recaptcha handling
validate site load successfully
"""

if driver.current_url.__contains__("login"):
    login(username=config.USERNAME, password=config.PASSWORD)
time.sleep(6)
for _url in config.SAMPLE_LINKEDIN_PROFILES_TO_PARSE:
    load_site(url=_url)
    time.sleep(10)
    scroll_to_bottom()
    scroll_to_top()
    time.sleep(4)
    click_see_more_summary()
    time.sleep(4)
    click_show_more_experiences()
    time.sleep(4)
    click_all_see_more()
    time.sleep(4)
    click_show_more_edu()
    time.sleep(4)
    click_all_show_more()
    click_show_more_skill()
    skills_endorsements_section()
    html_data = open_accomplishments_section_and_return_html_dict()
    time.sleep(2)
    parse_and_save_expert_profile(**html_data, linkedin_url=_url)
    time.sleep(randint(600, 1200))

quit_browser(driver)