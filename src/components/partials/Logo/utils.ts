export const getIsDarkTheme = (
  stableTheme: "dark" | "light" | undefined,
  isDarkTheme: boolean
) => {
  if (stableTheme) return !!(stableTheme === "dark");

  return isDarkTheme;
};
