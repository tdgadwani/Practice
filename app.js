import React from "react";
import ReactDOM  from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Namaste from React"
// );
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title",
//   },
//   "Namaste from React"
// ); The following code can be written in as below

// tabindex--->HTML      && tabIndex----->React//JSX  
// class----->HTML    &&      className----->React//JSX

// Compilation of  {JSX==>{ React.createElement ==> Object ==> HTML(DOM) } }


const heading1=(<h1 id="title" key ="h1">
  Namaste from React
  </h1>)

const heading2=<h1 id="title" key="h2">Namasate</h1>

const heading=React.createElement(
  "h2",
  {
    id:"title",
  },
  [heading1,heading2,"Creating Nav Bar"]
);

const Heading3=()=>{
  return (
    <h1 id="title" >
      Namaste from Component
    </h1>
  );
}

const l1=React.createElement(
  "li",
  {
    tabIndex:1,
  },
  "Home"
);

const l2=React.createElement(
  "li",
  {
    tabIndex:3,

  },
  "About Us"
);

const l3=React.createElement(
  "li",
  {
    tabIndex:2,
  },
  "Support"
);

const list=React.createElement(
  "ul",
  {
    id:"list",
  },
  [l1,l2,l3]
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading1, heading2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render([heading,list]);

// root can be only one in whole project
// pass objects in array to load elements in root
