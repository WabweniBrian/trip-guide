const Cancelled = () => {
  return (
    <div className="md:flex-center-between flex-col md:flex-row gap-4 bg-white p-3 rounded-lg border dark:bg-card-dark dark:border-dark">
      <div className="flex-align-center gap-4">
        <div>
          <img
            src="/images/place (29).jpg"
            alt=""
            className="w-40 h-32 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg">Baan Wanglang Reverside</h1>
          <p>342 Soi Wat Rakang, Pannok Rd, Bangkok, Thailand</p>
        </div>
      </div>
      <h1 className="mt-3 md:mt-0">Booked on Feb 8, 2023</h1>
    </div>
  );
};

export default Cancelled;
