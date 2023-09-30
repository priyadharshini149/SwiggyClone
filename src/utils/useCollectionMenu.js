import { useState,useEffect } from "react";


const useCollectionMenu = ({id,title}) => {
    const [collectionCard, setCollectionCard] = useState([]);
    const [collectionFilterCard,setcollectionFilter]=useState([]);
    const [collectionTitle,setCollectionTitle]=useState([]);
    const [collectionDesc,setCollectionDesc]=useState([]);
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
        setCollectionTitle(json.data.cards[0].card.card.title)
        setCollectionDesc(json.data.cards[0].card.card.description)
        setCollectionCard(json.data.cards.slice(3));
        setcollectionFilter(json.data.cards.slice(3));
      };

      return {collectionCard,collectionDesc,collectionFilterCard,collectionTitle}
}

export default useCollectionMenu
