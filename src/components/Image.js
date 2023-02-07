import React from "react";

//This component imports the hangman picture files from img/index.js to be displayed
import { 
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
    hangman8,
    hangman9,
    hangman10,
    hangman11
} from '../img/index'

//They are placed in an array, so that a different image can be displayed depending on the wrongGuesses value in state
const chances = [
    hangman1,
    hangman2,
    hangman3,
    hangman4,
    hangman5,
    hangman6,
    hangman7,
    hangman8,
    hangman9,
    hangman10,
    hangman11
]

//The wrongGuesses value is used to select the index of the corresponding image
const Image = (props) => {
    if (props.wrongGuesses) {
        return(
            <img src={chances[props.wrongGuesses - 1]} className="image"/>
        )
    }
    //If there have been no guesses, an empty div is returned that occupies the same space.
    //This is just to make sure this component occupies a consistent space, regardless of if an image is being displayed
    else {
        return(
            <div className="image"></div>
        )
    }
};

export default Image