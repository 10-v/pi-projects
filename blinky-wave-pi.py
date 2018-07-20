#title:blinky-wave-pi.py
#author:10v
import RPi.GPIO as GPIO
import time
import random

LED_pin_blue = 23
LED_pin_red = 21
LED_pin_green = 22


GPIO.setmode(GPIO.BCM)
GPIO.setup(LED_pin_blue, GPIO.OUT)
GPIO.setup(LED_pin_red, GPIO.OUT)
GPIO.setup(LED_pin_green, GPIO.OUT)
try:
    while True:
        on_random_time = random.random() * 3
        off_random_time = random.random() * 3
        #print ("Random On Time = " + on_random_time)
        #print ("Random Off Time = " + off_random_time)
        GPIO.output(LED_pin_blue, GPIO.HIGH)
        #time.sleep(on_random_time)
        GPIO.output(LED_pin_red, GPIO.HIGH)
        #time.sleep(1)
        GPIO.output(LED_pin_green, GPIO.HIGH)
        #print("On")
        time.sleep(on_random_time)
        GPIO.output(LED_pin_green, GPIO.LOW)
        #time.sleep(random_time)
        GPIO.output(LED_pin_red, GPIO.LOW)
        #time.sleep(1)
        GPIO.output(LED_pin_blue, GPIO.LOW)
        #print("Off")
        time.sleep(off_random_time)
finally:
    GPIO.cleanup()