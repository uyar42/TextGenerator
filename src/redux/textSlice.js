import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

// const parasDef = 4;
// const format = "text";

export const getTexts = createAsyncThunk(
  "texts/getTexts",
  async ({ paras = 4, format = "text" }) => {
    const res = await axios(
      `${process.env.REACT_APP_ENDPOINT_URI}&paras=${paras}&format=${format}`
    );
    return res.data;
  }
);

export const textSlice = createSlice({
  name: "texts",
  status: "idle",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTexts.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(getTexts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = [action.payload];
    });
    builder.addCase(getTexts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      // console.log(state.error);
    });
  },
});

export const statusSelector = (state) => state.texts.status;

export default textSlice.reducer;
