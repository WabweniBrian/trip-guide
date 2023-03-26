import { WalletInfo, WalletTransactions } from "../components/wallet";

const Wallet = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <WalletInfo />
        </div>
        <div className="lg:col-span-2">
          <WalletTransactions />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
