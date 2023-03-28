import { useState } from "react";
import logo from "../../assets/logo.png";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <>
      <nav className="bg-black/80 text-white py-3">
        <div className="container mx-auto flex justify-between items-center relative">
          <div>
            <ul className="flex gap-4 text-md">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/shows'}>TV Shows</Link></li>
              <li><Link to={'/movies'}>Movies</Link></li>
            </ul>
          </div>
          <div className="w-24 ">
            <img src={logo} alt="Brand Logo" className="w-full" />
          </div>
          <div className="flex gap-3 font-semibold">
            <button
              className="bg-white text-red-700 px-4 py-1 rounded-md"
              onClick={() => setRegisterModal(!registerModal)}
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
        </div>
      </nav>

      <div className="container mx-auto relative z-50">
        {loginModal && <Login />}
        {registerModal && <Register />}
      </div>
    </>
  );
};

export default Navbar;
