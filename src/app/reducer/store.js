import { configureStore } from "@reduxjs/toolkit";
import quizSlice from './reducer.js'

const store = configureStore({
  reducer: {
    quizSlice: quizSlice,
  }
})

export default store;