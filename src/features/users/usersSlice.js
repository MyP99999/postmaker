import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Mateo' },
    { id: '1', name: 'Mateos' },
    { id: '2', name: 'Matheos' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;
 
export default usersSlice.reducer