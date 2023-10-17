import React from "react";
import logo from "../Image logo/logo-png.png";
const Header = () => {
  return (
    <>
      <div className="p-4 flex items-center bg-yellow-400 shadow-md">
        <img src={logo} alt="logo" height={200} width={50} className="px-2" />
        <h1 className="text-white text-2xl font-semibold">Gm keep</h1>
      </div>
    </>
  );
};
export default Header;
