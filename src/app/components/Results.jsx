import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import winners from '../../images/winners.svg'
import { SET_COUNTER, SET_CORRECT_ANSWERS } from '../reducer/reducer'

export default function Results() {

  const rightAnswers = useSelector(state => state.quizSlice.correctAnswers)
  const dispatch = useDispatch()

  const handleAgain = () => {
    dispatch(SET_COUNTER('reset'))
    dispatch(SET_CORRECT_ANSWERS('reset'))
  }

  return (
    <div className='d-flex flex-column align-items-center gap-2'>
      <img src={ winners } alt='Winners' className='mb-5' />
      <div className='fs-2 fw-bolder'>Results</div>
      <div className='mb-5'>You got <span className='text-success fs-2 fw-bolder'>{ rightAnswers }</span> correct answers</div>
      <div onClick={ () => handleAgain() } className='btn btn-outline-dark'>Try again</div>
    </div>
  )
}
