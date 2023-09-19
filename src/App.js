import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestoMenu from "./components/RestoMenu";
import CollectionMenu from "./components/CollectionMenu";

//##################################################################################################################

/*
food ordering app
- header
    . logo
    . links
        * home
        * contact
        * cart
- body
    . search bar
    . card container
        * card --- image,name of rest,rating,cuisine,delivary tym
- footer
    . copyright
    . links
*/

const App = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:id",
                element:<RestoMenu/>
            },
            {
                path:"/collection/:id/:title",
                element:<CollectionMenu/>
            },
            {
                path:"/collection/:id/:title/restaurants/:id",
                element:<RestoMenu/>
            },

        ]
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>)


// Routing- client side Routing

//         - server side routing

//###################################################################################################################
//const heading=React.createElement("h1",{id:"header_1"},"Hello World with react"); //created h1 tag
// const jsxheading=<h1>Hello World with react</h1>

//react element
// const heading=<h1>Hello world with react element !!!</h1>

// const Title = () => (
//     <h1>Hello world</h1>
// );
//react functional component
// const Heading= () => (
//     <div>
//         <Title/> 
//         <h1>Hello world with react component !!!</h1>
//     </div>
    
// );// component composition


//const root= ReactDOM.createRoot(document.getElementById("root")); //create root

//root.render(<Heading/>);  //rendering react component


// const parent=React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child1"},
// [React.createElement("h1",{}," i am h1 tag"),
// React.createElement("h2",{},"i am h2 tag")
// ]),

// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{}," i am h1 tag"),
// React.createElement("h2",{},"i am h2 tag")
// ])
// ]
// );

// console.log(parent);
// root.render(parent);

