import { topTours } from "../../data/dummyData";

const TopTours = () => {
  return (
    <div className="pt-10 pb-16">
      <h1 className="heading mb-3">top tours</h1>
      <p>Keep calm & travek on</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {topTours.map(({ id, name, image, number_of_places, location }) => (
          <div
            className="rounded-lg group overflow-hidden relative flex-1 basis-[18rem] sm:cursor-pointer"
            key={id}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-[300px] object-cover group-hover:scale-125 transition-transform duration-300"
            />
            <span className="absolute top-2 left-2 px-4 py-[1px] bg-black/50 text-slate-200 rounded-full">
              {location}
            </span>
            <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t text-slate-100 from-black/80 to-transparent text-alte-100">
              <h1 className="font-semibold text-xl">{name}</h1>
              <p className="mt-2">{number_of_places} Popular Places</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTours;
