import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'John Wick' },
  { id: '1', name: 'Keanu Reeves' },
  { id: '2', name: 'Matt Damon' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
