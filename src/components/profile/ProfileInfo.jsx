import { BiCheck, BiEdit, BiEditAlt } from "react-icons/bi";
const ProfileInfo = () => {
  return (
    <div className="bg-white p-4 border dark:bg-card-dark dark:border-dark rounded-lg">
      <div className="w-20 h-20 relative mx-auto">
        <img
          src="/images/avatar.png"
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <div className="icon-box !h-7 !w-7 bg-slate-100 absolute bottom-0 right-0 border-2 border-white dark:bg-dark-light !opacity-100 dark:border-card-dark">
          <BiEdit />
        </div>
      </div>
      <div className="mt-3 pb-3 border-b dark:border-b-dark">
        <h1 className="heading text-center">wabweni brian</h1>
        <div className="px-4 py-1 rounded-full mt-4 flex-align-center gap-x-2 bg-slate-100 dark:bg-hover-color-dark">
          <BiCheck />
          <p>Identity Verified</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex-center-between">
          <h1>From</h1>
          <p>Uganda</p>
        </div>
        <div className="flex-center-between mt-3">
          <h1>Member since</h1>
          <p>01.01.2022</p>
        </div>
        <button className="w-full btn btn-primary !rounded-full flex-center-center gap-x-2 mt-6">
          <span>edit my data</span>
          <BiEditAlt />
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
