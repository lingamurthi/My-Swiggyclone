import React from "react";
//import ReactDOM  from "react-dom";
import ReactDOM from "react-dom/client";

//React.createElement ==> Object ==> HTMLElement(render)
const heading = React.createElement("h1", { id: "heading" }, "Namastae React");

//console.log(heading);
//JSX ------- HTML like or XML like syntax     (transpiled before it reaches the JS engine) ---- PARCEL - BABEL  (BABEL will transpelling the code)
//JSX babel transpiles it to React.createElement

//React Element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    Namastae React using JSX
  </h1>
);

//console.log(jsxHeading);

//React Component
//Class based component - OLD
//Functional based component - NEW

//React Functional component

const fn=()=>{
    return true;
}
const fn2=()=>true;
//arrow function
const Title2=()=>(
    <h1>
        Namastae react using JSX
    </h1>
)

//normal function
const Title=function(){
 return(
    <h1>
    Namastae react using JSX
</h1>
 )
}

// HeadingComponent is a component composition  (composite to compoenent one another)

// {Title()}     or       <Title/>       or      <Title></Title> 
const number=1000;
const HeadingComponent=()=>(
 <div id="container"> 
   <h2> {number} </h2>   
   <h2>{jsxHeading}</h2>                  
   {Title()}           
   {/* <h2> {console.log("aaaaaaaaaaaaaa")} </h2>     */}
    <Title/>
    <h1 className="heading">Namastae react Functional Component</h1>
 </div>
)
const HeadingComponent2=()=>{
  return <h1>Namastae react Functional Component</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);       //rendering react component
//root.render(jsxHeading);    renderng react element