const Login = ({ className }) => {
  return (
    <div
      className={`absolute mt-3 rounded-md top-full right-0 bg-black/80 w-72 text-white p-5 ${className}`}
    >
      <h2 className="font-semibold text-lg mb-4">LOGIN</h2>
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
          className="w-full mb-8 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Password"
        />

        <button
          className="w-full bg-red-700 py-2 rounded-md mb-2"
          type="button"
        >
          Login
        </button>

        <p className="text-sm text-center">
          don't have an account? click{" "}
          <span className="font-semibold">Here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
