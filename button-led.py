#button-led
#author: 10v
#purpose: this program will operate the led light on press of the button component

from time import sleep #import sleep function from time library 
import RPi.GPIO as GPIO #import GPIO object from RPi library

GPIO.setmode(GPIO.BCM)

#define variables for readability 
ledPin = 4 #GPIO4 (actually pin number 7 on the board) 
buttonPin = 17 #GPIO17 (actually pin number 11 on the board) 

GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP) #setup button as input

GPIO.setup(ledPin, GPIO.OUT) #setup led light as output

GPIO.output(ledPin, False) #making sure led is off when the program starts

try:
    while True:
        GPIO.output(ledPin, not GPIO.input(buttonPin)) # logic to be repeated / press = ON, release = OFF
        sleep(.1)
finally:
    GPIO.output(ledPin, False) #making sure whenever program is interrupted to turn off LED
    GPIO.cleanup()
    
