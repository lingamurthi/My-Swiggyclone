import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";



//import { Component } from "react";





//class About extends Component
class About extends React.Component
{

    constructor(props)
    {
    super(props);
  //  console.log("Parent Constructor is called");
    }

    // componentDidMount()
    // {
    //    console.log("Parent Component did mount");
    // }
    render()
    {
      //  console.log("Parent render is called ");
        return (
            <div>
               {/* <h1>
               ABOUT US PAGE
               </h1>
               <User name={"Lingaaaaaaa"}/> */}
               {/* <UserClass name={"MP"} location={"Karnataka"}/>
               <UserClass name={"MP2"} location={"Karnataka2"}/> */}


               <div>
                <UserContext.Consumer>
                  {
                    ({loggedInUser})=>(
                      <h1>{loggedInUser}</h1>
                    )
                  }
                </UserContext.Consumer>
               </div>
                <User/> 
            </div>
        )
    }
}


export default About;