#pir.py
#author:10v
#purpose: light up LED when motion is detected in the PIR sensor
import time #import this package to use sleep function 
import RPi.GPIO as GPIO #import this package to interact with GPIO pins 

GPIO.setmode(GPIO.BCM)

GPIO.setup(21,GPIO.OUT) #set the GPIO pin for LED light as output
GPIO.setup(4,GPIO.IN) #set the GPIO pin for PIR sensor as input

try:
	while True:
		i=GPIO.input(4) #set the current value received by PIR sensor
		if i==0:
			print("Sensing Motion")
			GPIO.output(21,False) #turn off the LED light 
			time.sleep(1)
		elif i==1:
			print("Motion Detected")
			GPIO.output(21, True) #turn on the LED light
			time.sleep(1)
finally:
	GPIO.output(21, False) #make sure to turn LED light off
	GPIO.cleanup()




