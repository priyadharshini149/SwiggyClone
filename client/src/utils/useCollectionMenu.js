import { useState,useEffect } from "react";
import { RESTOCOLLECTION_URL } from "./constants";


const useCollectionMenu = ({id,title}) => {
    const [collectionCard, setCollectionCard] = useState([]);
    const [collectionTitle,setCollectionTitle]=useState([]);
    const [collectionDesc,setCollectionDesc]=useState([]);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(
          RESTOCOLLECTION_URL+"?id="+id+"&title="+title
        );
        const json = await data.json();
        setCollectionTitle(json.data.cards[0].card.card.title)
        setCollectionDesc(json.data.cards[0].card.card.description)
        setCollectionCard(json.data.cards.slice(3));
      };

      return {collectionCard,collectionDesc,collectionTitle}
}

export default useCollectionMenu
