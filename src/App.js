import { size } from 'lodash';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Popup from './components/Popup';
import { useState, useEffect } from 'react';

const word = 'apple';
function App() {

  const [buttonPopup, setButtonPopup] = useState(false);
  /*const [timedPopup, setTimedPopup] = useState(false);  
  
  useEffect (() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000) ;
  }, []);*/

  return (

    <div className="button-htp">

      <div className="wrapper">

        <main>
        <br></br>
          <h1>Game Logic</h1>        
          <WordCard value = {word}/>

          <div className="htp">
            <button className="how2p" onClick={() => setButtonPopup(true)}>How to play?</button>
          </div>
          <br></br>
          
        </main>  

      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>How to play?</h3>
        <br></br>
        <p>Choose letters to connect to the correct words.</p>
      </Popup>        

    </div>
  );
}

export default App;
