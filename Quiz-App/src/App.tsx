import React, { useEffect, useState } from "react"
import QuestionCard from "./components/QuestionCard"
import axios from "axios";

function App() {
  const [loading , setLoading] = useState(false);
  const [questions , setQuestions] = useState([]);

  useEffect(() => {
    startTrivia()
  }, [])

  const startTrivia = async () => {
    try {
      const res = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
    setQuestions(res.data.results)
    console.log(res.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }
  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>React Quiz App</h1>
      <button onClick={startTrivia}>Start</button>
      <p>Score:</p>
      <p>Loading Questions.....</p>
      <QuestionCard 
      question={questions} />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

export default App
 