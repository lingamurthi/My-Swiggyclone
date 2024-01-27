import RestaruentCard from "./RestaruentCard";
import resList from "../utils/mockData";
import { useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Body = () => {
  
const {loggedInUser,setUserName}= useContext(UserContext)
  const onlineStatus=useOnlineStatus()
    // State variable  --- Super powerfull variable

    const [listOfRestaruents,setListOfRestaruents]=useState([]);
    const [filteredRestaruents,setFilteredRestaruents]=useState([]);

    const [searchTest,setSearchTest]=useState("");

    useEffect( () => {
      fetchData();
    }, []);

   const fetchData = async () =>{
const data = await fetch('https://corsproxy.org/?' + encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.444057&lng=75.908034&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'));
const json = await data?.json();
//console.log(json?.data);
//console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);
setListOfRestaruents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//console.log(listOfRestaruents);
setFilteredRestaruents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };
 
 
   //conditional rendering
   if(listOfRestaruents?.length === 0) 
   {
    return <Shimmer/>
   } 
   
 
   if(!onlineStatus)return <h1>Looks like you are offline  please check your internet connection</h1>






    return(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" data-testid="searchInput" className="border border-solid" value={searchTest} onChange={(e)=>{
              setSearchTest(e.target.value)
            }}/>
            <button className="px-4 py-2 bg-green-300 m-4 rounded-lg" onClick={()=>{

            
             const searchfilteredRestaruentss=listOfRestaruents.filter((res)=>
              res.info.name.toLowerCase().includes(searchTest.toLowerCase())
              )
              setFilteredRestaruents(searchfilteredRestaruentss)
            }}>search</button>
          </div>
          <div className="m-4 p-4 flex item-center">
          <button className="px-4 py-2 bg-yellow-300 m-4 rounded-lg" onClick={()=>{
             // console.log("Before filter"+listOfRestaruents);
                const filteredList=listOfRestaruents.filter((res) =>{return res.info.avgRating >= 4.3});
               // console.log("After filter"+filteredList);
                setFilteredRestaruents(filteredList)
                 }}>Top Rated Restaruents</button>
          </div>
          <div className="hidden md:block m-4 p-4 flex item-center">
            <label>Username</label>
            <input className="border border-black p-2"
            value={loggedInUser}
             onChange={(e)=>{
              setUserName(e.target.value)
            }}/>
          </div>
               
        </div>
        <div className="flex flex-wrap">
          {filteredRestaruents&&filteredRestaruents.map((restaurent) => (
            <Link key={restaurent?.info?.id} to={"/restaurants/"+restaurent?.info?.id}><RestaruentCard resData={restaurent}/></Link>
          ))}
          
     
        </div>
      </div>
    );
  };

  export default Body