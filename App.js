/*
<div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
   <div id="child2">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>
</div>




ReactElement(Object) => HTML(browser understand)
*/
import React from "react";   /* React is coming from node_modules */
import ReactDOM  from "react-dom";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namastae react"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello111111 World"
);
//console.log(heading); //object

//console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

root.render(parent);
