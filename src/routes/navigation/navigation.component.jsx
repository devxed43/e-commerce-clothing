import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>Navigation Bar</div>
      {/* 
          this is our navigation top level component
          outlet renders everything that is a child of navigation
        */}
      <Outlet />
    </div>
  );
};

export default Navigation;
