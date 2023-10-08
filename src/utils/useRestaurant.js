import { useState,useEffect } from "react"
import { RESTO_URL } from "./constants";

const useRestaurant = () => {
    const [listOfResto, setListofResto] = useState([]);
    const [offerBanner, setofferBanner] = useState(null);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        fetchData();
      },
      []);

      const fetchData = async () => {
        try{

          const data = await fetch(RESTO_URL,{mode:'cors'});
          const json = await data.json();
          console.log("json:", json);
          setListofResto(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setofferBanner(
            json?.data.cards[0]?.card.card.gridElements?.infoWithStyle?.info
          );
          setCollection(json?.data?.cards[1]?.card?.card.imageGridCards.info);
        }
        catch (error) {
          console.error('Error:', error);
        }
      };

      return {listOfResto,offerBanner,collection}
}

export default useRestaurant
