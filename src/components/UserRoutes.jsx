import { Outlet } from "react-router-dom";

const UserRoutes = ({ admin }) => {
  return admin(false), (<Outlet />);
};

export default UserRoutes;
