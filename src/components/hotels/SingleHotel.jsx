import { BiGlobe, BiMap, BiPhone } from "react-icons/bi";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SingleHotel = ({
  id,
  name,
  image,
  price,
  amenities,
  location,
  rating,
  open_status_text,
  phone,
  website,
}) => {
  return (
    <div className="bg-white group border dark:border-dark rounded-lg dark:bg-card-dark flex-1 basis-[18rem]">
      <div className="relative overflow-hidden rounded-lg sm:cursor-pointer">
        <Link to={`/hotels/${id}`} className="!opacity-100">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-[250px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
        <div className="absolute p-2 text-white rounded-md right-2 top-2 bg-black/50">
          <h1 className="text-2xl font-bold">${price}</h1>
        </div>
      </div>
      <div className="p-3">
        <div className="flex-center-between">
          <Link to={`/hotels/${id}`} className="group-hover:text-primary">
            <h1 className="text-xl font-semibold">
              {name?.length > 20 ? `${name?.slice(0, 20)}...` : name}
            </h1>
          </Link>
          <ReactStars
            size={16}
            isHalf={true}
            activeColor="#ffd700"
            value={rating}
            edit={false}
          />
        </div>
        <div className="flex-align-center gap-x-2">
          <BiMap />
          <p className="text-sm">{location}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-2">
          {amenities?.map((amenity, i) => (
            <span
              key={i}
              className="bg-slate-100 dark:bg-dark-light rounded px-2 py-[2px] text-sm uppercase"
            >
              {amenity}
            </span>
          ))}
        </div>
        <div className="mt-3 flex-center-between">
          <div className="flex-align-center gap-x-2">
            <BiPhone />
            <p>{phone}</p>
          </div>
          <span
            className={`px-2 py-[2px] text-sm ${
              open_status_text === "Open Now"
                ? "text-green-500 bg-green-500/20"
                : "text-secondaryRed bg-secondaryRed/20"
            }`}
          >
            {open_status_text}
          </span>
        </div>
        <div className="mt-3 flex-center-between">
          <div className="mt-3 flex-align-center gap-x-2">
            <BiGlobe />
            <a
              href={website}
              className="text-secondaryBlue !opacity-100 hover:underline"
            >
              {website?.length > 20 ? `${website?.slice(0, 20)}...` : website}
            </a>
          </div>
          <Link
            to={`/hotels/${id}/confirm-booking`}
            className="btn !py-1 border border-primary text-primary hover:bg-primary hover:text-white"
          >
            book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
