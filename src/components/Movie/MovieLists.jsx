import ApiConfig from "../../config/ApiConfig";
import useFetch from "../../config/useFetch";
import CardItem from "../CardItem";

const MovieLists = ({ className, slides }) => {
  const {data , loading, error} = useFetch('/movie/top_rated')
  const {tmdb_w500Image} = ApiConfig

  return (
    <div className={`container mx-auto text-white ${className}`}>
      <h2 className="font-semibold text-lg">Movies</h2>
    
        <div className={`${slides ? 'carousel rounded-box' : 'grid grid-cols-6 gap-y-10'}`}>
        {error && console.log(error.message)}
          {loading && <h2>Loading...</h2>}
          {data && data.data.results.slice(0,12).map((index) => (
            <CardItem
            key={index.id}
            linkto={`/movie-detail/${index.id}`}
            title={index.title}
            year={new Date(index.release_date).getFullYear()}
            className={`${slides ? 'carousel-item px-5' : ''} w-48`}
            thumbn={
              `${tmdb_w500Image(index.poster_path)}`
            }
          />
          ))}
        </div>
      
    </div>
  );
};

export default MovieLists;
