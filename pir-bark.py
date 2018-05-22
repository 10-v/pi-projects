#pir-bark.py
#author:10v
#purpose: use PIR sensor to detect motions
import time #import this package to use sleep function
import RPi.GPIO as GPIO #import this package to interact with GPIO pins
import os #import this package to play sound files
GPIO.setmode(GPIO.BCM)
GPIO.setup(21,GPIO.IN) #set the GPIO pin for PIR sensor as input
counter = 0
try:
        while True: # Indefinitely keep checking for motion after every second
                input=GPIO.input(21) #set the current value received by PIR sensor
                if input==0:
                        print("Looking for Intruder : " + str(counter))
                        counter = counter + 1
                        time.sleep(1) 
                elif input==1:
                        print("Intruder detected, shoo them away!")
                        os.system("omxplayer -o local bark.wav") # play the bark sound on speaker
                        time.sleep(1)
finally: #If the program is interrupted, this block will be executed
	GPIO.cleanup() #make sure we are shutting down our program cleanly




