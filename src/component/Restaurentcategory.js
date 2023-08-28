import React from "react";
import Itemlist from "./Itemlist";

const Restaurentcategory = ({ data, show, setShowindex }) => {
  const handleclick = () => {
    setShowindex();
  };
  return (
    <div className="md:w-[1000px] w-[400px] h-full shadow-md md:ml-[170px] cursor-pointer my-12  ">
      <div
        onClick={handleclick}
        className="md:w-full  my-5 px-3 grid grid-cols-2"
      >
        <div className="mx-2 shadow-sm">
          <span>
            {data.title} ({data.itemCards.length})
          </span>
        </div>
        <div className="md:ml-[400px] ml-[80px]">
          <span className="">⬇️</span>
        </div>
      </div>
      <div>{show && <Itemlist items={data.itemCards} />}</div>
    </div>
  );
};

export default Restaurentcategory;
