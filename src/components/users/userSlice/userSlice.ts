import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    userName: string
}

const initialState: CounterState = {
    userName: "",
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        userName: (state, action) => {
            state.userName = action.payload;
            console.log("actionpayoad", action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { userName } = userSlice.actions

export default userSlice.reducer