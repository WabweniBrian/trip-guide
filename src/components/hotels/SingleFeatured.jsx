const SingleFeatured = ({ name, number_of_activities, image, rating }, i) => {
  return (
    <div className="relative rounded-lg overflow-hidden group sm:cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full object-cover h-[250px] group-hover:scale-125 transition-transform duration-300"
      />
      <span className="absolute top-2 left-2 px-4 py-[1px] bg-white text-secondaryRed rounded-full">
        {rating}
      </span>
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t text-slate-100 from-black/80 to-transparent text-alte-100">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="mt-2">{number_of_activities} Activities</p>
      </div>
    </div>
  );
};

export default SingleFeatured;
