import React from "react";

//This component creates a button, which toggles the helpDisplay state, which in turn toggles the display of the instructions text
const Help = (props) => {

    return (
        <div>
            <button type="submit" id="help" onClick={() => props.help()}>Help</button>
            {props.hangman.helpDisplay ? <p id="helpText">
                Once you start a new game, you'll be given a random word, your job is to guess that word letter by letter.
                Click on a letter to guess it. But be careful, each incorrect guess will cost you, and add another line to the gallows.
                If you make too many incorrect guesses (11) before you've found all of the correct letters you will lose the game. Good luck!
            </p> : ""}
        </div>
    );
};

export default Help