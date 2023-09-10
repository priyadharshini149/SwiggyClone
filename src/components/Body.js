import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listOfResto,setListofResto]=useState([]);
    const [filterResto,setFilterResto]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{ 
        fetchData();
    },[])
    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0261194&lng=77.0191128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListofResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    //conditional rendering
    // if(listOfResto.length===0)
    // {
    //     return <Shimmer/>
    // }
    return listOfResto.length===0? <Shimmer/> : (
        <div className="body">
            <div className="search">
                
                  <input type="text" placeholder="search" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                   
                  }} ></input>
                  <button className="search-btn" onClick={()=>{
                     console.log(searchText);
                    const searchFilter=listOfResto.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase()));
                   
                    setFilterResto(searchFilter);
                   
                  }}>search</button>
                
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
                     > All</button>
                </div>
                <div>
                    <button 
                    onClick={()=>{
                        const filterlist=listOfResto.filter((res) => res.info.avgRating>4);
                        setFilterResto(filterlist);
                    }}
                    >Top rated restaurant </button>
                </div>
                <div className="Rate">
                    <button>Rate </button>
                </div>

            </div>
            <div className="resto-container">
              {/* <RestoCard name="Meghana Foods" cusine="Biryani, north indian,asian" rating="4.5 stars" duration="35 minutes"/>
               <RestoCard name="KFC" cusine="Biryani, north indian,asian" rating="4.3 stars" duration="30 minutes"/> */}
               {filterResto.map(restaurant=>(
                <Link to={"restaurants/"+restaurant.info.id}>
                    <RestoCard key={restaurant.info.id} resData={restaurant}/>
                </Link>
               ))}
               
            </div>

        </div>
    );
};
export default Body;