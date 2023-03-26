import { Link } from "react-router-dom";

const Rewards = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <div className="min-h-screen flex-center-center flex-col">
        <h1 className="text-5xl md:text-6xl font-bold opacity-70 capitalize">
          no rewards yet!
        </h1>
        <p>
          Book more with
          <Link
            to="/"
            className="text-secondaryBlue !opacity-100 hover:underline"
          >
            TripGuide
          </Link>
          to win extra rewards
        </p>
      </div>
    </div>
  );
};

export default Rewards;
