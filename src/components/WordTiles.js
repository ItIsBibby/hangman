import React from "react";

//This component generates the tiles for each letter of the unknown word.
//If the letter has been guessed then it is displayed within the tile, and the className found is added, so that its style can be changed.
//If a word has not yet been fetched and saved in state, this component instead returns a start message
const WordTiles = (props) => {
    const letters = props.hangman.word.map( i =>
        <div key={i.key} className={`tile ${i.found ? "found" : "" }`} >{i.found||i.missed ? i.letter.toUpperCase() : ""}</div>
    )
    if (props.hangman.word.length) {
        return (
            <div className="word">{props.hangman.isLoaded? letters : "Loading"}</div>
        );
    } else {
        return (
            <div id="startMessage">Let's play Hangman! Press "New Game" to start</div>
        );
    };
};

export default WordTiles