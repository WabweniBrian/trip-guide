import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { BiMobileAlt, BiStreetView } from "react-icons/bi";

const SingleCar = ({ id, name, model, features, booking_fee, image }) => {
  const getIcon = (i) => {
    if (i === 0) return <FiUsers />;
    else if (i === 1) return <BiMobileAlt />;
    else return <BiStreetView />;
  };
  return (
    <div className="flex-1 group basis-[14rem] rounded-lg overflow-hidden bg-white dark:bg-card-dark border dark:border-dark">
      <div className="bg-slate-100 dark:bg-dark-light">
        <Link to={`/cars/${id}`} className="!opacity-100">
          <img
            src={image}
            alt={name}
            loading={"lazy"}
            className="w-64 h-64 p-3 object-contain group-hover:scale-125 mx-auto transition-a "
          />
        </Link>
      </div>
      <div className="p-3">
        <div className="flex-center-between">
          <Link to={`/cars/${id}`} className="group-hover:text-primary">
            <h1 className="text-xl font-bold">{name}</h1>
          </Link>
          <div className="bg-green-500/20 rounded-full text-green-500 px-2 text-sm uppercase flex-shrink-0">
            <span>special deal</span>
          </div>
        </div>
        <p>{model}</p>
        <div className="mt-3">
          <h1>Features</h1>
          <div className="mt-3 flex-align-center flex-wrap gap-3">
            {features?.map((feature, i) => (
              <div className="flex-align-center gap-x-2 flex-wrap" key={i}>
                {getIcon(i)} <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex-center-between">
          <div>
            <h1 className="text-2xl font-bold">${booking_fee}</h1>
            <p className="text-sm">per day</p>
          </div>
          <button className="btn btn-primary">reserve deal</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
