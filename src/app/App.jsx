import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import SYMBOL from '../images/undraw.svg'
import Quiz from './components/Quiz'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_QUESTION } from './reducer/reducer'

export default function App() {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const counter = useSelector(state => state.quizSlice.counter)

  const connectDB = () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }

  const handleCapitalQuestions = () => {
    let options = []
    let questionSelected = 0
    let capital = ''
    let countries = []
    let capitalQuestion = {}
    for (let i = 0; i < 4; i++) {
      options.push(Math.floor(Math.random() * 251))
    }

    questionSelected = Math.floor(Math.random() * 4)
    
    capital = data[options[questionSelected]].capital

    for (let i = 0; i < 4; i++) {
      countries.push(data[options[i]].name.common)
    }

    capitalQuestion = {
      type: 'capital question',
      capitalQuestion: capital,
      options: countries,
      answer: questionSelected
    }

    dispatch(SET_QUESTION(capitalQuestion))
    setIsLoading(false)
  }

  const handleFlagQuestions = () => {
    let options = []
    let questionSelected = 0
    let countries = []
    let flagQuestion = {}
    let flag = ''
    for (let i = 0; i < 4; i++) {
      options.push(Math.floor(Math.random() * 251))
    }

    questionSelected = Math.floor(Math.random() * 4)
    
    flag = data[options[questionSelected]].flags.png

    for (let i = 0; i < 4; i++) {
      countries.push(data[options[i]].name.common)
    }

    flagQuestion = {
      type: 'flag question',
      flagQuestion: flag,
      options: countries,
      answer: questionSelected
    }

    dispatch(SET_QUESTION(flagQuestion))
    setIsLoading(false)
  }

  useEffect(() => {
    
    if (data === null) {
      connectDB()
    } else {
      console.log('COUNTER CHANGE')
      let q = Math.floor(Math.random() * 2)
      console.log(q)
      dispatch(SET_QUESTION(q))

      if( q === 0) {
        handleCapitalQuestions()
      } else {
        handleFlagQuestions()
      }
    }      
      
  }, [data, counter])

  return (
    <div className='app-container vw-100 vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div className='app-container-quiz-container'>
        <div>
          <div></div>
        </div>
        <div className='app-container-quiz-container-questions-container bg-white rounded-4 d-flex flex-column justify-content-between pb-4'>
          <div className='text-white d-none fw-bolder fs-4'>COUNTRY QUIZ</div>
          <div className='d-flex'>
            <div className='app-container-quiz-title-sm fw-bolder fs-4 m-3'>COUNTRY QUIZ</div>
            <div className='col'></div>
              <div className='col app-container-quiz-container-symbol-container'>
                {
                  ( counter < 10) ?
                  <img className='app-container-quiz-container-symbol position-relative' src={ SYMBOL } alt='Symbol'/>
                  :
                  <div className='d-none'></div>
                }
              </div>
            </div>
            {
              (isLoading === true) ?
              <div className='text-center'>LOADING...</div> :
              <Quiz/>
            }
            <div className='sign-sm d-none mt-3'>Created by - Claret Devigne</div>      
          </div>
      </div>
      <div className='sign text-white'>Created by - Claret Devigne</div>
    </div>
  )
}
