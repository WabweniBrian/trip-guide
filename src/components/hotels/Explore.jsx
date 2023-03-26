import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiBed, BiMap } from "react-icons/bi";
import { explore } from "../../data/dummyData";
import { Link } from "react-router-dom";
const Explore = () => {
  const [isScroll, setIsscroll] = useState(false);
  const exploreContainer = useRef(null);
  const scrollContainer = (direction) => {
    direction === "right"
      ? (exploreContainer.current.scrollLeft += 200)
      : (exploreContainer.current.scrollLeft -= 200);
    exploreContainer.current.scrollLeft > 0
      ? setIsscroll(true)
      : setIsscroll(false);
  };
  return (
    <div className="pt-10 pb-16">
      <div className="flex-center-between mb-4">
        <div>
          <h1 className="heading">the best hotels around the world</h1>
          <p className="mt-2">
            exquiste and stunning hotels to spend your long night
          </p>
        </div>
        <div className="flex-align-center gap-x-3">
          <div
            className={`w-8 h-8 rounded-full grid place-items-center btn-primary transition-a sm:cursor-pointer ${
              !isScroll && "opacity-50 cursor-not-allowed"
            }`}
            onClick={() => scrollContainer("left")}
          >
            <FiChevronLeft />
          </div>
          <div
            className={`w-8 h-8 rounded-full grid place-items-center btn-primary transition-a sm:cursor-pointer`}
            onClick={() => scrollContainer("right")}
          >
            <FiChevronRight />
          </div>
        </div>
      </div>
      <div
        className="flex-align-center  gap-x-4 overflow-auto hide-scrollbar scroll-smooth p-4"
        ref={exploreContainer}
      >
        {explore.map(
          ({
            id,
            name,
            distance,
            address,
            rooms_available,
            price,
            rating,
            number_of_reviews,
            image,
          }) => (
            <div
              className="hover:shadow-light-2 rounded-lg p-3 bg-white dark:bg-card-dark border dark:border-dark-light sm:cursor-pointer group flex-shrink-0 w-[300px] transition-shadow"
              key={id}
            >
              <div className="overflow-hidden rounded-lg ">
                <img
                  src={image}
                  alt={name}
                  className="h-[150px] w-full object-cover group-hover:scale-125 transition-a"
                />
              </div>
              <div className="mt-3">
                <div className="flex-align-center gap-x-2">
                  <FaStar className="text-secondaryYellow" />
                  <p>
                    {rating}
                    <span className="opacity-70">({number_of_reviews})</span>
                  </p>
                </div>
                <div className="flex-center-between">
                  <Link
                    to={`/hotels/${id}`}
                    className="group-hover:text-primary transition-colors"
                  >
                    <h1 className="font-bold text-xl">{name}</h1>
                  </Link>
                  <span className="bg-primary/20 text-primary px-2">
                    ${price}
                  </span>
                </div>
                <p className="text-sm">{distance} to Town Center</p>
                <div className="flex-align-center gap-x-2 mt-3">
                  <BiMap className="text-muted" />
                  <p>{address}</p>
                </div>
                <div className="flex-align-center gap-x-2 mt-1">
                  <BiBed className="text-muted" />
                  <p>{rooms_available}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Explore;
