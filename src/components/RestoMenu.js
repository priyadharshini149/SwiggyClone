import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faClock,faStar } from '@fortawesome/free-solid-svg-icons';
import {Collapse} from 'react-collapse';
import { useParams } from 'react-router-dom';
import { API_URL } from "../utils/constants";

const RestoMenu = () => {
    const {id}=useParams();
    console.log(id);
    const [resInfo,setResInfo]=useState(null);
    
    const [categoryCollapse,setCatCollapse]=useState({});
    const [subCategoryCollapse,setSubCatCollapse]=useState({});
    console.log(categoryCollapse,subCategoryCollapse)
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData= async() => {
         const data= await fetch(API_URL+id);
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
   
    const toggleCatCollapse=(categoryId)=>{
        console.log(categoryId)
        setCatCollapse((prevState)=>({
            ...prevState,
            [categoryId]:!prevState[categoryId]
        }))
    }

    const toggleSubCatCollapse=(categoryId)=>{
        setSubCatCollapse((prevState)=>({
            ...prevState,
            [categoryId]:!prevState[categoryId] 
        }))
    }
    return(
        <div className="resInfo-container">
            
            <div className="resInfo-header">
                <div>
                    <h2>{name}</h2>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{areaName}, {lastMileTravelString}</h3>
                </div>
                <div className="resInfo-rating">
                    
                    <span style={{fontWeight:"800",fontSize:"14px"}}><FontAwesomeIcon icon={faStar}/>  {avgRating}</span>
                    <hr ></hr>
                    <span style={{color:"black"}}>{totalRatingsString}</span>
                </div>
            </div>
            <hr></hr>
            <div className="resInfo-extra">
                <h4><FontAwesomeIcon icon={faClock} /> {deliveryTime} MINS</h4>
                <h4>{costForTwoMessage}</h4>
            </div>
            
            <div className="resInfo-menu">
                <h3 style={{fontFamily:"sans-serif",margin:"3rem 0rem 1rem 0rem"}}>Menu</h3>
                <hr></hr>
               <div >
                {
                    cards.map((cat,index)=>
                    (
                        <div key={index} >
                            { 
                                cat.card.card.title && cat.card.card.itemCards &&(
                                    <div className="resMenu-Category" style={{borderBottom: "20px solid rgb(241, 241, 241)"}}>
                                        { cat.card.card.itemCards &&
                                        (<div className="cat-header"  onClick={()=>toggleCatCollapse(index)}>
                                                    <h3 style={{fontSize:"17px"}}>{cat.card.card.title} ({cat.card.card.itemCards.length})</h3> 
                                                     <FontAwesomeIcon icon={faAngleDown} style={{color:"gray"}}/>
                                        </div>)
                                                }
                                      <Collapse isOpened={categoryCollapse[index]===undefined?setCatCollapse((prevState)=>({...prevState,[index]:true})):categoryCollapse[index]} className="collapse">
                                      <div className="cat-body">
                                        {cat.card.card.itemCards && 
                                        (
                                            cat.card.card.itemCards.map((item,index)=>(
                                                    <ItemCard key={index} data={item.card.info}/>
                                            )) 
                                        )
                                        }
                                      </div>
                                        </Collapse>

                                        {cat.card.card.categories && (
                                            <div >
                                                <h3 style={{margin:"1.5rem 0rem"}}>{cat.card.card.title}</h3>
                                                {
                                                cat.card.card.categories.map((item,index)=>(
                                                       
                                                    <div key={index} className="resMenu-SubCategory" onClick={()=>toggleSubCatCollapse(index)}>
                                                        <div className="subCat-header">
                                                        <h3 style={{fontSize:"17px"}}>{item.title} ({item.itemCards.length})</h3>
                                                        <FontAwesomeIcon icon={faAngleDown} style={{color:"gray"}}/>
                                                        </div>
    
                                                        <Collapse isOpened={subCategoryCollapse[index]===undefined?setSubCatCollapse((prevState)=>({...prevState,[index]:true})):subCategoryCollapse[index]} className="collapse">
                                                        <div className="subCat-body">
                                                        {
                                                            item.itemCards.map((it,index)=>(
                                                                    <ItemCard key={index} data={it.card.info}/>
                                                            ))
                                                        }
                                                       </div>
                                                        </Collapse>
                                                    </div>
                                                ))
                                                    }
                                            </div>
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