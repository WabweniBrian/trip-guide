import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import LoadingSkeleton from "../skeletons/LoadingSkeleton";
import SingleHotel from "./SingleHotel";

const HotelsList = () => {
  const { currentDataItems, loading } = useSelector(dataStore);
  return loading ? (
    <LoadingSkeleton basis="basis-[18rem]" />
  ) : (
    <div className="flex flex-wrap gap-4 mt-10">
      {currentDataItems?.map((hotel) => (
        <SingleHotel {...hotel} key={hotel?.id} />
      ))}
    </div>
  );
};

export default HotelsList;
