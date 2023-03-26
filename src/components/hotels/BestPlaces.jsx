import { Link } from "react-router-dom";
import { bestPlaces } from "../../data/dummyData";

const BestPlaces = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="heading">search a best place in the world</h1>
        <p className="mt-4">
          Whether you're looking for places for a vacation. we are here to guide
          you about the details you need to check in and ease your trips in
          advance
        </p>
      </div>
      <div className="mt-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex 2xl:flex-wrap">
        {bestPlaces.map(({ id, name, image, number_of_destinations }) => (
          <div
            key={id}
            className="rounded-lg group sm:cursor-pointer 2xl:flex-1 2xl:basis-[16rem] p-3 border dark:border-dark hover:bg-white hover:shadow-light transition-color transition-shadow dark:hover:bg-card-dark"
          >
            <img
              src={image}
              alt={name}
              className="rounded-lg w-14 h-14 object-cover"
            />
            <div className="mt-2">
              <Link
                to="/hotels/search"
                className="group-hover:text-primary transition-all"
              >
                <h1 className="text-lg font-semibold capitalize">{name}</h1>
              </Link>
              <p className="mt-2">{number_of_destinations} Destinations</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestPlaces;
