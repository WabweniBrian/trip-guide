import { BiWifi } from "react-icons/bi";
import { FaPizzaSlice, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { related } from "../../data/dummyData";

const Trending = () => {
  return (
    <div className="pt-10">
      <h1 className="heading">trending related</h1>
      <div className="mt-5 flex-align-center gap-4 flex-wrap">
        {related.map(
          ({ id, name, number_of_reviews, rating, price, image }) => (
            <div
              className="flex-1 basis-[18rem] group rounded-lg bg-white overflow-hidden border dark:bg-card-dark dark:border-dark"
              key={id}
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={name}
                  className="h-[300px] w-full object-cover group-hover:scale-125 transition-a sm:cursor-pointer"
                />
              </div>
              <div className="p-3">
                <Link
                  to="hotels/1"
                  className="group-hover:text-primary transition-colors"
                >
                  <h1 className="text-lg font-semibold capitalize">{name}</h1>
                </Link>
                <div className="flex-align-center gap-x-2 mt-3">
                  <FaStar className="text-secondaryYellow" />
                  <p>
                    {rating}
                    <span className="opacity-70">({number_of_reviews})</span>
                  </p>
                </div>
                <div className="mt-3 flex-align-center gap-x-6">
                  <div className="flex-align-center gap-x-2">
                    <BiWifi />
                    <span>Free Wifi</span>
                  </div>
                  <div className="flex-align-center gap-x-2">
                    <FaPizzaSlice />
                    <span>Breakfast included</span>
                  </div>
                </div>
                <div className="pt-2 mt-4 border-t dark:border-t-dark">
                  <h1 className="text-xl font-bold">${price} total</h1>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Trending;
