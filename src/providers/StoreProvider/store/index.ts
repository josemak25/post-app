import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post";
import commentReducer from "./slices/comments";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
