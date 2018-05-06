#led
#author: 10v
#purpose: this program will blink the led light for 5 seconds and then turn it off
import time #import time, to use the sleep function 
import RPi.GPIO as GPIO #import GPIO to interact with Raspberry Pi's GPIO pins

GPIO.setmode(GPIO.BCM)

GPIO.setup(4,GPIO.OUT)

GPIO.output(4, True) #turn the LED On 

time.sleep(5) #wait for 5 seconds
 
GPIO.output(4, False) #turn the LED off

