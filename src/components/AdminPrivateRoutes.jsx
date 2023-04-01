import { Navigate, Outlet } from "react-router-dom";

const AdminPrivateRoutes = ({ isLoggedIn, admin }) => {
  if (isLoggedIn) {
    return admin(true), (<Outlet />);
  } else {
    return <Navigate to={"/"} />;
  }
};

export default AdminPrivateRoutes;
