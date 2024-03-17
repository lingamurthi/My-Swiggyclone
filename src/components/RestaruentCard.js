
import { CDN_URL } from "../utils/constants";
const RestaruentCard = (props) => {
    const {resData}=props;

   // console.log(resData);
    const {costForTwo,name,cloudinaryImageId,cuisines,avgRating}=resData;
 

  
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img 
        className="rounded-lg h-[250px]"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.sla.deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaruentCard;