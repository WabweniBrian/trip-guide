import { FaStar } from "react-icons/fa";

const BookedPlaceDetails = () => {
  return (
    <div className="rounded-lg bg-white border dark:bg-card-dark dark:border-dark p-4">
      <h1 className="font-semibold text-xl">
        Switzeland Hotels and places to stay
      </h1>
      <div className="flex-align-center gap-x-2">
        <FaStar className="text-secondaryYellow" />
        <span>
          4.8 <span className="text-sm text-muted">(122 reviews)</span>
        </span>
      </div>
      <div className="mt-4">
        <img
          src="/images/place (24).jpg"
          alt=""
          className="w-full h-[150px] object-cover rounded-lg"
        />
        <div className="mt-2">
          <p>1 bedroom + 1 private room</p>
        </div>

        <div className="mt-3 flex-center-between">
          <div>
            <p>Check in</p>
            <h1>Jan 27, 2023</h1>
          </div>
          <div className="w-[1px] h-10 bg-slate-200 dark:bg-dark-light"></div>
          <div>
            <p>Check out</p>
            <h1>Jan 30, 2023</h1>
          </div>
        </div>
        <div className="mt-3">
          <p>Guests</p>
          <h1>2 guests</h1>
        </div>
        <div className="mt-5">
          <h1 className="heading">booked details</h1>
          <div className="mt-4">
            <div className="flex-center-between">
              <p>$199 + 5 nights</p>
              <h1 className="text-lg font-semibold">$836.23</h1>
            </div>
            <div className="flex-center-between mt-2">
              <p>Occupancy tax fee</p>
              <h1 className="text-lg font-semibold"> - $125</h1>
            </div>
            <div className="flex-center-between mt-2">
              <p>Service fee</p>
              <h1 className="text-lg font-semibold">$103</h1>
            </div>
            <div className="flex-center-between mt-3 bg-slate-100 dark:bg-dark-light rounded-md px-2 py-1">
              <p>Service fee</p>
              <h1 className="text-2xl font-semibold"> $837.32</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedPlaceDetails;
