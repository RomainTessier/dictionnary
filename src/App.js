import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home.jsx";
import { SearchProvider } from './contexts/SearchContext.jsx';
import { FontProvider } from './contexts/FontContext.jsx';
import { DarkThemeProvider } from './contexts/DarkThemeContext.jsx';

function App() {
  return (
    <>
      <DarkThemeProvider>
        <FontProvider>
          <SearchProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </SearchProvider>
        </FontProvider>
      </DarkThemeProvider>
    </>
  );
}

export default App;
