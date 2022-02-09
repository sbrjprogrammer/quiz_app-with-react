import React from "react";
import "../App.css";
import { useContext } from "react";
import { QuizContext } from "../helper/Contexts";
import { Question } from "../helper/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setGameState,  } = useContext(
    QuizContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
    
      <h1>
        {score} / {Question.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export{
 EndScreen
}  