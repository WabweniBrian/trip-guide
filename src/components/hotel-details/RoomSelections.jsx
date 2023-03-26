import { BiCheck } from "react-icons/bi";
import { rooms } from "../../data/dummyData";

const RoomSelections = () => {
  return (
    <div className="pt-10">
      <h1 className="heading">choose another room</h1>
      {rooms.map(({ id, name, conditions, price }, i) => (
        <div
          key={id}
          className={`bg-white rounded-lg mt-3 p-4 border dark:bg-card-dark dark:border-dark ${
            i === 0 && "!border-primary"
          }`}
        >
          <div className="flex-center-between">
            <div>
              <h1 className="text-xl font-semibold capitalize">{name}</h1>
              <span className="opacity-70 text-sm">Offer Conditions</span>
              {conditions.map((condition, i) => (
                <div className="flex-align-center gap-x-2" key={i}>
                  <BiCheck className="text-sm text-green-500" />
                  <p>{condition}</p>
                </div>
              ))}
            </div>
            <div>
              <h1>
                <span className="text-4xl font-bold md:text-5xl">${price}</span>
                <span className="text-muted text-sm">/night</span>{" "}
              </h1>
              <p className="text-secondaryYellow">Save $10</p>
              <p>on TripGuide.com</p>
              <button className="btn btn-primary mt-4">select</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomSelections;
