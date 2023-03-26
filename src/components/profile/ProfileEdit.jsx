import { useState } from "react";
import { BiEnvelope, BiStreetView, BiUser } from "react-icons/bi";
import { FiCalendar, FiHome } from "react-icons/fi";

const ProfileEdit = () => {
  const [user, setUser] = useState({
    location: "Kampala, Uganda",
    address: "24673 Luwumu Street",
    email: "wabwenib66@gmail.com",
    dob: "01.01.1990",
    gender: "Male",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  return (
    <div className="mt-8">
      <div className="flex-center-between">
        <h1 className="heading">Hi, I'm Brian</h1>
        <div className="px-3 rounded-full bg-slate-200 dark:bg-dark-light py-1">
          Edit your profile
        </div>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full sm:w-fit">
          <p>Live in</p>
          <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
            <FiHome />
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full focus:border-primary"
              value={user.location}
              name="location"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-fit">
          <p>Street Address</p>
          <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
            <BiStreetView />
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full"
              value={user.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Email Address</p>
        <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
          <BiEnvelope />
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>Live in</p>
            <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
              <FiCalendar />
              <input
                type="text"
                className="border-none outline-none bg-transparent w-full"
                value={user.dob}
                name="dob"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>Street Address</p>
            <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md ">
              <BiUser />
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="border-none outline-none w-full bg-inherit dark:bg-main-dark"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
