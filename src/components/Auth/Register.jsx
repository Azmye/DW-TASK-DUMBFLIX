const Register = ({ className }) => {
  return (
    <div
      className={`absolute mt-3 rounded-md top-full right-0 bg-black/80 w-72 text-white p-5 ${className}`}
    >
      <h2 className="font-semibold text-lg mb-4">REGISTER</h2>
      <form>
        <input
          type="email"
          name=""
          id=""
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Email"
        />

        <input
          type="password"
          name=""
          id=""
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Password"
        />

        <input
          type="text"
          name=""
          id=""
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="FullName"
        />

        <select
          name=""
          id=""
          className="w-full mb-3 rounded-md p-1 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
        >
          <option value="Gender" selected className="hidden">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name=""
          id=""
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Phone"
        />

        <textarea
          name=""
          id=""
          placeholder="Address"
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
        ></textarea>

        <button
          className="w-full bg-white py-2 rounded-md mb-2 text-red-700 font-semibold"
          type="button"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account? click{" "}
          <span className="font-semibold">Here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
