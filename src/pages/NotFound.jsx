import { Link } from "react-router-dom";
import notFound from "../assets/notfound.png";

const NotFound = () => {
  return (
    <div className="w-1/2 mx-auto h-[80vh]">
      <p className="text-center text-2xl mt-20">
        Page Not Found, Click{" "}
        <Link className="font-bold text-red-700" to={"/"}>
          here
        </Link>{" "}
        to return to Home!
      </p>
      <img src={notFound} alt="" className="w-full object-cover" />
    </div>
  );
};

export default NotFound;
