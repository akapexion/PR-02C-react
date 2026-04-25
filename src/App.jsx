import React, { useContext } from "react";
import { themeContext, ThemeProvider } from "./context/ThemeContext";
import Routing from "./features/Routing";

const ThemedApp = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <>
      <Routing />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}
export default App;
