import React, { useState } from "react";

const Register = ({ openLogin, setIsModelOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const userSignUp = { name, email, password };
    let users = JSON.parse(localStorage.getItem("users"));
    if (users && users.length > 0) {
      users.push(userSignUp);
    } else {
      users = [userSignUp];
    }
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userObj", JSON.stringify(userSignUp));
    setIsModelOpen(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold font-mono mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-1 py-2 border rounded"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-1 py-2 border rounded"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-1 py-2 border rounded"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="mb-4">
          <button
            onClick={handleSignUp}
            type="button"
            className="w-full bg-red-600 hover:bg-red-700 rounded-lg transition-all text-white py-2 font-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700 font-semibold">
          Already Have an Account?
        </span>
        <button className="text-red-800 font-semibold px-2" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
