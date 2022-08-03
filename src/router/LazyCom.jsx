import { lazy } from "react";

// Login
const Login = lazy(() => import("pages/login"));

// Dashboard
const Home = lazy(() => import("pages/Home"));

// Categories
const CategoryPage = lazy(() => import("pages/CatergoryPage"));

// Products
const ProductPage = lazy(() => import("pages/ProductPage"));
// Register
const Register = lazy(() => import("pages/Register"));

export { Home, Login, CategoryPage, ProductPage, Register };
