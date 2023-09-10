import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const RestoCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;
  const{header,subHeader}=resData.info.aggregatedDiscountInfoV3;

  const [rateColor, setrateColor] = useState("green");
  useEffect(() => {
    if (avgRating < 4) 
        {
            setrateColor("orange");
        }
        else
        {
            setrateColor("green");
        }
      console.log(rateColor);
      }, [avgRating]);
  return (
    <div className="resto-card">
      <div className="layer"><h4>{header} {subHeader}</h4></div>
      <img
        src={CDN_URL + cloudinaryImageId}
        className="food-img"
        alt="image"
      ></img>
      <h3>{name}</h3>
      <div className="card-review">
      
      <span style={{ backgroundColor:  rateColor  }}>
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>  {avgRating}</span>
      </div>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestoCard;
