import { useState } from "react";
import ShowsLists from "../components/Shows/ShowsLists";
import MovieLists from "../components/Movie/MovieLists";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [category, setCategory] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.value == "shows") {
      setCategory(false);
    } else {
      setCategory(true);
    }
  };
  return (
    <>
      <header className="pt-20 flex justify-between container mx-auto">
        <div className=" flex gap-2">
          <h2 className="font-bold text-xl text-white">List Film</h2>
          <select
            className=" border-2 border-white text-white rounded-md"
            onChange={handleOnChange}
          >
            <option value="default" className="hidden">
              Category
            </option>
            <option value="shows">TV Shows</option>
            <option value="movie">Movies</option>
          </select>
        </div>

        <div>
          <Link
            to={"/add-item"}
            className="px-12 py-1 rounded-md bg-red-700 text-white"
          >
            Add Item
          </Link>
        </div>
      </header>

      {!category ? (
        <ShowsLists
          slides={false}
          className={"mt-10 pb-10"}
          linkTo={"/shows-detail-admin/"}
        />
      ) : (
        <MovieLists
          slides={false}
          className={"mt-10 pb-10"}
          linkTo={"/movie-detail-admin/"}
        />
      )}
    </>
  );
};

export default Dashboard;
