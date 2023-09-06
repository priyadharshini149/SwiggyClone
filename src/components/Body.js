import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";

  
const Body = () => {
    const [listOfResto,setListofResto]=useState([]);
    useEffect(()=>{ 
        fetchData();
    },[])
    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0261194&lng=77.0191128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListofResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    if(listOfResto.length===0)
    {
        return <h1>loading....</h1>
    }
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
                        fetchData();
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