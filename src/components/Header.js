import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const onlineStatus=useOnlineStatus()
  const [btnname,setBtnname]=useState("Login");
// if no depedency array then it is called every time
//if there is empty depedency array then it is called only once
//useState is a special purpose create a local state variable inside the functional component


const {loggedInUser}=useContext(UserContext)
//Subscribing to the store using a selector
const cartItems=useSelector((store)=>store.cart.items)
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-orange-400 lg:bg-red-300 sm:w-auto">
        <div className="logo-container">
          <img
            className="w-15 hidden md:block"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴" }</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/about">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart - {cartItems.length}</Link></li>
           
            <button className="login px-4" onClick={()=>{
              
             btnname=="Login" ? setBtnname("Logout") : setBtnname("Login");
              

            }}>{btnname}</button>

            <li className="px-4 font-bold">
                 {loggedInUser}
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;