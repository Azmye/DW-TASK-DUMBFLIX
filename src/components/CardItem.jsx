const CardItem = ({ title, year, thumbn, className }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <img src={thumbn} alt="" className=" mb-2 rounded-md" />
      <h5 className="font-semibold">{title}</h5>
      <p className="text-sm">{year}</p>
    </div>
  );
};

export default CardItem;
