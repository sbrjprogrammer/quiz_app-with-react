import React,{useContext}from "react";
import { QuizContext } from "../helper/Contexts";
import '../App.css';

const MainMenu=()=>{
  const{gameState,setGameState}= useContext(QuizContext)
    return(
        <div className="Menu">
            <button onClick={()=>{setGameState("Quiz");}}>start quiz</button>
        </div>
    )
}

export {
    MainMenu
};