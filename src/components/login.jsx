import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Implement your login logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome Back !</h1>
      <div className="w-full max-w-xs">
        <form className="bg-transparent" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-lg mb-2">
              E-mail:
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="shadow appearance-none border-b border-gray-300 w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:border-white"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg mb-2">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="shadow appearance-none border-b border-gray-300 w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:border-white"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
          </div>
          <div className="mt-4 text-center">
            <a href="/signup" className="font-bold hover:underline">
              New here? Sign up
            </a>
          </div>
        </form>
      </div>
      <footer className="absolute bottom-4">
        <a href="/contact" className="hover:underline">
          Contact Us
        </a>
      </footer>
    </div>
  );
};

export default Login;
