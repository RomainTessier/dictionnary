import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home.jsx";
import { SearchProvider } from './contexts/SearchContext.jsx';
import { FontProvider } from './contexts/FontContext.jsx';

function App() {
  return (
    <>
      <FontProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </SearchProvider>
      </FontProvider>
    </>
  );
}

export default App;
