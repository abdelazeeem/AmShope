import React from "react";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Silder";
import Navbar from "../components/Navbar";
import Announce from "../components/Announce";

const Home = () => {
  return (
    <div className="">
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
