import {
  ProfileCompletion,
  ProfileEdit,
  ProfileInfo,
} from "../components/profile";

const Profile = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <ProfileInfo />
        </div>
        <div className="lg:col-span-3">
          <ProfileCompletion />
          <ProfileEdit />
        </div>
      </div>
    </div>
  );
};

export default Profile;
