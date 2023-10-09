import { useEffect,useState } from "react";
import { RESTOMENU_URL } from "./constants";
const useRestoMenu = (id) => {
    const [resInfo,setResInfo]=useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData= async() => {
        try{
           
            const data= await fetch(RESTOMENU_URL+id);
            const json=await data.json();
            console.log(json.data.cards[0]?.card?.card?.info?.name);
            setResInfo(json.data);
           }
           catch (error) {
            console.error('Error:', error);}
        }
return resInfo;
}

export default useRestoMenu
