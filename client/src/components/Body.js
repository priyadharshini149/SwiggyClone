import {useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./offline";

const Body = () => {

  const [searchText, setSearchText] = useState("");

  const use=useRestaurant();
  const listOfResto=use.listOfResto;
  const [filterResto, setFilterResto] = useState([]);
  const offerBanner=use.offerBanner;
  const collection=use.collection;
  console.log(listOfResto,filterResto)
  useEffect(()=>{
    setFilterResto(listOfResto)
  },[listOfResto])
  function costConvert(str)
  {
    return parseFloat(str.split(' ')[0].slice(1))
  }
  function getCollectionId(url) {
    try {
      const match = url.match(/collection_id=([^&]*)/);
      if (match && match[1]) {
        return match[1];
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
      return null;
    }
  }
 
  //conditional rendering
  // if(listOfResto.length===0)
  // {
  //     return <Shimmer/>
  // }
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  {
    return(
      <Offline/>
    )
  }
  return listOfResto.length===0? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* offer banner */}
      <div className="offer-container">
        <h1>Best offers for you</h1>
        <div className="Offer-banner">
          {offerBanner.map((offer, index) => (
            <div key={index}>
              <img className="offer" src={CDN_URL + offer.imageId}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="collection-container">
        <h1>What's on your mind?</h1>
        <div className="collection">
          {collection.map((col, index) => (
            <div key={index}>
              <Link
                to={
                  "collection/" +
                  (getCollectionId(col.entityId) || col.entityId) +
                  "/" +
                  col.action.text
                }
              >
                <img className="coll" src={CDN_URL + col.imageId}></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <div className="restaurants">
        <div className="rest-head">
          <h1> Restaurants with online food delivery</h1>
          {/* search */}
          <div className="search">
            <input
              type="text"
              placeholder="search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>
            <button
              className="search-btn"
              onClick={() => {
                console.log(searchText);
                const searchFilter = listOfResto.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    res.info.cuisines
                      .join(" ")
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );

                setFilterResto(searchFilter);
              }}
            >
              search
            </button>
          </div>

          {/* filter */}
          <div className="filter">
          
            <div>
              <button
                onClick={() => {
                  setFilterResto(listOfResto);
                }}
              >
                All restaurants
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                    const filterlist = listOfResto.filter(
                        (res)=>res.info.veg===true
                    );
                  setFilterResto(filterlist)
                }}
              >
                Pure Veg
              </button>
             
            </div>
            <div>
              <button
                onClick={() => {
                  const filterlist = listOfResto.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilterResto(filterlist);
                }}
              >
                Ratings 4.0+
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                    const filterlist = listOfResto.filter(
                        (res)=>costConvert(res.info.costForTwo)>=300 && costConvert(res.info.costForTwo)<=600
                    );
                  setFilterResto(filterlist)
                }}
              >
                Rs 300 - Rs 600
              </button>
             
            </div>
           
            <div>
            <button
              onClick={()=>{
                const filterlist = listOfResto.filter(
                    (res)=>costConvert(res.info.costForTwo)<300
                );
              setFilterResto(filterlist)
              }}
              >
                less than Rs 300
              </button>
            </div>
          </div>
        </div>
        {/* Resto card */}

        <div className="resto-container">
          {/* <RestoCard name="Meghana Foods" cusine="Biryani, north indian,asian" rating="4.5 stars" duration="35 minutes"/>
               <RestoCard name="KFC" cusine="Biryani, north indian,asian" rating="4.3 stars" duration="30 minutes"/> */}
          {filterResto.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <RestoCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
export default Body;
