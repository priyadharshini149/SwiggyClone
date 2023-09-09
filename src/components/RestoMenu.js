import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";

const RestoMenu = () => {
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData= async() => {
         const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0261194&lng=77.0191128&restaurantId=245456&catalog_qa=undefined&submitAction=ENTER");
         const json=await data.json();
         console.log(json.data.cards[0]?.card?.card?.info?.name);
         setResInfo(json.data);
        }
        console.log(resInfo);

    if(resInfo===null)
    {
        return(
            <Shimmer/>
        );
    }
    const {name,cuisines,avgRating,areaName,costForTwoMessage,totalRatingsString}=resInfo?.cards[0]?.card?.card?.info;
    const {lastMileTravelString,deliveryTime}=resInfo?.cards[0]?.card?.card?.info?.sla;

    const {cards}=resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR;
    console.log(cards);
    
    
    
    return(
        <div className="resInfo-container">
            <div className="resInfo-header">
                <div>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{areaName}, {lastMileTravelString}</h4>
                </div>
                <div className="resInfo-rating">
                    
                    <span style={{fontWeight:"bolder",fontSize:"14px"}}>{avgRating} stars</span>
                    <hr ></hr>
                    <span style={{color:"black"}}>{totalRatingsString}</span>
                </div>
            </div>
            <hr></hr>
            <div className="resInfo-extra">
                <h4>{deliveryTime} MINS</h4>
                <h4>{costForTwoMessage}</h4>
            </div>
            
            <div className="resInfo-menu">
               <div>
                {
                    cards.map((cat,index)=>
                    (
                        <div key={index}>
                            { 
                                cat.card.card.title && (
                                    <div style={{marginTop:"1rem"}}>

                                       <h2>{cat.card.card.title}</h2> 
                                        {cat.card.card.itemCards && 
                                        (
                                            cat.card.card.itemCards.map((item,index)=>(
                                                    <ItemCard key={index} data={item.card.info}/>
                                            )) 
                                        )
                                        }


                                        {cat.card.card.categories && (
                                            cat.card.card.categories.map((item,index)=>(
                                                   
                                                <div key={index} style={{marginTop:"1rem"}}  >
                                                    <h2>{item.title}</h2>
                                                    {
                                                        item.itemCards.map((it,index)=>(
                                                                <ItemCard key={index} data={it.card.info}/>
                                                        ))
                                                    }

                                                </div>
                                            ))
                                        )
                                        }
                                        
                                    </div>
                                )
                            }

                        </div>
                    )
                    )
                }
               </div>

            </div>
        </div>
    );
}


export default RestoMenu;