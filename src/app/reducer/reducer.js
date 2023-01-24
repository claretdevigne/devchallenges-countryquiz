import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  correctAnswers: 0,
  type: null,
  question: {}
}

const quizSlice = createSlice({
  name: 'Quiz Data',
  initialState,
  reducers: {
    SET_COUNTER: (state, action) => {
      if (action.payload === 'reset') {
        state.counter = 0
      } else {
        state.counter++
      }
    },

    SET_CORRECT_ANSWERS: (state, action) => {
      if (action.payload === 'reset') {
        state.correctAnswers = 0
      } else {
        state.correctAnswers++
      }
    },

    SET_TYPE: (state, action) => {
      state.type = action.payload
    },

    SET_QUESTION: (state, action) => {
      state.question = action.payload
    },

  }})

  export const { SET_CORRECT_ANSWERS, SET_COUNTER, SET_QUESTION, SET_TYPE } = quizSlice.actions
  export default quizSlice.reducer