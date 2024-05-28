import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "redux",
    content: "anything for testing redux",
    date: sub(new Date(), { days: 1 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "data flow",
    content: "anything for testing data flow",
    date: sub(new Date(), { days: 1 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdding: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdding(state, action) {
      const { postId, reaction } = action.payload;
      const exictingPost = state.find((post) => post.id === postId);
      if (exictingPost) {
        exictingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAll = (state) => state.posts;

export const { postsAdding, reactionAdding } = postSlice.actions;

export default postSlice.reducer;
