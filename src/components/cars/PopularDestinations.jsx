import { Link } from "react-router-dom";
import { popularDestinations } from "../../data/dummyData";

const PopularDestinations = () => {
  return (
    <div className="pt-10 pb-16">
      <h1 className="heading mb-3">popular destinations</h1>
      <p>
        want to rent a car quickly and begin your journey? choose the best
        pickup near you in these cities!
      </p>
      <div className="mt-5 flex flex-wrap gap-4">
        {popularDestinations.map(({ id, name, image, car_pickups }) => (
          <Link
            to="/cars/search"
            className="rounded-lg !opacity-100 group overflow-hidden relative flex-1 basis-[16rem] sm:cursor-pointer"
            key={id}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[300px] object-cover group-hover:scale-125 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t text-slate-100 from-black/80 to-transparent text-alte-100">
              <h1 className="font-semibold text-xl">{name}</h1>
              <p>Car rentals in {car_pickups} pickup locations</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
