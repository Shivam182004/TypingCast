import { configureStore } from '@reduxjs/toolkit'
import typingTestReducer from '../redux/features/typingTestSlice'


export const store = configureStore({
  reducer: {typingTest: typingTestReducer},
})