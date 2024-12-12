import { store } from "@store/store";
import { RootState } from "@store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectState = (state: RootState = store.getState()) => state.theme;

const selectTheme = createSelector(selectState, (state) => state.isDarkTheme);

const ThemeSelectors = {
  selectTheme,
};

export default ThemeSelectors;
