import { BiEditAlt } from "react-icons/bi";
import {
  BookedPlaceDetails,
  CreditInfo,
} from "../components/booking-confirmation";

const ConfirmBooking = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="heading">confirm your book</h1>
          <div className="mt-5">
            <h1 className="text-xl font-semibold">Your tour</h1>
            <div className="mt-3 flex-center-between bg-slate-200 dark:bg-dark-light rounded-lg p-2">
              <div>
                <h1 className="text-semibold">Date</h1>
                <p>Jan 27 - 30, 2023</p>
              </div>
              <BiEditAlt />
            </div>
            <div className="mt-2 flex-center-between bg-slate-200 dark:bg-dark-light rounded-lg p-2">
              <div>
                <h1 className="text-semibold">Traveller</h1>
                <p>1 Passenger</p>
              </div>
              <BiEditAlt />
            </div>
          </div>

          <CreditInfo />
        </div>
        <div className="lg:col-span-1">
          <BookedPlaceDetails />
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
