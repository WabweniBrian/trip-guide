import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaPlaneDeparture } from "react-icons/fa";
const SingleFlight = ({ id, name, image, price }) => {
  return (
    <div className="p-4 mt-3  bg-white border dark:border-dark rounded-lg dark:bg-card-dark">
      <h1 className="heading">{name}</h1>
      <div className="pb-4 border-b dark:border-b-dark">
        <div className="flex-align-center gap-2 mt-3">
          <p>Dhaka</p>
          <FiArrowRight className="text-muted" />
          <p>Dubai Thur, 19 Feb</p>
        </div>
        <div className="mt-4 flex md:flex-center-between gap-4 flex-col md:flex-row">
          <div>
            <img src={image} alt={name} className="w-36" />
          </div>
          <div className="flex-align-center justify-between gap-5 sm:gap-20">
            <div>
              <h1 className="text-3xl font-bold">DAC</h1>
              <p>08:45 AM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-secondaryYellow grid place-items-center semi-circle">
                <span className="text-sm">5h 20m</span>
                <FaPlaneDeparture className="text-sm" />
              </div>
              <p className="text-sm mt-2">nonstop</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">DXB</h1>
              <p>1:05 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">${price}</h1>
            <button className="btn btn-primary !rounded-full mt-2">
              book now
            </button>
          </div>
        </div>
      </div>

      <div className="pb-2">
        <div className="flex-align-center gap-2 mt-3">
          <p>Dhaka</p>
          <FiArrowLeft className="text-muted" />
          <p>Dubai Thur, 19 Feb</p>
        </div>
        <div className="mt-4 flex md:flex-center-between gap-4 flex-col md:flex-row">
          <div>
            <img src={image} alt={name} className="w-36" />
          </div>
          <div className="flex-align-center justify-between gap-5 sm:gap-20">
            <div>
              <h1 className="text-3xl font-bold">DAC</h1>
              <p>08:45 AM</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-secondaryYellow grid place-items-center semi-circle">
                <span className="text-sm">5h 20m</span>
                <FaPlaneDeparture className="text-sm" />
              </div>
              <p className="text-sm mt-2">nonstop</p>
            </div>
            <div>
              <h1 className="text-3xl font-bold">DXB</h1>
              <p>1:05 PM</p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">${price}</h1>
            <button className="btn btn-primary !rounded-full mt-2">
              book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFlight;
