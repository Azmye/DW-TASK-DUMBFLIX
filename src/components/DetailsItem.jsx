import { useParams } from "react-router-dom";
import useFetch from "../config/useFetch";
import ApiConfig from "../config/ApiConfig";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const DetailsItem = ({ endpoint }) => {
  const { id } = useParams();
  const { tmdb_w500Image, tmdb_originalImage } = ApiConfig;
  const { data, loading, error } = useFetch(`${endpoint}/${id}`);

  useEffect(() => {
    if (!loading) {
      console.log(
        data.data.videos.results.map((index) =>
          console.log(`https://www.youtube.com/watch?v=${index.key}`)
        )
      );
    }
  }, [loading]);

  return (
    <div className="pt-12">
      {data &&
        data.data.videos.results.slice(0, 1).map((index) => (
          <div className="relative h-[500px]">
            <ReactPlayer
              className={"absolute top-0 left-0"}
              width={"100%"}
              height={"100%"}
              light={
                <div className="px-40 h-[500px]">
                  <img
                    className="w-full h-[500px] mx-auto"
                    src={`${tmdb_originalImage(data.data.backdrop_path)}`}
                  />
                </div>
              }
              controls={true}
              url={`https://www.youtube.com/watch?v=${index.key}`}
            />
          </div>
        ))}
      {/* <div className="relative">
        {data && (
          <>
            <div className="px-36">
              <img
                src={`${tmdb_originalImage(data.data.backdrop_path)}`}
                alt=""
                className="mx-auto w-full"
              />
            </div>
            <div className="absolute left-0 right-0 top-0 bottom-0 bg-zinc-500/40 z-10 flex justify-center items-center">
              <FaPlay className="text-6xl hover:text-red-700 cursor-pointer" />
            </div>
          </>
        )}
      </div> */}
      <div className="flex container mx-auto px-36 py-10 justify-center">
        <div className="w-2/3">
          <div className="flex">
            <div className="w-1/4">
              {data && (
                <img
                  src={tmdb_w500Image(data.data.poster_path)}
                  className="w-36"
                  alt=""
                />
              )}
            </div>
            {data && (
              <div className="w-3/4 pr-10">
                <h3 className="text-3xl font-bold">
                  {data.data.title ? data.data.title : data.data.name}
                </h3>
                <div className="flex gap-3 my-2">
                  <p>
                    {new Date(
                      data.data.release_date
                        ? data.data.release_date
                        : data.data.first_air_date
                    ).getFullYear()}
                  </p>
                  <p className="border border-1 border-white px-2 rounded-md">
                    Movies
                  </p>
                </div>
                <p className="text-justify">
                  {data.data.overview.length > 240
                    ? `${data.data.overview.slice(0, 240)}...`
                    : data.data.overview}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3">
          {data && (
            <img
              src={tmdb_originalImage(data.data.backdrop_path)}
              alt=""
              className="rounded-md"
            />
          )}
          {data && (
            <p className="mt-2">
              {data.data.title
                ? `${data.data.title} : movie`
                : `${data.data.name} : TV Shows`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
