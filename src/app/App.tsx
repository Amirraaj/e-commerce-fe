import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Product from "../pages/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
