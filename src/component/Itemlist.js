import React from "react";
import { CDN_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="  md:h-[160px] grid grid-cols-2 md:w-[1000px]  ml-4 "
        >
          <div className="md:w-[120px] md:h-[120px]  md:ml-[820px] ml-[220px]   w-[80px] rounded-md    md:mt-[20px] ">
            <img
              className="md:w-[120px] w-[80px] md:h-[100px]  rounded-md  md:mt-[1px] mt-[50px]"
              src={CDN_LINK + item.card.info.imageId}
              alt=""
            />
            <button
              className="md:w-[80px] md:h-[30px] md:ml-[14px] md:flex justify-center items-centerw-[60px] h-[30px] md:text-[15px] text-[12px]  rounded-md bg-white  text-green-600 shadow-md"
              onClick={() => handleAddItem(item)}
            >
              + Add
            </button>
          </div>
          <div className=" md:w-[800px] md:ml-[-500px] w-[400px]  ml-[-200px] px-3 md:mt-[12px] mt-[20px]">
            <ul>
              <li>
                <span className="my-8 ">{item.card.info.name}</span>
                <span className="text-black px-2">
                  (₹{item.card.info.price / 100})
                </span>
              </li>
            </ul>
            <p className=" md:w-[700px] w-[200px] px-1 my-4 text-gray-600  text-[15px]">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
