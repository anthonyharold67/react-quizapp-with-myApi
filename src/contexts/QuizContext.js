import React, {createContext,useContext,useState} from 'react'
import { AuthContext } from './AuthContext'
import {toastErrorNotify} from ".././helpers/ToastNotify";
import axios from 'axios';

export const QuizContext = createContext()

const url = "https://sekunev.pythonanywhere.com/api/";
const QuizContextProvider = (props) => {
    const {myKey}= useContext(AuthContext)
    const [quiz,setQuiz] = useState([])
    const [quizQuestions,setQuizQuestions] = useState([])
    const [category,setCategory] = useState([])

    const getCategory = async (category) => {
        try {
            const res = await axios.get(`${url}`)
            setCategory(res.data)

            console.log(res);
            
        }
        catch(error) {
            toastErrorNotify(error.message)
        }
    }
    const getQuiz = async (category) => {
        try {
            const res = await axios.get(`${url}quiz/${category}/`,{headers:{'Authorization':`Token ${myKey}`}})
            setQuiz(res.data)
            console.log(res);
        }
        catch(error) {
            toastErrorNotify(error.message)
        }
    }
    const getQuizQuestions = async (quiz,navigate) => {
        try {
            const res = await axios.get(`${url}quiz/${quiz}/`,{headers:{'Authorization':`Token ${myKey}`}})
            setQuizQuestions(res.data)
            navigate('/quiz')
            console.log(res);
        }
        catch(error) {
            toastErrorNotify(error.message)
        }
    }

    React.useEffect(() => {
        getCategory()
    },[])
    return(
        <QuizContext.Provider value={{ 
            getCategory,
            getQuiz,
            getQuizQuestions,
            // setCategory,
            setQuiz,
            setQuizQuestions,
            category,
            quiz,
            quizQuestions
        }}>
            {props.children}
        </QuizContext.Provider>
    )

}
export default QuizContextProvider