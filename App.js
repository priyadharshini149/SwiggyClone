import React from "react";
import ReactDOM from "react-dom/client"
const heading=React.createElement("h1",{id:"header_1"},"Hello World with react"); //created h1 tag

const root= ReactDOM.createRoot(document.getElementById("root")); //create root

root.render(heading); 


const parent=React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},
[React.createElement("h1",{}," i am h1 tag"),
React.createElement("h2",{},"i am h2 tag")
]),

React.createElement("div",{id:"child2"},
[React.createElement("h1",{}," i am h1 tag"),
React.createElement("h2",{},"i am h2 tag")
])
]
);

console.log(parent);
root.render(parent);