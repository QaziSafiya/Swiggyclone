import React, { useState, useEffect } from "react";
import Restruentcard from "./Restruentcard";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Carousel_img } from "../utils/constant";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const Body = () => {
  const [rescard, setRescard] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [carousel, setCarousel] = useState([]);

  // Crousel

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

    setCarousel(
      convertdata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

    console.log(convertdata.data);
  };

  const sortRestaurantsByPrice = () => {
    const sortedList = [...filtered].sort(
      (a, b) =>
        a.info.costForTwo.match(/\d+/g) - b.info.costForTwo.match(/\d+/g)
    );
    setFiltered(sortedList);
  };

  const sortRestaurantsByTime = () => {
    const sortedList = [...filtered].sort(
      (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
    );
    setFiltered(sortedList);
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
        <div className="md:w-full w-[300px] ">
          <div
            id="content"
            className=" shadow-md rounded-md   md:flex grid grid-cols-2 mt-8 "
          >
            {carousel.map((item) => (
              <div
                className=" md:w-[300px] md:h-[200px]  h-[140px] mx-1 w-[140px]  my-4 hover:scale-90"
                key={item.id}
              >
                <img
                  className="  object-cover md:w-[300px] md:h-[200px] h-[150px] w-[150px]  rounded-md"
                  alt="carousel-logo"
                  src={Carousel_img + item.imageId}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex mx-[30px] mt-[160px]">
          <div className=" w-[300px] h-[80px] flex   px-4 mx-[20px] md:ml-[280px] ml-[-20px]">
            <input
              type="text"
              className=" w-[300px] h-[40px] mt-4 rounded-md px-3 shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <button
              className="md:w-[160px] px-2 h-[40px] shadow-md bg-black text-white rounded-md md:ml-2  mt-4"
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
          <div className="w-[400px] h-[80px] flex px-4  ml-[-320px] md:ml-[-130px]  mt-[80px] ">
            <button
              className="md:w-[220px] w-[130px] h-[40px] shadow-md bg-black text-white rounded-md px-2 mt-4"
              onClick={() => {
                const filterdata = rescard.filter((e) => e.info.avgRating >= 4);
                setFiltered(filterdata);
              }}
            >
              Top Restuarent
            </button>

            <button
              className="md:w-[200px] w-[120px] h-[40px] shadow-md bg-black text-white rounded-md mx-3 px-2   mt-4"
              onClick={() => sortRestaurantsByTime()}
            >
              Delivery Time
            </button>

            <button
              className="w-[180px] h-[40px] shadow-md bg-black text-white rounded-md hidden md:mt-4"
              onClick={() => sortRestaurantsByPrice()}
            >
              Price
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 mt-[50px] w-full h-full mx-8 ml-[-40px]  ">
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
