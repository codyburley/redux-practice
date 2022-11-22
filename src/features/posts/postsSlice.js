import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns/sub";

const initialState = [
  {
    id: '1',
    title: 'Test Title 1',
    content: 'Some content 1',
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: '2',
    title: 'Test Title 2',
    content: 'Some content 2',
    date: sub(new Date(), { minutes: 5 }).toISOString()
  }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;