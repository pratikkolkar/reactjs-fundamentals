import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice";

//Step1: Configure Store
export const store = configureStore({
    reducer: todoReducer
})