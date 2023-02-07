import React from "react";

//This component displays an end messages, which is different depending on the win or lose state
const EndMessage = (props) => {
    if (props.hangman.win) {
        return (
            <div className="endMessage" id="win">You won! Good job!</div>
        );
    };

    if (props.hangman.lose) {
        return (
            <div className="endMessage" id="lose">You lost. Too bad.</div>
        );
    };
};

export default EndMessage