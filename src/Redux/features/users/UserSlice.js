import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "user1" },
  { id: "2", name: "user2" },
  { id: "3", name: "user3" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
