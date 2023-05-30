import {createSlice} from '@reduxjs/toolkit';

interface langType {
    lang : string | null
}

const initState : langType = {
    lang : null,
}

export const  slice = createSlice({
    name:'lang',
    initialState:initState,
    reducers:{
        change : (state, action) => {
            state.lang = action.payload
        },
    },
})

export const name = slice.name;
export const langReducer = slice.reducer;
export const langAction = slice.actions;
