import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";
import useCollectionMenu from "../utils/useCollectionMenu";
import Offline from "./offline";
import useOnlineStatus from "../utils/useOnlineStatus";
const CollectionMenu = () => {
  const { id, title } = useParams();

  
  const use=useCollectionMenu({id,title});

  const collectionCard =use.collectionCard;
  const [collectionFilterCard,setcollectionFilter]=useState([]);
  const collectionTitle=use.collectionTitle;
  const collectionDesc=use.collectionDesc;

  useEffect(()=>{
    setcollectionFilter(collectionCard)
  },[collectionCard])
  function costConvert(str)
  {
    return parseFloat(str.split(' ')[0].slice(1))
  }
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  {
    return(
      <Offline/>
    )
  }
  return (
    <div className="collection-page">
      <div className="collection-header">
    <h1>{collectionTitle}</h1>
    <p>{collectionDesc}</p>
    <div className="filter">
          <div>
          <button  onClick={()=>{
            setcollectionFilter(collectionCard)
          }}>
            All restaurant
          </button>
        </div>
        <div>
          <button  onClick={()=>{
            const filterList=collectionCard.filter((res)=>res.card.card.info.veg===true)
            setcollectionFilter(filterList)
          }}>
            Pure veg
          </button>
        </div>
        <div>
          <button  onClick={()=>{
            const filterList=collectionCard.filter((res)=>res.card.card.info.avgRating>4)
            setcollectionFilter(filterList)
          }}>
            Ratings 4.0+
          </button>
        </div>
        <div>
          <button  onClick={()=>{
            const filterList=collectionCard.filter((res)=>costConvert(res.card.card.info.costForTwo)>=300 && costConvert(res.card.card.info.costForTwo)<=600)
            setcollectionFilter(filterList)
          }}>
            Rs 300 - Rs 600
          </button>
        </div>
        <div>
          <button  onClick={()=>{
            const filterList=collectionCard.filter((res)=>costConvert(res.card.card.info.costForTwo)<300)
            setcollectionFilter(filterList)
          }}>
            Less than Rs 300
          </button>
        </div>
      </div>
      </div>
    <div className="resto-container">
      {collectionFilterCard.map((col, index) => (
        <Link key={index} style={{textDecoration:"none"}}to={"restaurants/"+col.card.card.info.id}>
          <RestoCard resData={col.card.card} />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default CollectionMenu;
