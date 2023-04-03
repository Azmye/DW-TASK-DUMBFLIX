import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoute = ({ isLoggedIn, setLoginModal }) => {
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return setLoginModal(true), (<Navigate to={"/"} />);
  }
};

export default UserPrivateRoute;
