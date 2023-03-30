const UserPayment = () => {
  return (
    <div className="w-full ">
      <h2 className="text-center text-3xl font-bold text-white mt-20">
        Premium
      </h2>
      <div className="my-5">
        <p className="text-center">
          Bayar sekarang dan nikmati streaming film-film yang kekinian dari{" "}
          <span className="font-bold text-red-700">DUMBFLIX</span>
        </p>
        <p className="text-center text-white font-bold ">
          <span className="font-bold text-red-700">DUMBFLIX</span> : 0981312323
        </p>
      </div>
      <form className="w-1/4 h-[61vh] mx-auto">
        <input
          type="text"
          className="w-full mb-3 px-2 py-3 bg-zinc-600 rounded-sm border-2 border-white"
          placeholder="Input your account number"
        />
        <input
          type="file"
          className="w-full mb-3  bg-white text-red-700 rounded-sm file:py-3 file:px-2"
        />

        <button className="w-full bg-red-700 text-white py-2 rounded-md mt-5">
          Send
        </button>
      </form>
    </div>
  );
};

export default UserPayment;
