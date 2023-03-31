const Hero = ({ heroImage, heroTitle, heroDesc, heroCateg }) => {
  return (
    <div className="pt-12">
      <div className="hero relative h-[550px] w-full">
        <img
          src={heroImage}
          alt=""
          className="object-cover  w-full h-[550px]"
        />
        <div className="bg-gradient-to-t from-black  absolute left-0 right-0 top-0 bottom-0 px-28 pt-20">
          <div className="text-white">
            <h1 className="text-8xl mb-3">{heroTitle}</h1>
            <p className="mb-2 w-1/2">{heroDesc}</p>
            <div className="flex gap-2 mb-3">
              <p>2019</p>
              <p className="border border-1 px-2 rounded-md">{heroCateg}</p>
            </div>
            <button className="bg-red-700 w-1/4 py-3 text-lg font-semibold rounded-md shadow-md shadow-slate-900">
              WATCH NOW !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
