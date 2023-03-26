import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

const WalletInfo = () => {
  return (
    <div className="bg-white border dark:bg-card-dark overflow-hidden dark:border-dark rounded-lg">
      <div className="flex-center-center flex-col gap-2 py-3 bg-primary text-slate-100">
        <h1 className="text-4xl font-bold">$6,824</h1>
        <p>Wallet Balance</p>
      </div>
      <div className="mt-4 p-2 pb-6">
        <div className="flex-center-between">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !bg-secondaryRed text-slate-100 !opacity-100">
              <BiDollar />
            </div>
            <div>
              <h1 className="text-2xl">my Cash</h1>
              <span className="bg-secondaryRed/20 rounded-full text-secondaryRed text-sm px-2 py-[2px]">
                Use unrestricted
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">$1,956</h1>
            <Link className="text-primary">How to use?</Link>
          </div>
        </div>
        <div className="flex-center-between mt-4">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !bg-secondaryBlue text-slate-100 !opacity-100">
              <BiDollar />
            </div>
            <div>
              <h1 className="text-2xl">Reward bonus</h1>
              <span className="bg-secondaryRed/20 rounded-full text-secondaryRed text-sm px-2 py-[2px]">
                Use with Restrictions
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold">$1,956</h1>
            <Link className="text-primary">How to use?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
