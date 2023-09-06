import RestoCard from "./RestoCard";
import resList from "../utils/mockData";
  
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <form>
                  <input type="text" placeholder="search"></input>
                </form>
            </div>
            <div className="resto-container">
              {/* <RestoCard name="Meghana Foods" cusine="Biryani, north indian,asian" rating="4.5 stars" duration="35 minutes"/>
               <RestoCard name="KFC" cusine="Biryani, north indian,asian" rating="4.3 stars" duration="30 minutes"/> */}
               {resList.map(restaurant=>(
               <RestoCard key={restaurant.info.id} resData={restaurant}/>
               ))}
               
            </div>

        </div>
    );
};
export default Body;