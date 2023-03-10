import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import Match from "./components/Match";
import FinishPage from "./components/FinishPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/match" element={<Match />}></Route>
        <Route exact path="/homepage" element={<HomePage />}></Route>
        <Route exact path="/finished" element={<FinishPage />}></Route>
        <Route path='*' element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
