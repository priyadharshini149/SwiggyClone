import { CDN_URL } from "../utils/constants";
const RestoCard= (props) =>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
    const {deliveryTime}=resData.info.sla;
    return(
        <div className="resto-card">
           <img src={CDN_URL+cloudinaryImageId} className="food-img" alt="image"></img>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <div style={{display:"flex"}} className="card-review">
            <span>{avgRating} stars</span>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
           </div>
        </div>
    );

};

export default RestoCard;