import { Link } from "react-router-dom";

const CardItem = ({ title, year, thumbn, className, linkto }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Link to={linkto}><img src={thumbn} alt="" className=" mb-2 rounded-md" /></Link>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-sm">{year}</p>
    </div>
  );
};

export default CardItem;
