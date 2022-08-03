import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CatergoryPage from "./pages/CatergoryPage";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/CatergoryPage" element={<CatergoryPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
