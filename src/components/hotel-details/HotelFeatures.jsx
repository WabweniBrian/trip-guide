import {
  BiBath,
  BiBed,
  BiFullscreen,
  BiRestaurant,
  BiWifi,
} from "react-icons/bi";

const HotelFeatures = () => {
  return (
    <div className="pt-10">
      <h1 className="text-xl font-semibold">Hotel features</h1>
      <div className="flex-align-center gap-3 flex-wrap mt-3">
        <div className="flex-align-center gap-x-2">
          <BiWifi />
          <p>Wi-fi</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiBath />
          <p>Bathtab</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiRestaurant />
          <p>Breakfast</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiBed />
          <p>King-sized Beds</p>
        </div>
        <div className="flex-align-center gap-x-2">
          <BiFullscreen />
          <p>4m x 6m</p>
        </div>
      </div>
    </div>
  );
};

export default HotelFeatures;
