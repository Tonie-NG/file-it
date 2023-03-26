import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  login: boolean;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
  } as UserState,
  reducers: {
    update: (state: UserState, action: { payload: UserState }) => {
      state.login = action.payload.login;
    },
  },
});
export const { update } = userSlice.actions;
export default userSlice.reducer;
