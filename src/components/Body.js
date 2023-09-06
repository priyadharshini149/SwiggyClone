import { useState } from "react";
import RestoCard from "./RestoCard";
import resList from "../utils/mockData";

  
const Body = () => {
    const [listOfResto,setListofResto]=useState(resList);
    return (
        <div className="body">
            <div className="search">
                <form>
                  <input type="text" placeholder="search"></input>
                </form>
            </div>
            <div className="filter">
                <div>
                    <h4>Filter Based On</h4>
                </div>
                <div>
                    <button
                    onClick={()=>{
                        setListofResto(resList);
                    }}
                     >
                        All
                    </button>
                </div>
                <div>
                    <button 
                    onClick={()=>{
                        const filterlist=listOfResto.filter((res) => res.info.avgRating>4);
                        setListofResto(filterlist);
                    }}
                    >
                        Top rated restaurant </button>
                </div>
                <div className="Rate">
                    <button>Rate </button>
                </div>

            </div>
            <div className="resto-container">
              {/* <RestoCard name="Meghana Foods" cusine="Biryani, north indian,asian" rating="4.5 stars" duration="35 minutes"/>
               <RestoCard name="KFC" cusine="Biryani, north indian,asian" rating="4.3 stars" duration="30 minutes"/> */}
               {listOfResto.map(restaurant=>(
               <RestoCard key={restaurant.info.id} resData={restaurant}/>
               ))}
               
            </div>

        </div>
    );
};
export default Body;