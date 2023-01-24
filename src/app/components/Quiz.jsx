import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CapitalQuestion from './CapitalQuestion'
import FlagQuestion from './FlagQuestion'
import Results from './Results'

export default function Quiz() {

  const type = useSelector(state => state.quizSlice.question.type)
  const counter = useSelector(state => state.quizSlice.counter)

  return (
    <div className='mx-4 mb-3'>
      {
        (counter === 10) ?
          <Results/> :
          (type === 'capital question') ?
            <CapitalQuestion /> :
              (type === 'flag question') ?
                <FlagQuestion/> :
                  <div></div>
      }
    </div>
  )
}
