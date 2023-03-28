import Hero from "./Home/Hero";
import MovieLists from "./Movie/MovieLists";
import ShowsLists from "./Shows/ShowsLists";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShowsLists className={"mb-5"} />
      <MovieLists className={"mb-5"} />
    </div>
  );
};

export default Home;
