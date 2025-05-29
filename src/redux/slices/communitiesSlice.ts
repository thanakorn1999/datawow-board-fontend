import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  list: [],
} as const;

export const userSlice = createSlice({
  name: "communities",
  initialState,
  reducers: {
    setCommunitiesList: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState>
    ) => {
      state.list = action.payload.list;
    },
  },
});

export const selectCommunities = (state) => state.communities;
export const selectCommunitiesList = (state) => selectCommunities(state).list;

export const { setCommunitiesList } = userSlice.actions;

export default userSlice.reducer;
