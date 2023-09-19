import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestoCard from "./RestoCard";
import { Link } from "react-router-dom";
const CollectionMenu = () => {
  const { id, title } = useParams();
  const [collectionCard, setCollectionCard] = useState([]);
  const [collectionTitle,setCollectionTitle]=useState([]);
  const [collectionDesc,setCollectionDesc]=useState([]);
  console.log(id, title);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0394444&lng=77.0401709&collection=" +
        id +
        "&tags=layout_CCS_" +
        title +
        "&type=rcv2"
    );
    const json = await data.json();
    console.log(json)
    setCollectionTitle(json.data.cards[0].card.card.title)
    setCollectionDesc(json.data.cards[0].card.card.description)
    setCollectionCard(json.data.cards.slice(3));
  };
  return (
    <div className="collection-page">
      <div className="collection-header">
    <h1>{collectionTitle}</h1>
    <p>{collectionDesc}</p>
      </div>
    <div className="resto-container">
      {collectionCard.map((col, index) => (
        <Link key={index} style={{textDecoration:"none"}}to={"restaurants/"+col.card.card.info.id}>
          <RestoCard resData={col.card.card} />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default CollectionMenu;
