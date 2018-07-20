#title:blinky-pi.py
#author:10v
import RPi.GPIO as GPIO
import time
LED_pin_red = 4
GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_pin_red, GPIO.OUT)
try:
    while True:
        GPIO.output(LED_pin_red, True)
        print("On")
        time.sleep(1)
        GPIO.output(LED_pin_red, False)
        print("Off")
        time.sleep(1)
finally:
    GPIO.cleanup()