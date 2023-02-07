import './App.css';
import { useSelector, useDispatch} from 'react-redux'
import getWord from './api/GetWord'
import WordTiles from './components/WordTiles';
import GuessInput from './components/GuessInput';
import Image from './components/Image';
import Help from './components/Help';
import EndMessage from './components/EndMessage';
import { guessLetter, reset, toggleHelpDisplay } from './store/hangman';

function App() {

  const hangman = useSelector((state) => state.hangman)
  const dispatch = useDispatch();

  const markLetterGuessed = (event) => {
    dispatch(guessLetter(event))
  };

  async function fetchNewWord () {
    const word = await getWord()
    dispatch(reset(word))
  };

  const help = () => {
    dispatch(toggleHelpDisplay())
  };

  //The jsx that is returned is made up of mostly of components from the components folder, with state and relevent reducer function passed where necessary
  return (
    <div className="App">
      <Image wrongGuesses={hangman.wrongGuesses}/>
      <WordTiles hangman={hangman}/>
      <GuessInput hangman={hangman} markLetterGuessed={markLetterGuessed}/>
      <button id="newGame" onClick={() => fetchNewWord()}>New Game</button>
      <Help hangman={hangman} help={help}/>
      <EndMessage hangman={hangman}/>
    </div>
  );
};

export default App;