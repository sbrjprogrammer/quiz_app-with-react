
import React,{useState,useContext} from 'react';
import { MainMenu } from './components/MainMenu';
import { Quiz } from './components/Quiz';
import { EndScreen } from './components/EndScreen';
import {QuizContext} from './helper/Contexts'
import './App.css';


function App() {
  const [gameState,setGameState]=useState("menu")
  const [score,setScore]=useState(0)
  return (
    <div className="App">
      <h1>Quiz APP</h1>

    <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>

    {gameState==="menu"&& <MainMenu/>}
    {gameState==="Quiz"&& <Quiz/>}
    {gameState==="EndScreen"&& <EndScreen/>}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
