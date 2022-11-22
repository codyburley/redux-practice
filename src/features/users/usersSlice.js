import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'John Smith' },
  { id: '1', name: 'Ben Affleck' },
  { id: '2', name: 'Matt Damon' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
