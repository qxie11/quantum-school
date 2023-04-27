import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const themeToLocalStorage =
  (store: ToolkitStore) => (next: any) => (action: any) => {
    const result = next(action);
    const {
      theme: { isDarkTheme },
    } = store.getState();

    if (isDarkTheme.toString() !== localStorage.getItem("theme")) {
      localStorage.setItem("theme", isDarkTheme.toString());
    }

    return result;
  };

export default themeToLocalStorage;
