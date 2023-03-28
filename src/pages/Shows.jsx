import Hero from "../components/Home/Hero";
import showsImage from '../assets/series.png'
import ShowsLists from "../components/Shows/ShowsLists";

const Shows = () => {
    return <div className="pb-1">
              <Hero heroImage={showsImage} heroTitle={'Money Heists'} heroCateg={'TV SHOWS'} heroDesc={'Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg and Princess Ciri.'} />
              <ShowsLists slides={false} className={"mb-10"} />
    </div>;
}
 
export default Shows;