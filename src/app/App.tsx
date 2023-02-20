import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import About from "../pages/Customer/About";
import Home from "../pages/Customer/Home";
import LogIn from "../pages/Customer/Login";
import Product from "../pages/Customer/Product";
import Register from "../pages/Customer/Register";
import AdminHome from "../pages/Admin/Home";
import "./App.css";
import ProductList from "../pages/Admin/Product";
import AddProduct from "../features/Admin/Product/addProduct";
import Category from "../pages/Admin/Category";
import AddCategory from "../features/Admin/Category/addCategory";
import EditCategory from "../features/Admin/Category/editCategory";
import EditProduct from "../features/Admin/Product/editProduct";
import UserDatails from "../pages/Admin/UserDetails";
import AllProducts from "../pages/Customer/AllProducts";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/* customer portal routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/allproducts" element={<AllProducts/>} />


            {/* admin portal routes */}
            <Route path="/admin" element ={<AdminHome/>} />
            <Route path="/adminproduct" element ={<ProductList/>} />
            <Route path="/adminproduct/create" element ={<AddProduct/>} />
            <Route path="/adminproduct/edit/:id" element ={<EditProduct/>} />
            <Route path="/admincategory" element ={<Category/>} />
            <Route path="/admincategory/create" element ={<AddCategory/>} />
            <Route path="/admincategory/edit/:id" element ={<EditCategory/>} />
            <Route path="/adminuser" element={<UserDatails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
