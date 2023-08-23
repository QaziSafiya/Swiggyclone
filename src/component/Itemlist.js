import React from "react";
import { CDN_LINK } from "../utils/constant";

const Itemlist = ({ item }) => {
  return (
    <div>
      {item.map((ele) => (
        <div
          key={ele.card.info.id}
          className="  h-[160px] grid grid-cols-2 w-[1000px] "
        >
          <div className="">
            <img
              className="w-[120px] rounded-md ml-[850px] mt-[20px] "
              src={CDN_LINK + ele.card.info.imageId}
              alt=""
            />
            <button className="w-[80px] h-[30px] ml-[870px]  rounded-md bg-black text-white">
              add
            </button>
          </div>
          <div className=" w-[800px] ml-[-500px] px-3 ">
            <ul>
              <li>
                <span className="my-8 ">{ele.card.info.name}</span>{" "}
                <span className="text-black">{ele.card.info.price}</span>
              </li>
            </ul>
            <p className=" w-[700px] my-4 text-gray-600 text-[15px]">
              {ele.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
