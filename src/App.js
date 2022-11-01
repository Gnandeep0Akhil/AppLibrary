import "./App.css";
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import SpellCheck from "./Components/SpellCheck";
import Currency from "./Components/Currency";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/spellcheck" element={<SpellCheck />} />
      <Route path="/currency" element={<Currency />} />
    </Routes>
  );
}

export default App