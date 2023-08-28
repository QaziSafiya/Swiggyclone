import React from "react";
import { CDN_LINK } from "../utils/constant";
const Restruentcard = (props) => {
  const { res } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = res.info;
  return (
    <div className=" w-[270px] h-[350px] rounded-md shadow-md  mx-[60px] my-9">
      <div>
        <img
          className="w-[270px] h-[200px] rounded-md"
          src={CDN_LINK + cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="px-4 mt-4">
        <p>{name}</p>
        <p>{cuisines.join(",")}</p>
        <div className="flex">
          {" "}
          <p className="bg-green-600 text-white w-[40px] h-6 rounded-sm flex justify-center items-center mt-2">
            ✰{avgRating}
          </p>
          <p className="ml-[90px] mt-3">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default Restruentcard;
