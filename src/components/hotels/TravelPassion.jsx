import { FaStar } from "react-icons/fa";
import { travelPassions } from "../../data/dummyData";

const TravelPassion = () => {
  return (
    <div className="pt-10 pb-16">
      <h1 className="heading mb-3">travel your passion</h1>
      <p>most brilliant reasons Estrada should be your one-stop-shop!</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {travelPassions.map(
          ({ id, name, image, number_of_reviews, rating }) => (
            <div
              className="rounded-lg group overflow-hidden relative flex-1 basis-[16rem] sm:cursor-pointer"
              key={id}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-[300px] object-cover group-hover:scale-125 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t text-slate-100 from-black/80 to-transparent text-alte-100">
                <h1 className="font-semibold text-xl">{name}</h1>
                <div className="flex-align-center gap-x-2">
                  <FaStar className="text-secondaryYellow" />
                  <p>
                    {rating}
                    <span className="opacity-70">
                      ({number_of_reviews} reviews)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TravelPassion;
