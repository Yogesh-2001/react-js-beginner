import AllProducts from "./components/AllProducts";
import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product-details/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
