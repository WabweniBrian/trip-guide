import { BiDollar, BiListCheck } from "react-icons/bi";

const WalletTransactions = () => {
  return (
    <div className="bg-white p-4 border dark:bg-card-dark overflow-hidden dark:border-dark rounded-lg">
      <h1 className="heading">wallet transactions</h1>
      <div className="mt-4 pb-4 border-b dark:border-b-dark flex-align-center overflow-auto hide-scrollbar gap-2">
        <button className="btn btn-secondary uppercase">all</button>
        <button className="btn flex-align-center gap-x-2 border dark:border-dark">
          <div className="icon-box !w-6 !h-6 !bg-secondaryBlue text-slate-100 !opacity-100">
            <BiDollar />
          </div>
          <p>my cash</p>
        </button>
        <button className="btn flex-align-center gap-x-2 border dark:border-dark">
          <div className="icon-box !w-6 !h-6 !bg-secondaryRed text-slate-100 !opacity-100">
            <BiDollar />
          </div>
          <p>reward bonus</p>
        </button>
      </div>
      <div className="mt-4 flex-align-center overflow-auto hide-scrollbar gap-2">
        <span className="px-3 py-1 flex-shrink-0 bg-slate-100 dark:bg-dark-light rounded-full">
          Promo
        </span>
        <span className="px-3 py-1 flex-shrink-0 bg-slate-100 dark:bg-dark-light rounded-full">
          MMI Black
        </span>
        <span className="px-3 py-1 flex-shrink-0 bg-slate-100 dark:bg-dark-light rounded-full">
          My Promise
        </span>
        <span className="px-3 py-1 flex-shrink-0 bg-slate-100 dark:bg-dark-light rounded-full">
          Refunds
        </span>
        <span className="px-3 py-1 flex-shrink-0 bg-slate-100 dark:bg-dark-light rounded-full">
          Others
        </span>
      </div>
      <div className="mt-4">
        <p className="uppercase">12 feb, 2023</p>

        <div className="mt-3 flex-center-between">
          <div className="flex gap-x-2">
            <div className="icon-box !w-14 !h-14 !bg-primary/20 text-primary">
              <BiListCheck className="text-3xl" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Booking</h1>
              <h1>
                <span className="text-muted">Booking ID:</span> NR72182892482
              </h1>
              <div className="flex-align-center gap-x-2">
                <div className="icon-box !w-6 !h-6 !bg-secondaryRed text-slate-100 !opacity-100">
                  <BiDollar />
                </div>
                <p>My Cash Debited</p>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold">$589</h1>
        </div>

        <div className="mt-3 flex-center-between pt-3 border-t dark:border-t-dark">
          <div className="flex gap-x-2">
            <div className="icon-box !w-14 !h-14 !bg-primary/20 text-primary">
              <BiListCheck className="text-3xl" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Booking</h1>
              <h1>
                <span className="text-muted">Booking ID:</span> NR72182892482
              </h1>
              <div className="flex-align-center gap-x-2">
                <div className="icon-box !w-6 !h-6 !bg-secondaryRed text-slate-100 !opacity-100">
                  <BiDollar />
                </div>
                <p>My Cash Debited</p>
              </div>
            </div>
          </div>
          <h1 className="text-xl font-bold">$40</h1>
        </div>
      </div>
    </div>
  );
};

export default WalletTransactions;
