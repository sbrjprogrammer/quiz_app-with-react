import React,{useState,useContext} from "react";

import {Questions} from '../helper/QuestionBank'
import { QuizContext } from '../helper/Contexts';
import { EndScreen } from "./EndScreen";
// import { GameStateContext } from "../helper/Context";
import '../App.css'




const Quiz=()=>{ 
  const { gameState,setGameState,score,setScore } = useContext(
    QuizContext
   );
    const[currQuestion,setCurrQuestion]= useState(0);
    const[optionChosen,setOptionChosen]= useState(""); 
   
    

    const chooseOption = (option) => {
      setOptionChosen(option);
    };

    
  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };


  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("EndScreen");
  };


    return(
       <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
         <div className="option">
         <button onClick={()=>{setOptionChosen("A")}}>{Questions[currQuestion].optionA}</button>
           <button onClick={()=>{setOptionChosen("B")}}>{Questions[currQuestion].optionB}</button>
           <button onClick={()=>{setOptionChosen("C")}}>{Questions[currQuestion].optionC}</button>
           <button onClick={()=>{setOptionChosen("D")}}>{Questions[currQuestion].optionD}</button>
         </div>


         {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
       </div>
    )
}

export {
    Quiz
};