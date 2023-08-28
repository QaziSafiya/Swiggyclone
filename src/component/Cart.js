import React from "react";
import Itemlist from "./Itemlist";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[1240px] w-full h-full ">
        <div className="md:w-[1000px] h-[140px] md:ml-[100px] w-[400px] ml-[-320px] mt-[40px]">
          <h1 className="text-3xl  ml-[470px]  ">Cart</h1>
          <button
            className="w-[180px] h-[40px] shadow-md bg-black text-white rounded-md  mt-4 ml-[400px]"
            onClick={handleclearcart}
          >
            clear cart
          </button>
        </div>
        <div className="md:w-[1000px] h-[140px] w-[400px]  md:ml-[100px] ml-[120px] md:mt-1 mt-[20px]">
          <div className=" md:w-[600px] h-[140px]  md:ml-[220px] ml-[-90px]">
            {cartItem?.length === 0 && (
              <div className=" md:ml-[-70px]">
                <img
                  className="md:w-[500px] w-[320px] md:ml-[120px]  "
                  src="https://clipground.com/images/food-png-7.png"
                  alt=""
                />
                <h1 className="md:ml-[240px]  ml-[50px] mt-4 text-2xl ">
                  your cart is empty
                </h1>
                <h2 className="md:ml-[260px] mt-4 md:text-[12px] text-[12px]  ml-[70px]">
                  You can go to home page
                </h2>

                <Link to="/">
                  <button className="w-[180px] h-[40px] shadow-md bg-orange-300 text-white rounded-md  mt-4  md:ml-[250px] ml-[50px]">
                    Home
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="mt-[-120px] md:w-[1000px] md:ml-[120px] w-[400px] ml-4">
          <Itemlist items={cartItem} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
