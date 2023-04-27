import { createSlice } from "@reduxjs/toolkit";

interface State {
  isDarkTheme: boolean;
}

const initialState: State = {
  isDarkTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setTheme(state, action) {
      state.isDarkTheme = action.payload;
    },
  },
});

export const { switchTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
