import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
// import Topics from "../Topics/Topics";

const Main = () => {
  return (
    <div>
      <Navbar>
      </Navbar>
      
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
