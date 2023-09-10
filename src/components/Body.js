import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Body = () => {
    const [listOfResto,setListofResto]=useState([]);
    const [filterResto,setFilterResto]=useState([]);
    const [searchText,setSearchText]=useState("");
    const[offerBanner,setofferBanner]=useState(null);
    useEffect(()=>{ 
        fetchData();
    },[])
    const fetchData= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0261194&lng=77.0191128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log("json:",json);
        setListofResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterResto(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setofferBanner(json?.data.cards[0]?.card.card.gridElements?.infoWithStyle?.info)
    };
     
    console.log(listOfResto)
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
            <div className="offer-container">
            <h3>Best offers for you</h3>
            <div className="Offer-banner">
                
              {
                offerBanner.map((offer,index)=>(
                    <div key={index}>
                        <img className="offer"src={CDN_URL+offer.imageId}></img>
                    </div>
                ))
              }
            </div>
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
                <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}>
                    
                    <RestoCard  resData={restaurant}/>
                </Link>
               ))}
               
            </div>

        </div>
    );
};
export default Body;