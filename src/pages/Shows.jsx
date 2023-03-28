import Hero from "../components/Home/Hero";
import showsImage from '../assets/series.png'
import ShowsLists from "../components/Shows/ShowsLists";

const Shows = () => {
    return <div className="pb-1">
              <Hero heroImage={showsImage} heroTitle={'Money Heists'} heroCateg={'TV SHOWS'} heroDesc={'The first two parts revolve around a long-prepared, multi-day assault on the Royal Mint of Spain In the third part, the surviving robbers are forced out of hiding, and with the help of new members, they plan and perform an assault on the Bank of Spain. The fourth part continues this'} />
              <ShowsLists slides={false} className={"mb-10"} />
    </div>;
}
 
export default Shows;