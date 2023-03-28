import mainBg from "../../assets/main-bg.png";

const Hero = () => {
  return (
    <div className="hero relative h-[550px]">
      <img src={mainBg} alt="" className="object-cover w-full h-full" />
      <div className="bg-gradient-to-t from-black  absolute left-0 right-0 top-0 bottom-0 px-28 pt-20">
        <div className="w-1/2 text-white">
          <h1 className="text-8xl mb-3">The Witcher</h1>
          <p className="mb-2">
            Set on a fictional, medieval-inspired landmass known as the
            Continent, The Witcher explores the legend of Geralt of Rivia,
            Yennefer of Vengerberg and Princess Ciri.
          </p>
          <div className="flex gap-2 mb-3">
            <p>2019</p>
            <p className="border border-1 px-1 rounded-md">TV SERIES</p>
          </div>
          <button className="bg-red-700 w-1/2 py-3 text-lg font-semibold rounded-md shadow-md shadow-slate-900">
            WATCH NOW !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
