const BestWay = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="heading">better way to find your perfect car</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          quia eius quaerat, quas deleniti sed. Sapiente illo architecto
          aspernatur reiciendis?
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
        <div className="text-center  flex-1">
          <img
            src="/images/choose-car.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">
              choose your car
            </h1>
            <p className="mt-1">
              Select a car using our advanced search filters
            </p>
          </div>
        </div>

        <div className="text-center  flex-1">
          <img
            src="/images/contact-dealer.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">
              contact your dealer
            </h1>
            <p className="mt-1">
              After you've selected your car, book it and a dealer will contact
              you soon
            </p>
          </div>
        </div>

        <div className="text-center  flex-1">
          <img
            src="/images/get-car.png"
            alt=""
            className="w-36 h-36 mx-auto object-contain"
          />
          <div className="mt-3">
            <h1 className="text-lg font-semibold capitalize">get your car</h1>
            <p className="mt-1">
              Here you are! Your car is booked and waiting for you to come get
              it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWay;
