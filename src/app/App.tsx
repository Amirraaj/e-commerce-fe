import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/Customer/About";
import Home from "../pages/Customer/Home";
import LogIn from "../pages/Customer/Login";
import Product from "../pages/Customer/Product";
import Register from "../pages/Customer/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* customer portal routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>} />

          {/* admin portal routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
