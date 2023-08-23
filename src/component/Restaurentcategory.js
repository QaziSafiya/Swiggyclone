import React from "react";
import Itemlist from "./Itemlist";

const Restaurentcategory = ({ data, show, setShowindex }) => {
  const handleclick = () => {
    setShowindex();
  };
  return (
    <div className="w-[1000px] h-full shadow-md ml-[170px] cursor-pointer my-12 ">
      <div onClick={handleclick} className="w-full my-5 px-3 grid grid-cols-2">
        <div>
          <span>
            {data.title} ({data.itemCards.length})
          </span>
        </div>
        <div className="ml-[400px]">
          <span className="">⬇️</span>
        </div>
      </div>
      <div>{show && <Itemlist item={data.itemCards} />}</div>
    </div>
  );
};

export default Restaurentcategory;
