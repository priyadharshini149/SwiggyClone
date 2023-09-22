import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Body = () => {
  const [listOfResto, setListofResto] = useState([]);
  const [filterResto, setFilterResto] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [offerBanner, setofferBanner] = useState(null);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    fetchData();
  },
  []);
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
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0261194&lng=77.0191128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json:", json);
    setListofResto(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResto(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setofferBanner(
      json?.data.cards[0]?.card.card.gridElements?.infoWithStyle?.info
    );
    setCollection(json?.data?.cards[1]?.card?.card.imageGridCards.info);
    console.log("filter:", filterResto);
  };

  console.log(listOfResto);
  //conditional rendering
  // if(listOfResto.length===0)
  // {
  //     return <Shimmer/>
  // }
  return listOfResto.length === 0 ? (
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
                  fetchData();
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
