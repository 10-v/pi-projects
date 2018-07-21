print ("Raspi's Cave Adventure")
print ("You see the cave split into a left and right tunnel")
print ("Do you choose to go left or right?")
cave = input ("Enter L for left or R for right:")
if cave.upper() == "L" or cave == "LEFT":    
    print ("You walk into the left cave.")
    print ("You see an underground river, a boat, and a path that leads to a torch.")
    choice = input ("Enter T for torch,B for boat, or R for river:")
    if choice.upper() == "T":
        print ("Game Over!!!")
    elif choice.upper() == "B":
        print ("Game Over!!!")
    elif choice.upper() == "R":
        print ("You Win!!!")
    else:
        print ("Game Over!!!")
    
elif cave.upper() == "R" or cave == "RIGHT":
    print ("You walk into the right cave. The cave starts sloping downward.")
    print("You see a hole in the floor")
    choice2 = input("Climb down rope (R) or walk towards Torch (T)?")
    if choice2.upper() == "R":
        print("Enter a dragon's layer")
        choice3 = input("Fight the dragon (F) or Enter the dark room (D)?")
        if choice3.upper() == "F":
            print ("Game Over!!!")
        else:
            print ("You win !!!")
    else:
        print ("Game Over!!!")    
else:
    print ("Game Over!!!")
