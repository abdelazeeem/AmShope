import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Box } from "@material-ui/core";

import { Link } from "@material-ui/core";

const Navbar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px] ";

  return (
    <Box className="navbar h-[60px] shadow-md relative z-10 ">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
        <div className=" left flex flex-1  items-center">
          <div className="cursor-pointer text-[16px] mobile:hidden">En</div>

          {/* Search Input */}
          <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]">
            <input
              type="text"
              className="border-none mobile:w-[50px]"
              placeholder="Search"
            />
            <Link href="/CatergoryPage" color="inherit">
              <Search
                className="text-[#8a4af3] m"
                style={{ fontSize: "16px" }}
              />
            </Link>
          </div>
        </div>

        {/* Logo */}
        <div className="center flex-1 text-center  mobile:ml-6">
          <div className="logo font-bold mobile:text-sm">
            <Link href="/" color="inherit">
              <StorefrontIcon />
            </Link>
          </div>
        </div>

        <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
          <div className={style}>
            <div className={style}>
              <Link href="/Register" color="inherit">
                Register
              </Link>
            </div>
          </div>
          <div className={style}>
            <Link href="/Login" color="inherit">
              Sign In
            </Link>
          </div>
          <div className={style}>
            <Badge badgeContent={4} color="primary">
              <Link href="/CatergoryPage" color="inherit">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
