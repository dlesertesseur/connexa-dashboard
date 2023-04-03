import AppFrame from "./components/AppFrame";
import "./i18n";
import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const config = {};
if (import.meta.env.MODE === "development") {
  config.assetsPath = import.meta.env.VITE_ASSETS_PATH_DEV;
} else {
  config.assetsPath = import.meta.env.VITE_ASSETS_PATH;
}

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <BrowserRouter basename="/connexa">
          <Routes>
            <Route path="*" element={<AppFrame config={config}/>} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
