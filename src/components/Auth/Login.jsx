import { useState } from "react";

const Login = ({ className, toRegis, loginModal, userState }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const localStorageKey = localStorage.length;
    for (let i = 1; i <= localStorageKey; i++) {
      const response = localStorage.getItem(i);
      const users = JSON.parse(response);

      if (
        users.email == state.email.toLowerCase() &&
        users.password == state.password.toLowerCase()
      ) {
        loginModal(false),
          localStorage.setItem(
            i,
            JSON.stringify({ ...users, isLoggedIn: true })
          ),
          userState(200);
      }
    }
  };

  return (
    <div
      className={`absolute rounded-md mt-28  bg-black/80 w-72 text-white p-5 ${className}`}
    >
      <h2 className="font-semibold text-lg mb-4">LOGIN</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleOnChange}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleOnChange}
          className="w-full mb-8 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Password"
        />

        <button className="w-full bg-red-700 py-2 rounded-md mb-2">
          Login
        </button>

        <p className="text-sm text-center">
          don't have an account? click{" "}
          <span className="font-semibold cursor-pointer" onClick={toRegis}>
            Here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
