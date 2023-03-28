import Hero from "../components/Home/Hero";
import movieImage from "../assets/movie.png"
import MovieLists from "../components/Movie/MovieLists";

const Movies = () => {
    return <div className="pb-1">
    <Hero heroImage={movieImage} heroTitle={'Joker'} heroCateg={'Movie'} heroDesc={'Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg and Princess Ciri.'} />
    <MovieLists slides={false} className={"mb-10"} />
</div>; ;
}
 
export default Movies;