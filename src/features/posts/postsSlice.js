import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'Learning Redux', content: "I've heard good things" },
    { id: '2', title: 'Learning React', content: "I've heard" }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postsSlice.reducer