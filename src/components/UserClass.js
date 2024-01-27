import React from "react"
class UserClass extends React.Component
{

    constructor(props)
    {
        
      super(props)
      
   //   console.log(props);
      this.state={
        count:0,
        //count2:1,
        userInfo: {
            name: "a",
        }
      }
    //  console.log(this.props.name + "Child Constructor is called ");
    
    }

  async componentDidMount()
  {
   //  console.log(this.props.name+"Child Component did mount");
   const data= await fetch("https://api.github.com/users/lingamurthi")
    const json=await data.json();
    //console.log("My name" + json.name);
 
//console.log(this.state.userInfo.name);
//   this.timer= setInterval(()=>{
//     console.log("Namastae react");
//    },1000)
  
  }

  
  
componentDidUpdate(prevProps,prevState)
{
    if(this.state.count != prevState.count)
    {

    }
    //console.log("Component did update is called");
    //console.log(this.state.userInfo.name);

}
  componentWillUnmount()
  {
    //console.log("component will unmount is called");
  //  clearInterval(this.timer)
  }
    render()
    {
      //  console.log(this.props.name + "Child render is called");
        //const {name,location}= this.props;
       // const {count,count2}=this.state
        return (
            <div>
                {/* <h1>count1 {count}</h1> */}
                {/* <button onClick={()=>{
                   
                   this.setState({
                    count:this.state.count+1,
                    count2:this.state.count2+1
                   })
                }}>Count Increase</button> */}
                {/* <h1>count2 {count2}</h1> */}
                <h2>{this.state.userInfo.name}</h2>
              
                {/* <h4>Contact</h4> */}
            </div>
          )  
    }
}

export default UserClass