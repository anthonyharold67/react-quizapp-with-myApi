import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../contexts/QuizContext';
import "./quizPage.css";

const Quiz = () => {
    const navigate=useNavigate();
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const {quizQuestions} = useContext(QuizContext);
    const optionClicked = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
        }
    
        if (currentQuestion + 1 < quizQuestions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        }
      };
    
    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
    };
    return (
        <div style={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: "center",
            height: "100vh",
          }}>
      <h1>USA Quiz 🇺🇸</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {quizQuestions.length} correct - (
            {(score / quizQuestions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
          <button onClick={()=>navigate("/")}>Go Home</button>
          
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {quizQuestions.length}
          </h2>
          <h3 className="question-text">{quizQuestions[currentQuestion].title}</h3>
          <ul>
            {quizQuestions[currentQuestion].answers.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.is_right)}
                >
                  {option.answer_text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>

    )
}

export default Quiz