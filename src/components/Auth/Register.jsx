import { useState } from "react";

const Register = ({ className, toLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: localStorage.length + 1,
      email,
      password,
      fullName,
      gender,
      address,
      phoneNumber,
    };

    localStorage.setItem(localStorage.length + 1, JSON.stringify(userData));
  };
  return (
    <div
      className={`absolute mt-10 rounded-md  bg-black/80 w-72 text-white p-5 ${className}`}
    >
      <h2 className="font-semibold text-lg mb-4">REGISTER</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Password"
        />

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="FullName"
        />

        <select
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          className="w-full mb-3 rounded-md p-1 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
        >
          <option value="default" className="hidden">
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
          placeholder="Phone"
        />

        <textarea
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none"
        ></textarea>

        <button className="w-full bg-white py-2 rounded-md mb-2 text-red-700 font-semibold">
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account? click{" "}
          <span className="font-semibold cursor-pointer" onClick={toLogin}>
            Here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
