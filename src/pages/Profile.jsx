import {
  FaCreditCard,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaUserCircle,
} from "react-icons/fa";
import profilePic from "../assets/profile_pic.jpg";
import { BsGenderAmbiguous } from "react-icons/bs";
import { useEffect, useState } from "react";

const Profile = ({ userState }) => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    // checking if there is user currently login
    for (let i = 1; i <= localStorage.length; i++) {
      const response = localStorage.getItem(i);
      const user = JSON.parse(response);
      if (user.isLoggedIn == true) {
        return setUserInfo(user);
      }
    }
  }, [userState]);
  return (
    <div className="w-full pt-20 pb-44 h-[100vh]">
      <div className="w-1/2 m-auto  rounded-md bg-zinc-800 flex p-5">
        <div className="w-2/3">
          <h2 className="font-bold">Personal Info</h2>
          <div className="flex gap-2 items-center mt-4 mb-2">
            <FaUserCircle className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">{userInfo?.fullName}</h5>
              <p className="text-xs">Full name</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <FaEnvelope className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">{userInfo?.email}</h5>
              <p className="text-xs">Email</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <FaCreditCard className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">
                {userInfo?.isLoggedIn ? "Active" : ""}
              </h5>
              <p className="text-xs">Status</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <BsGenderAmbiguous className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">{userInfo?.gender}</h5>
              <p className="text-xs">Gender</p>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <FaPhone className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">{userInfo?.phoneNumber}</h5>
              <p className="text-xs">Mobile Phone</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaLocationArrow className="text-2xl text-red-700" />
            <div>
              <h5 className="text-sm font-bold">{userInfo?.address}</h5>
              <p className="text-xs">Address</p>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src={profilePic} alt="" className="rounded-sm" />
          <button className="w-full mt-2 py-2 rounded-md bg-red-700 text-white">
            Change Photo Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
