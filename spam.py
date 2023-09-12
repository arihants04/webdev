import time
import pyautogui


def spam():

    text = open("/Users/ari/Desktop/webdev/message.txt")
    for each_line in text:
        pyautogui.typewrite(each_line)
        pyautogui.press('return')


time.sleep(10)
r = 0
for r in range(100):
    spam()
    r+1
