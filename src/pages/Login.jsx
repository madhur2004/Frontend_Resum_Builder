import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId } from "../redux/userSlice";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://resume-backend-wu7w.onrender.com/api/auth/login",
        {
          identifier,
          password,
        }
      );

      alert("Welcome " + res.data.user.username);
      const { userId, token } = res.data;
      localStorage.setItem("userId", userId);
      console.log("User ID:", userId);
      console.log("Token:", token);
      localStorage.setItem("token", token);
      dispatch(setUserId({ userId, token }));
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 animate-fadeIn">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl backdrop-blur-sm animate-slideUp">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-blue-700">
          Welcome Back!
        </h2>

        <input
          type="text"
          placeholder="Username or Email"
          className="w-full px-4 py-3 mb-4 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setIdentifier(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-6 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className={`w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="w-full max-w-sm mt-6 animate-fadeIn">
          <div className="p-4 text-sm text-left text-gray-700 border border-gray-200 rounded-lg shadow bg-gray-50">
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              Demo Account (Public Access)
            </h3>
            <p>
              <span className="font-medium">Username:</span> Madhur Chaturvedi
            </p>
            <p>
              <span className="font-medium">Email:</span> madhur@gmail.com
            </p>
            <p>
              <span className="font-medium">Password:</span> madhur123
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Use any of these to log in and explore the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
