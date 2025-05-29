import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import communitiesSlice from "./slices/communitiesSlice";

export default configureStore({
  reducer: {
    communities: communitiesSlice,
    user: userSlice,
  },
});
