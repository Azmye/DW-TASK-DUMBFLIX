import Hero from "../components/Home/Hero";
import movieImage from "../assets/movie.png";
import MovieLists from "../components/Movie/MovieLists";

const Movies = () => {
  return (
    <div className="pb-1">
      <Hero
        linkTo={"/movie-detail/475557"}
        heroImage={movieImage}
        heroTitle={"Joker"}
        heroCateg={"Movie"}
        heroDesc={
          'A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother- Penny Fleck, and as he learns more about his mental illness, he learns more about his past. Dealing with all the negativity and bullying from society he heads downwards on a spiral, in turn showing how his alter ego "Joker", came to be.'
        }
      />
      <MovieLists
        slides={false}
        className={"mb-10"}
        linkTo={"/movie-detail/"}
      />
    </div>
  );
};

export default Movies;
