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
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Restruentcard;
