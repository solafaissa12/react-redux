import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import PostReducer from "../features/posts/PostSlice";
import UserReducer from "../features/users/UserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: PostReducer,
    users: UserReducer,
  },
});
