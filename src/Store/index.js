import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Slices/Counter'
import LanguageSlice from "./Slices/Language";
const store = configureStore({
    reducer : {
        counter : counterSlice ,
        Language : LanguageSlice

    }
})
export default store 