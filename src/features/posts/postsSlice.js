import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', title: 'Test Title 1', content: 'Some content 1' },
  { id: '2', title: 'Test Title 2', content: 'Some content 2' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;