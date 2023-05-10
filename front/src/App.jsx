import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Breed from "./Breed";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/breed" element={<Breed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
