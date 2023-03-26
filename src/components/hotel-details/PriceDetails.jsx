import { Link } from "react-router-dom";

const PriceDetails = () => {
  return (
    <div className="rounded-lg bg-white border dark:bg-card-dark dark:border-dark p-4">
      <div className="flex-center-between pb-2 border-b dark:border-b-dark">
        <h1>
          <span className="text-4xl md:text-5xl font-bold">$142</span>{" "}
          <span className="opacity-80 text-sm">/night</span>{" "}
          <span className="line-through opacity-80 text-sm">$182</span>
        </h1>
        <div className="flex-shrink-0">
          <span className="px-1 py-[2px] text-sm text-white bg-primary rounded-full">
            20% OFF
          </span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <div>
          <p>Check-In</p>
          <input
            type="date"
            className="border-none outline-none rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-1 w-full"
          />
        </div>
        <div>
          <p>Check-Out</p>
          <input
            type="date"
            className="border-none  outline-none rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-1 w-full"
          />
        </div>
      </div>
      <div className="mt-3">
        <p>Guest</p>
        <select
          name=""
          id=""
          className="border-none outline-none w-full rounded-md bg-slate-100 dark:bg-hover-color-dark px-3 py-2"
        >
          <option value="1 adult">1 Adult</option>
          <option value="1 adult">2 Adult</option>
          <option value="1 adult">3 Adult</option>
          <option value="1 adult">1 Adult, 1 Child</option>
          <option value="1 adult">2 Adult, 1 Child</option>
          <option value="1 adult">3 Adult, 1 Child</option>
        </select>
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">Extra Features</h1>
        <div className="mt-2">
          <div className="flex-center-between mt-2">
            <div className="input-check">
              <input type="checkbox" id="pets" />
              <label htmlFor="pets">Allow to bring pets</label>
            </div>
            <p>$10</p>
          </div>
          <div className="flex-center-between mt-2">
            <div className="input-check">
              <input
                type="checkbox"
                id="breakfast"
                checked
                onChange={() => {}}
              />
              <label htmlFor="breakfast">Breakfast a day per person</label>
            </div>
            <p>$23</p>
          </div>
          <div className="flex-center-between mt-2">
            <div className="input-check">
              <input type="checkbox" id="parking" />
              <label htmlFor="parking">Parking a day</label>
            </div>
            <p>$5</p>
          </div>
          <div className="flex-center-between mt-2">
            <div className="input-check">
              <input type="checkbox" id="pillow" />
              <label htmlFor="pillow">Extra pillow</label>
            </div>
            <p>$10</p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h1 className="font-semibold">Price</h1>
        <div className="rounded-lg p-3 bg-slate-100 dark:bg-hover-color-dark">
          <div className="flex-center-between">
            <h1>1 Night</h1>
            <p>$250</p>
          </div>
          <div className="flex-center-between mt-2">
            <h1>Discount 20%</h1>
            <p>$200</p>
          </div>
          <div className="flex-center-between mt-2">
            <h1>Breakfast a day per person</h1>
            <p>$10</p>
          </div>
          <div className="flex-center-between mt-2">
            <h1>Service fee</h1>
            <p>$5</p>
          </div>
        </div>
        <div className="flex-center-between mt-5">
          <h1>Total Payment</h1>
          <h1 className="text-xl font-bold">$215</h1>
        </div>
        <Link
          to="/hotels/1/confirm-booking"
          className="btn btn-primary block text-center w-full mt-4 !opacity-100"
        >
          book now
        </Link>
      </div>
    </div>
  );
};

export default PriceDetails;
