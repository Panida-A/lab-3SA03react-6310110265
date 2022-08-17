import { size } from 'lodash';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = 'apple';
function App() {

  return (

    <div style={{textAlign: "center"}}>
      <main>
        <h1>
          Game Logic
        </h1>
        <h3>
          Choose letters to connect the correct words.
        </h3>        
      </main>      
      <WordCard value = {word}/>
    </div>


  );
}

export default App;
