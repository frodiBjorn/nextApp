import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postsList: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default postsSlice.reducer;
