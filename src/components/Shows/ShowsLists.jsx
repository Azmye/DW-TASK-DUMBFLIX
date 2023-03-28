import CardItem from "../CardItem";

const ShowsLists = ({ className }) => {
  return (
    <div className={`container mx-auto text-white ${className}`}>
      <h2 className="font-semibold text-lg">TV Shows</h2>
      <div className="overflow-hidden p-5">
        <div className="inline-flex gap-5">
          <CardItem
            title={"The Witcher"}
            year={2019}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
            }
          />
          <CardItem
            title={"Game of Thrones"}
            year={2011}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w220_and_h330_face/44rw2cOQrgUthZMhp3eibpXVy9p.jpg"
            }
          />
          <CardItem
            title={"Money Heist"}
            year={2017}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
            }
          />
          <CardItem
            title={"Touch"}
            year={2020}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
            }
          />
          <CardItem
            title={"The Witcher"}
            year={2019}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
            }
          />
          <CardItem
            title={"The Witcher"}
            year={2019}
            className={"w-48"}
            thumbn={
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ShowsLists;
