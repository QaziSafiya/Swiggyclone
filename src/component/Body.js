import React, { useState, useEffect } from "react";
import Restruentcard from "./Restruentcard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [rescard, setRescard] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4726817&lng=77.7085091&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const convertdata = await data.json();

    setRescard(
      convertdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFiltered(
      convertdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      convertdata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) return <h1>you are offline</h1>;

  //Loading functionality
  if (rescard?.length <= 0) {
    return <Shimmer />;
  }
  return (
    <div className="w-full h-full flex justify-center items-center py-4 text-black">
      <div className="max-w-[1240px] w-full h-full  ">
        <div className="flex mx-[30px]">
          <div className=" w-[300px] h-[80px] flex px-4 mx-[20px]">
            <input
              type="text"
              className=" w-[200px] h-[30px] mt-4 rounded-md px-3 shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <button
              className="w-[80px] h-[30px] shadow-md bg-black text-white rounded-md ml-2 mt-4"
              onClick={() => {
                const searchitem = rescard.filter((ele) =>
                  ele.info.name.toLowerCase().includes(search.toLowerCase())
                );
                setFiltered(searchitem);
                console.log(searchitem);
              }}
            >
              Search
            </button>
          </div>
          <div className="w-[400px] h-[80px] flex px-4 ">
            <button
              className="w-[180px] h-[40px] shadow-md bg-black text-white rounded-md  mt-4"
              onClick={() => {
                const filterdata = rescard.filter((e) => e.info.avgRating >= 4);
                setFiltered(filterdata);
              }}
            >
              Top Restuarent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-[200px] h-full mx-6  ">
          {filtered?.map((e) => {
            return (
              <div>
                <Link to={"/restro/" + e.info.id}>
                  <Restruentcard res={e} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
