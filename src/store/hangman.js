import { createSlice } from "@reduxjs/toolkit";

//The app's initial state and reducers are defined here

export const hangmanSlice = createSlice({

    name: "hangman",

    initialState: {
        //The empty word array, and the isLoaded boolean are used when fetching the random word from the API
        word: [],
        isLoaded: true,
        //The alphabet object stores boolean values which denote which letters have been guessed by the  user, and the wrongGuesses value keeps track of how many incorrect letters have been entered
        alphabet: { a: false,  b: false, c: false, d: false, e: false, f: false, g: false, h: false,
            i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false,
            r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false
        },
        wrongGuesses: 0,
        //The helpDisplay value is just used to toggle whether the help text is being displayed to the user
        helpDisplay: false,
        //Finally, a win or lose value is assigned at the end of the game, to determine which end message to display
        win: false,
        lose: false
    },

    reducers: {

        //The guessLetter reducer is triggered by the user's button input, and handles the guess differently depending on state
        guessLetter: (state, action) => {
            //This if statement means that players can only guess letters and thereby change state if a word has been fetched to guess, otherwise the buttons do nothing.
            if (state.word.length) {
                //First an endGame function is defined, which triggers the end of the game, which reveals the answer, and disables the letter buttons
                const endGame = () => {
                    state.word.forEach(function (letter) {
                        if (!letter.found) {
                            letter.missed = true
                        };
                    });
                    state.alphabet = { a: true,  b: true, c: true, d: true, e: true, f: true, g: true, h: true,
                        i: true, j: true, k: true, l: true, m: true, n: true, o: true, p: true, q: true,
                        r: true, s: true, t: true, u: true, v: true, w: true, x: true, y: true, z: true
                    };
                };
                //Here the function marks the letter chosen by the user as true in the alphabet object, denoting that is has been guessed, thereby disabling its button
                state.alphabet[action.payload] = true;
                
                //Here a series of if statements determine if the gussed letter is correct, and if so, if all of the letters have been gussed
                //Those values are stored in the correct and allFound variables
                let correct = false
                let allFound = true
                state.word.forEach(function (letter) {
                    if (letter.letter == action.payload) {
                        letter.found = true;
                        correct = true;
                    };
                    if (!letter.found) {
                        allFound = false
                    };
                });

                //Depending on those variables, and the wrongGuesses value in state, this may trigger the endGame function, which also updates the win or lose value
                if (allFound && correct) {
                    endGame()
                    state.win = true;
                };
                if (!correct) {
                    state.wrongGuesses += 1;
                    if (state.wrongGuesses > 10) {
                        endGame()
                        state.lose = true;
                    };
                };
            };
        },

        //The reset reducer can be triggered by the user at any time, it takes a new word, and saves it into state, while reverting all other state back to its inital value
        reset: (state, action) => {
            state.isLoaded = false;
            state.alphabet = { a: false,  b: false, c: false, d: false, e: false, f: false, g: false, h: false,
                i: false, j: false, k: false, l: false, m: false, n: false, o: false, p: false, q: false,
                r: false, s: false, t: false, u: false, v: false, w: false, x: false, y: false, z: false
            };
            state.word = [];
            let keyValue = 0;
            action.payload.split('').forEach(function (letter) {
                state.word[keyValue] = {
                    letter: letter,
                    key: keyValue,
                    found: false,
                    missed: false
                }
                keyValue += 1;
            });
            state.wrongGuesses = 0;
            state.win = false;
            state.lose = false;
            state.isLoaded = true;
        },

        //This reducer toggles the toggleHelpDisplay
        toggleHelpDisplay: (state) => {
            if (state.helpDisplay) {
                state.helpDisplay = false;
            } else {
                state.helpDisplay = true;
            };
        }
    }
});

export const { guessLetter, reset, toggleHelpDisplay
} = 
    hangmanSlice.actions;

export default hangmanSlice.reducer;