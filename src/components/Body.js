import RestaruentCard from "./RestaruentCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CarouselHeader from "./CarouselHeader";

const Body = () => {
  const [carouselheaderdata, setCarouselheaderdata] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  // State variable  --- Super powerfull variable

  const [listOfRestaruents, setListOfRestaruents] = useState([]);
  const [filteredRestaruents, setFilteredRestaruents] = useState([]);

  const [searchTest, setSearchTest] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
 
    const data=await fetch('https://my-swiggybackend-1.onrender.com/api/restaurants')
    const json = await data?.json();
    //console.log(json?.data);

    const carouseldata=await fetch('https://my-swiggybackend-1.onrender.com/api/headercard')
    const carouseldatajson = await carouseldata?.json();
   
    
   
    // setListOfRestaruents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListOfRestaruents(json)
    //console.log(listOfRestaruents);
    // setFilteredRestaruents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setFilteredRestaruents(json)
    // setCarouselheaderdata(
    //   json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    // );

    setCarouselheaderdata(carouseldatajson)
  
  }
  //conditional rendering
  if (listOfRestaruents?.length === 0) {
    return <Shimmer />;
  }

  if (!onlineStatus)
    return (
      <h1>Looks like you are offline please check your internet connection</h1>
    );

  return (
    <div className="body">
    
    <div className="flex max-w-[1500px] overflow-x-scroll w-fit">
      {carouselheaderdata &&
        carouselheaderdata.map((carouseldata, index) => (
          <div className="flex-shrink-0 mr-4" key={index}>
            <CarouselHeader data={carouseldata} />
          </div>
        ))}
    </div>
   

      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid"
            value={searchTest}
            onChange={(e) => {
              setSearchTest(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-300 m-4 rounded-lg"
            onClick={() => {
              const searchfilteredRestaruentss = listOfRestaruents.filter(
                (res) =>
                  res.name.toLowerCase().includes(searchTest.toLowerCase())
              );
              setFilteredRestaruents(searchfilteredRestaruentss);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-yellow-300 m-4 rounded-lg"
            onClick={() => {
              // console.log("Before filter"+listOfRestaruents);
              const filteredList = listOfRestaruents.filter((res) => {
                return res.avgRating >= 4.3;
              });
              // console.log("After filter"+filteredList);
              setFilteredRestaruents(filteredList);
            }}
          >
            Rating 4.3+
          </button>

          <button
            className="px-4 py-2 bg-red-500 300 m-4 rounded-lg"
            onClick={() => {
              const fastdelivery = listOfRestaruents.filter((res) => {
                return res.sla.deliveryTime <= 25;
              });
              setFilteredRestaruents(fastdelivery);
            }}
          >
            Fast Delivery
          </button>

          <button
            className="px-4 py-2 bg-green-500 300 m-4 rounded-lg"
            onClick={() => {
              const pureVeg = listOfRestaruents.filter((res) => {
                return res.veg;
              });
              setFilteredRestaruents(pureVeg);
            }}
          >
            Pure Veg
          </button>

          <button
            className="px-4 py-2 bg-orange-500 300 m-4 rounded-lg"
            onClick={() => {
              const pureVeg = listOfRestaruents.filter((res) => {
                return (
                  res.costForTwo >= 300 &&
                  res.costForTwo <= 600
                );
              });
              setFilteredRestaruents(pureVeg);
            }}
          >
            Rs.300-Rs.600
          </button>
          <button
            className="px-4 py-2 bg-slate-500 300 m-4 rounded-lg"
            onClick={() => {
              const pureVeg = listOfRestaruents.filter((res) => {
                return res.costForTwo <= 300;
              });
              setFilteredRestaruents(pureVeg);
            }}
          >
            Less than Rs.300
          </button>
        </div>
        <div className="hidden md:block m-4 p-4 flex item-center">
          <label>Username</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaruents &&
          filteredRestaruents.map((restaurent) => (
            <Link
              key={restaurent?._id}
              to={"/restaurants/" + restaurent.id}
            >
              <RestaruentCard resData={restaurent} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
