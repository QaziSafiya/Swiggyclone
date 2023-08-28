import React, { useState } from "react";
import { LOGO_LINK } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartPlus, FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [onlinestatus, setOnlinestatus] = useState(true);

  const handle = () => {
    setOnlinestatus(!onlinestatus);
  };

  const cartItem = useSelector((store) => store.cart.items);
  const online = useOnlineStatus();

  const [state, setState] = useState(false);
  const handleclick = () => {
    setState(!state);
  };
  return (
    <div className="w-full h-[90px] flex justify-between items-center text-black shadow-md cursor-pointer">
      <div className="text-white text-2xl font-bold first-letter:text-4xl md:ml-[200px]  ">
        <img className="w-[100px]" src={LOGO_LINK} alt="" />
      </div>

      <ul className=" md:flex hidden   ">
        <li className=" text-xl  px-3 mx-3 ">Online:{online ? "🟢" : "🔴"}</li>
        <li className=" text-xl  px-3 mx-3 ">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-xl px-3 mx-3">
          <Link to="/about">About</Link>
        </li>

        <li className=" text-xl px-3 mx-3">
          <Link to="/contact">Contact</Link>
        </li>

        <li className=" text-[15px] px-2 mx-6 ">
          <Link to="/cart">
            <FaCartPlus size={30} />
            (cart{cartItem.length})
          </Link>
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

      <div onClick={handleclick} className="md:hidden z-10 text-gray-500  ">
        {!state ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !state
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col bg-black text-white  justify-center items-center "
        }
      >
        <li className=" text-xl  px-3 py-3 mx-3 my-4  rounded-md hover:border-2 border-orange-300">
          Online:{online ? "🟢" : "🔴"}
        </li>
        <li className=" text-xl  px-7 py-3 rounded-md  mx-3 my-4 hover:border-2 border-orange-300 ">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-xl px-7 py-3 rounded-md  mx-3 my-4 hover:border-2 border-orange-300">
          <Link to="/about">About</Link>
        </li>

        <li className=" text-xl px-5 py-3 rounded-md  mx-3 my-4 hover:border-2 border-orange-300">
          <Link to="/contact">Contact</Link>
        </li>

        <li className=" text-[15px] px-7 py-3 rounded-md  mx-6 my-4 hover:border-2 border-orange-300 ">
          <Link to="/cart">
            <FaCartPlus size={30} />
            (cart{cartItem.length})
          </Link>
        </li>
        {onlinestatus ? (
          <button
            className="bg-orange-400 text-white rounded-md w-[100px] h-[50px] md:mt-[-8px] hover:border-2 border-orange-300  mt-7 my-8"
            onClick={handle}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-orange-400 text-white rounded-md w-[100px] h-[50px] md:mt-[-8px] mt-7 my-8"
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
