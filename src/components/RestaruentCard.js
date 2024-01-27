
import { CDN_URL } from "../utils/constants";
const RestaruentCard = (props) => {
    const {resData}=props;

   // console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;

  
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}minutes</h4>
    </div>
  );
};

export default RestaruentCard;