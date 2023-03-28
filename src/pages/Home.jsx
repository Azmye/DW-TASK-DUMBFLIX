import Hero from "../components/Home/Hero";
import MovieLists from '../components/Movie/MovieLists';
import ShowsLists from '../components/Shows/ShowsLists';

import homeImage from '../assets/main-bg.png'

const Home = () => {
  return (
    <div className="pb-5">
      <Hero heroImage={homeImage} heroTitle={'The Witcher'} heroCateg={'TV SHOWS'} heroDesc={'Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg and Princess Ciri.'} />
      <ShowsLists slides={true} className={"mb-10"} />
      <MovieLists slides={true} className={"mb-5"} />
    </div>
  );
};

export default Home;
