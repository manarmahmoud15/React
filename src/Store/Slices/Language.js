import { createSlice } from "@reduxjs/toolkit";


const LanguageSlice = createSlice ({
    name : 'Language' ,
    initialState : {
        CurrentLang : 'EN' ,
        AvailableLangs : ['EN' , 'AR' , 'FR']
    },
    reducers : {
        updateLanguage : (state , action )=> {
            state.CurrentLang = action.payload 
        }

    }
})
export const  {
    updateLanguage
} = LanguageSlice.actions
export default LanguageSlice.reducer