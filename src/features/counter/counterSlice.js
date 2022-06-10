import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {count: 0},
    reducers: {
        increment: (state, {payload}) => {
            state.count = state.count + payload;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer;