import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
  },
});

export const selectUser = (state) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
