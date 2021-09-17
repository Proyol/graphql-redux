import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animeList: []
}

const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        incrementsCounter: (state, action) => {
            state.counter += 1
        }
    }
})

export const { incrementsCounter } = HomePageSlice.actions
export default HomePageSlice.reducer