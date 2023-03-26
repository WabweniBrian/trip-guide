import { featuredDestinations } from "../../data/dummyData";
import SingleFeatured from "./SingleFeatured";

const FeaturedDestinations = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="mb-4">
        <h1 className="heading">featured destinations</h1>
        <p className="mt-2">
          Popular destinations open to any visitor who eants to explore the
          world
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:col-span-3">
          {featuredDestinations.slice(0, 1).map((place) => (
            <SingleFeatured {...place} key={place.id} />
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {featuredDestinations.slice(1, 3).map((place) => (
              <SingleFeatured {...place} key={place.id} />
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          {featuredDestinations.slice(3, 5).map((place, i) => (
            <div className={`${i > 0 && "mt-3"}`} key={place.id}>
              <SingleFeatured {...place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestinations;
