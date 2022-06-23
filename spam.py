import time
import pyautogui


def spam():

    text = open("/Users/ari/Desktop/html/message.txt")
    for each_line in text:
        pyautogui.typewrite(each_line)
        pyautogui.press('return')


time.sleep(5)
r = 0
for r in range(100):
    spam()
    r+1
