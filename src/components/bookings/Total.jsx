import { Link } from "react-router-dom";

const Total = () => {
  return (
    <>
      <div className="md:flex-center-between flex-col md:flex-row gap-4 bg-white p-3 rounded-lg border dark:bg-card-dark dark:border-dark">
        <div className="flex-align-center gap-4">
          <div>
            <img
              src="/images/place (26).jpg"
              alt=""
              className="w-40 h-32 object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Baan Wanglang Reverside</h1>
            <p>342 Soi Wat Rakang, Pannok Rd, Bangkok, Thailand</p>
          </div>
        </div>
        <h1 className="mt-3 md:mt-0">Booked on Feb 8, 2023</h1>
      </div>
      <div className="md:flex-center-between mt-4 flex-col md:flex-row gap-4 bg-white p-3 rounded-lg border dark:bg-card-dark dark:border-dark">
        <div>
          <div className="flex-align-center gap-x-5">
            <h1>Booking ID:</h1>
            <p>9387202</p>
          </div>
          <div className="flex-align-center gap-x-5 mt-1">
            <h1>Check-in:</h1>
            <p>Feb 8, 2023</p>
          </div>
          <div className="flex-align-center gap-x-5 mt-1">
            <h1>Check-out:</h1>
            <p>Feb 9, 2023</p>
          </div>
          <div className="flex-align-center gap-x-5 mt-1">
            <h1>Room Type</h1>
            <p>Superior Double</p>
          </div>
          <div className="flex-align-center gap-x-5 mt-1">
            <h1>Number of Rooms</h1>
            <p>1</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">$256.94</h1>
          <Link className="text-primary">Booking Conditions</Link>
          <div>
            <button className="btn w-full bg-slate-100 mt-5 hover:bg-slate-200 dark:bg-dark-light dark:hover:bg-dark-light">
              manage booking
            </button>
            <button className="btn btn-primary mt-3 block w-full">
              book again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;
