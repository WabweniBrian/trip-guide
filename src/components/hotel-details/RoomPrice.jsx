const RoomPrice = () => {
  return (
    <div>
      {Array.apply(null, { length: 3 }).map((_, i) => (
        <div
          className={`flex-center-between gap-x-2 p-3 bg-white dark:bg-card-dark mt-3 rounded-lg ${
            i === 1 && "border border-primary"
          }`}
          key={i}
        >
          <div className="flex-align-center gap-x-3">
            <img
              src="/images/place (32).jpg"
              alt=""
              className="w-14 h-14 object-cover rounded-lg"
            />
            <div>
              <h1 className="text-lg font-semibold">1 single room</h1>
              <h1 className="text-xl mt-2">$240.99</h1>
            </div>
            <div>
              <button className="btn btn-primary">select</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomPrice;
