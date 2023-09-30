import React from 'react';
// import off from "../../assets/image/logo .png";
import offimg from "../../assets/image/offline.png"
const Offline = () => {
  return (
    <div>
      <div className="online">
        <img src={offimg} ></img>
        <h3>Looks offline, Please check your internet connection!</h3>
      </div>
    </div>
  )
}

export default Offline;