import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Login from "../Auth/Login";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Auth/Register";
import { FaFileInvoiceDollar, FaRegUser, FaUser } from "react-icons/fa";
import { BsFillTriangleFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";

const Navbar = ({
  isLoggedIn,
  userState,
  admin,
  setLogin,
  setLoginModal,
  loginModal,
}) => {
  const [registerModal, setRegisterModal] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleOnLogout = () => {
    for (let i = 1; i <= localStorage.length; i++) {
      const response = localStorage.getItem(i);
      const user = JSON.parse(response);
      if (user.isLoggedIn == true) {
        return (
          localStorage.setItem(
            i,
            JSON.stringify({ ...user, isLoggedIn: false })
          ),
          userState(400),
          setLogin(false),
          setIsDropdown(false)
        );
      }
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 bg-zinc-800 text-white py-3 z-50">
        <div className="container mx-auto flex justify-between items-center relative">
          <div>
            {admin ? (
              <ul className="flex gap-4 text-md">
                <li>
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/transactions"}>Transactions</Link>
                </li>
              </ul>
            ) : (
              <ul className="flex gap-4 text-md">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/shows"}>TV Shows</Link>
                </li>
                <li>
                  <Link to={"/movies"}>Movies</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="w-24 ">
            <Link to={"/"}>
              <img src={logo} alt="Brand Logo" className="w-full" />
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="ml-40">
              <FaUser
                className="cursor-pointer"
                onMouseOver={() => setIsDropdown(true)}
              />
            </div>
          ) : (
            <div className="flex gap-3 font-semibold">
              <button
                onClick={() => setRegisterModal(!registerModal)}
                className="bg-white text-red-700 px-4 py-1 rounded-md"
              >
                Register
              </button>
              <button
                onClick={() => setLoginModal(!loginModal)}
                className="text-white bg-red-700 px-4 py-1 rounded-md"
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* user dropdown */}
        <div
          className={`absolute top-full z-20 right-9 text-zinc-800 mt-1 ${
            isDropdown ? "" : "hidden"
          }`}
        >
          <BsFillTriangleFill />
        </div>
        <div
          onMouseLeave={() => setIsDropdown(false)}
          className={`absolute w-40 top-full right-7 mt-4 rounded-md py-2 bg-zinc-800 z-10 ${
            isDropdown ? "" : "hidden"
          }`}
        >
          <Link
            to={"/profile"}
            className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2"
          >
            <FaRegUser className="text-xl text-red-700" /> Profile
          </Link>
          <Link
            to={"/user-payment"}
            className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2"
          >
            <FaFileInvoiceDollar className="text-xl text-red-700" /> Pay
          </Link>
          <Link
            to={"/dashboard"}
            className="flex items-center cursor-pointer gap-2 font-semibold px-5 mb-2"
          >
            <MdDashboardCustomize className="text-xl text-red-700" /> Dashboard
          </Link>
          <hr className="w-full h-2" />
          <Link
            onClick={handleOnLogout}
            className="flex items-center cursor-pointer gap-2 font-semibold px-5"
          >
            <IoLogOut className="text-xl text-red-700" /> Logout
          </Link>
        </div>
      </nav>

      {loginModal && (
        <div className="relative flex justify-center">
          <div
            className="absolute w-full h-[100vh] bg-zinc-900/50 z-10"
            onClick={() => setLoginModal(!loginModal)}
          ></div>
          <Login
            userState={userState}
            loginModal={setLoginModal}
            setLogin={setLogin}
            className={"z-20"}
            toRegis={() => {
              setLoginModal(false);
              setRegisterModal(true);
            }}
          />
        </div>
      )}

      {registerModal && (
        <div className="relative flex justify-center">
          <div
            className="absolute w-full h-[100vh] bg-zinc-900/50 z-10"
            onClick={() => setRegisterModal(!registerModal)}
          ></div>
          <Register
            registerModal={setRegisterModal}
            className={"z-20"}
            toLogin={() => {
              setRegisterModal(false);
              setLoginModal(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
