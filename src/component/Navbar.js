import React, { useState } from "react";
import { LOGO_LINK } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  const handle = () => {
    setOnlinestatus(!onlinestatus);
  };

  const online = useOnlineStatus();
  return (
    <div className="w-full h-[90px] flex justify-center items-center text-black shadow-md cursor-pointer">
      <div className="text-white text-2xl font-bold first-letter:text-4xl ml-[-200px]">
        <img className="w-[100px]" src={LOGO_LINK} alt="" />
      </div>

      <ul className=" md:flex ml-[400px] md:mt-4">
        <li className=" text-xl  px-3 mx-3 ">{online ? "🟢" : "🔴"}</li>
        <li className=" text-xl  px-3 mx-3 ">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-xl px-3 mx-3">
          <Link to="/about">About</Link>
        </li>

        <li className=" text-xl px-3 mx-3">
          <Link to="/contact">Contact</Link>
        </li>
        <li className=" text-xl px-3 mx-3">
          <Link to="/cart">Cart</Link>
        </li>
        {onlinestatus ? (
          <button
            className="bg-orange-400 text-white rounded-md w-[100px] h-[50px] mt-[-8px]"
            onClick={handle}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-orange-400 text-white rounded-md w-[100px] h-[50px] mt-[-8px]"
            onClick={handle}
          >
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
