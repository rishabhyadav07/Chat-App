import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  bg-[#FFFFFF] ">
      <div className="w-full p-6 shadow-md backdrop-filter bg-[#FFFFFF] rounded-box">
        <h1 className="text-3xl font-semibold text-center text-[#171725] font-inter">
          Login
          <span className="text-blue-500 font-inter"> Chat-App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 bg-[#FFFFFF]">
              <span className="text-base label-text font-inter">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 text-[#171725] font-inter focus:border-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label bg-[#FFFFFF]">
              <span className="text-base label-text text-[#171725] font-inter">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 font-inter focus:border-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm text-[#969AB8] hover:underline hover:text-blue-600 mt-2 inline-block font-inter"
          >
            {"Don't"} have an account?
            <span className="text-[#0062FF] font-inter font-semibold">
              Sign Up
            </span>
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-[#0062FF] hover:bg-[#0062FF] hover:bg-opacity-90"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                <span className="text-[#FFFFFF] font-inter">Login</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


