# Tenzies Game

##Instructions
Roll until all dice are the same. Click each die to freeze it at its current value between rolls.

##Construction
This app was built from a project shared at the Scrimba's React course. I take pride in being able to develop most of the app without nedding to check the available instructions.

###Features
There are two states in the React App. Whether or not the game is on (ie. the game hasn't started yet or the user has reached the same values for each die) and one called 'dice' that is an array of objects containing the id, the value each die has been freezed/selected by the user.
Values for each die and randomized and all are set as deselected when the user first presses 'New game'. At this point, the gameOn state is set to true. When the user presses the 'Roll' button, all selected die are preserved and the rest have their values randomized again.
Every time the user freezes a die, there's a for loop responsible to verify if all die values are the same. If this condition is met, the gameOn is set to false and the <Confetti/> effect is activated.
The button turns to 'New Game' again so that the user can replay a brand new game from the start.