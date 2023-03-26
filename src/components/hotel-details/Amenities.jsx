import {
  BiAlarm,
  BiBath,
  BiBuilding,
  BiCreditCard,
  BiLaptop,
  BiWifi,
  BiWifi2,
} from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";

const Amenities = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-semibold">Amenities</h1>
      <div className="mt-2 flex gap-x-10">
        <div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiWifi />
            <p>Free wifi 24/7</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiLaptop />
            <p>Free computer</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiWifi2 />
            <p>Free wifi 24/7</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiAlarm />
            <p>Free Dstv/7</p>
          </div>
        </div>
        <div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiBath />
            <p>Free clean bathroom</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <FaPizzaSlice />
            <p>Breakfast included</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiCreditCard />
            <p>ATM</p>
          </div>
          <div className="flex-align-center gap-x-2 mt-3">
            <BiBuilding />
            <p>Nearby city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
