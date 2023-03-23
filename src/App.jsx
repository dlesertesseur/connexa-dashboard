import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import AppFrame from "./components/AppFrame";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter basename="/dashboard">
          <Routes>
            <Route path="*" element={<AppFrame />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
