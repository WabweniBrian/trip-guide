import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleCar from "./SingleCar";

import LoadingSkeleton from "../skeletons/LoadingSkeleton";

const CarsList = () => {
  const { currentDataItems, loading } = useSelector(dataStore);

  return loading ? (
    <LoadingSkeleton />
  ) : (
    <div className="flex flex-wrap gap-4 mt-10">
      {currentDataItems.map((car) => (
        <SingleCar {...car} key={car.id} />
      ))}
    </div>
  );
};

export default CarsList;
