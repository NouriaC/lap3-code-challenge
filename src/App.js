import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import * as Pages from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/:name" element={<Pages.Repo />} />
      </Routes>
    </div>
  );
}

export default App;
