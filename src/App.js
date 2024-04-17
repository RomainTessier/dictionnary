import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home.jsx";
import { SearchProvider } from './contexts/SearchContext.jsx';


function App() {
  return (
    <>
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </SearchProvider>
    </>
  );
}

export default App;
