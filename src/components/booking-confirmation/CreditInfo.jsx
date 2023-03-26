import { BiCheck } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const CreditInfo = () => {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-xl font-semibold">Credit Cards</h1>
        <div className="flex-align-center gap-3 mt-2">
          <div className="relative border bg-slate-100 border-primary dark:bg-dark-light rounded-md p-1 px-3">
            <img src="/images/mastercard-light.png" alt="" className="w-10" />
            <div className="absolute -top-1 -right-1">
              <FaCheckCircle className="!text-primary" />
            </div>
          </div>
          <div className="border bg-white dark:bg-dark-light rounded-md p-1 px-3 dark:border-dark">
            <img src="/images/paypal-light.png" alt="" className="w-10" />
          </div>
          <div className="border bg-white dark:bg-dark-light rounded-md p-1 px-3 dark:border-dark">
            <img src="/images/visa-light.png" alt="" className="w-10" />
          </div>
        </div>
        <div className="mt-5 flex-align-center gap-3">
          <div>
            <img
              src="/images/mastercard-card.png"
              alt=""
              className="w-36 sm:w-48"
            />
          </div>
          <div>
            <img src="/images/visa-card.png" alt="" className="w-36 sm:w-48" />
          </div>
        </div>
        <div className="mt-4">
          <label>Card Number</label>
          <div className="flex-center-center px-3 py-1 gap-2 border dark:border-dark rounded-md">
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full"
              value="5622 6728 6722 3782"
              name="number"
              onChange={() => {}}
            />
            <BiCheck className="text-sm text-green-500" />
          </div>
          <div className="flex-align-center gap-3 mt-4">
            <div>
              <label>Expity Date</label>
              <input
                type="date"
                className="px-3 py-1 outline-none border dark:border-dark rounded-md bg-transparent w-full"
                name="e-date"
              />
            </div>
            <div>
              <label>CVC/CVV</label>
              <input
                type="password"
                className="px-3 py-1 outline-none border dark:border-dark rounded-md bg-transparent w-full"
                value="5622"
                name="cvc"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="input-check mt-2">
            <input type="checkbox" name="" id="save" />
            <label htmlFor="save">Save Card</label>
          </div>
          <Link
            to="/hotel/1/booking-sucess"
            className="btn btn-primary !rounded-full block w-full sm:w-fit text-center mt-4 !opacity-100"
          >
            confirm & reserve
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreditInfo;
