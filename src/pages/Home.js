import React, { useContext } from 'react'
import { QuizContext } from '../contexts/QuizContext'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {getQuiz, getQuizQuestions, category, quiz} = useContext(QuizContext)
  const navigate = useNavigate()

  return (
    <div style={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      // backgroundAttachment: "fixed",
      height: "100vh",
      
    }}>
      <h1>Welcome to the Quiz App</h1>
      
         <div > {category?.map((item) => {
            return (
              <button onClick={() => getQuiz(`${item.name}`)} key={item.id}>
                <h1>{item.name}</h1>
               </button>
            )
          }
          )}</div>
          {quiz !== [] && <h1>Quizs</h1>}
          <div style={{display:"block"}}>
          {quiz?.map((item,index) => {
            return (
              <button onClick={() => getQuizQuestions(`${item.category.name}/${item.title}`,navigate)} key={index}>
                <h1>{item.title}</h1>
               </button>
            )
          })
          }
          </div>


      </div>
  )
}

export default Home