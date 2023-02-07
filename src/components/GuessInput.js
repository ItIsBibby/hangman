import React from "react";

//This component generates the letter buttons that the user uses to input their guesses.
//To stop users from guessing the same letter twice, and to easily display which letters have already been guessed, if the letter has already been guessed a plain letter is displayed instead of a button
const GuessInput = (props) => {

    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

    const alphabetButtons = alphabet.map(letter =>
        props.hangman.alphabet[letter] ? 
        <div key={letter} id={letter} className="letter pressed">{letter.toUpperCase()}</div>
        : 
        <button type="submit" key={letter} id={letter} className="letter unpressed" onClick={(e) => props.markLetterGuessed(e.target.id)}>{letter.toUpperCase()}</button>
    );

    return (
        <div id="alphabet">{alphabetButtons}</div>
    );
};

export default GuessInput