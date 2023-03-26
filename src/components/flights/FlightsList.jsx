import { useSelector } from "react-redux";
import { dataStore } from "../../features/dataSlice";
import SingleFlight from "./SingleFlight";

const FlightsList = () => {
  const { currentDataItems } = useSelector(dataStore);
  return (
    <div className="mt-10">
      {currentDataItems.map((flight) => (
        <SingleFlight {...flight} key={flight.id} />
      ))}
    </div>
  );
};

export default FlightsList;
