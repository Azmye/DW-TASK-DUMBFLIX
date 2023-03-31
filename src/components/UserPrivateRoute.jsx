import { Navigate, Outlet, useNavigate } from "react-router-dom";

const UserPrivateRoute = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default UserPrivateRoute;
