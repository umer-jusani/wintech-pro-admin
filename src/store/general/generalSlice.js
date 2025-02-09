import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, // Modify this based on your state structure
};

const generalSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, reset, setValue } = generalSlice.actions;
export default generalSlice.reducer;
