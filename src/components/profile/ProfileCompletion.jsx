import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";

const ProfileCompletion = () => {
  return (
    <div className="bg-white p-4 border dark:bg-card-dark dark:border-dark rounded-lg">
      <div className="flex-align-center gap-4">
        <h1 className="font-semibold">Complete your profile</h1>
        <div className="w-full bg-slate-100 dark:bg-dark-light h-2 rounded-full overflow-hidden">
          <div className="w-4/5 bg-secondaryBlue h-full"></div>
        </div>
        <h1 className="font-semibold">80%</h1>
      </div>
      <div className="mt-3">
        <p>Get the best out of TripGuide by adding the remaining details</p>
        <div className="mt-3 flex-align-center gap-4 flex-wrap">
          <div className="flex-align-center gap-x-2 rounded-full bg-slate-100 dark:bg-dark-light px-2 py-[2px]">
            <FaCheckCircle className="text-secondaryBlue" />
            <p className="text-sm">Verified email ID</p>
          </div>
          <div className="flex-align-center gap-x-2 rounded-full bg-slate-100 dark:bg-dark-light px-2 py-[2px]">
            <FaCheckCircle className="text-secondaryBlue" />
            <p className="text-sm">Verified mobile Number</p>
          </div>
          <div className="flex-align-center gap-x-2 rounded-full bg-slate-100 dark:bg-dark-light px-2 py-[2px]">
            <FaPlusCircle className="text-secondaryBlue" />
            <p className="text-sm">Complete Basic Info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;
