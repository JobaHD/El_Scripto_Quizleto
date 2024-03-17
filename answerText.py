from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait


with webdriver.Firefox() as driver:

    # origin website url
    driver.get(
        "https://quizlet.com/758855362/learn")
    wait = WebDriverWait(driver, 10)
    term = driver.find_element(By.CSS_SELECTOR, ".FormattedText>*")
    print(term)
