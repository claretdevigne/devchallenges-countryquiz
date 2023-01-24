import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_COUNTER, SET_CORRECT_ANSWERS } from '../reducer/reducer'

export default function CapitalQuestion() {

  const [question, setQuestion] = useState(null)
  const [verify, setVerify] = useState(false)
  const [selection, setSelection] = useState(null)
  const questionSelector = useSelector(state => state.quizSlice.question)
  const dispatch = useDispatch()
  console.log(questionSelector)

  const handleNext = () => {
    if (selection === question.answer) {
      dispatch(SET_CORRECT_ANSWERS())
    }
    
    setVerify(false)
    setSelection(null)
    dispatch(SET_COUNTER())
  }

  const handleSelection = (option) => {
    setVerify(true)
    setSelection(option)
  }

  useEffect(() => {
    if ( Object.values(questionSelector).length > 0) {
      setQuestion(questionSelector)
    }
  }, [questionSelector])

  return (
    (question === null) ?
    <div></div> 
    :
    <div>
      <div className='fw-bolder'>{ `${question.capitalQuestion} is the capital of` }</div>
      
      <div onClick={ () => handleSelection(0) } className={ (verify === true && question.answer === 0) ? 'pointer quiz-option-correct d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : (verify === true && selection === 0) ? 'pointer quiz-option-error d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : 'pointer quiz-option d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3'}>
      <div className='d-flex gap-5'>
          <div>A</div>
          <div>{ question.options[0] }</div>
        </div>
        {
          ( verify === true && question.answer === 0 ) ?
          <i className="bi bi-check-circle"></i>
          :
          ( verify === true && selection === 0 ) ?
          <i className="bi bi-x-circle"></i> :
          <div className='d-none'></div>
        }
      </div>

      <div onClick={ () => handleSelection(1) } className={ (verify === true && question.answer === 1) ? 'pointer quiz-option-correct d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : (verify === true && selection === 1) ? 'pointer quiz-option-error d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : 'pointer quiz-option d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3'}>
        <div className='d-flex gap-5'>
          <div>B</div>
          <div>{ question.options[1] }</div>
        </div>
        {
          ( verify === true && question.answer === 1 ) ?
          <i className="bi bi-check-circle"></i>
          :
          ( verify === true && selection === 1 ) ?
          <i className="bi bi-x-circle"></i> :
          <div className='d-none'></div>
        }
      </div>

      <div onClick={ () => handleSelection(2) } className={ (verify === true && question.answer === 2) ? 'pointer quiz-option-correct d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : (verify === true && selection === 2) ? 'pointer quiz-option-error d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : 'pointer quiz-option d-flex justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3'}>
      <div className='d-flex gap-5'>
          <div>C</div>
          <div>{ question.options[2] }</div>
        </div>
        {
          ( verify === true && question.answer === 2 ) ?
          <i className="bi bi-check-circle"></i>
          :
          ( verify === true && selection === 2 ) ?
          <i className="bi bi-x-circle"></i> :
          <div className='d-none'></div>
        }
      </div>

      <div onClick={ () => handleSelection(3) } className={ (verify === true && question.answer === 3) ? 'pointer quiz-option-correct d-flex justify-content-between justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : (verify === true && selection === 3) ? 'pointer quiz-option-error d-flex justify-content-between justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3' : 'pointer quiz-option d-flex justify-content-between justify-content-between gap-5 border rounded-3 py-2 px-3 text-secondary my-3'}>
        <div className='d-flex gap-5'>
          <div>D</div>
          <div>{ question.options[3] }</div>
        </div>
        {
          ( verify === true && question.answer === 3 ) ?
          <i className="bi bi-check-circle"></i>
          :
          ( verify === true && selection === 3 ) ?
          <i className="bi bi-x-circle"></i> :
          <div className='d-none'></div>
        }
      </div>
      {
        (verify === true) ?
          <div className='d-flex justify-content-end'>
            <div onClick={ () => handleNext() } className='btn next-btn'>Next</div>
          </div> 
        :
          <div className='d-none'></div>
      }

    </div>
  )
}
