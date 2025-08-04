import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserId } from "../redux/userSlice";
import { FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearUserId());
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-blue-200 via-white to-purple-100 no-print backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6">
        <Link
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        >
          ResumeBuilder
        </Link>

        {/* Desktop Navbar */}
        <nav className="items-center hidden gap-6 md:flex">
          <Link
            to="/"
            className="font-medium text-gray-800 transition hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium text-gray-800 transition hover:text-blue-700"
          >
            About
          </Link>

          {userId ? (
            <>
              <Link
                to="/dashboard"
                className="font-medium text-gray-800 transition hover:text-blue-700"
              >
                My Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 text-white bg-red-500 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-medium text-blue-700 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="font-medium text-gray-800 hover:underline"
              >
                Sign Up
              </Link>
            </>
          )}

          <Link
            to={userId ? "/myresume" : "/login"}
            className="flex items-center gap-1 font-medium text-gray-800 transition hover:text-blue-700"
          >
            <CgProfile className="text-xl" />
            <span>My Resume</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="px-4 pb-4 bg-white shadow-inner md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-700"
            >
              About
            </Link>

            {userId ? (
              <>
                <Link
                  to="/dashboard"
                  className="font-medium text-gray-700 hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  My Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 w-fit"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="font-medium text-gray-700 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}

            <Link
              to={userId ? "/myresume" : "/login"}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-700"
            >
              <CgProfile className="text-xl" />
              <span>My Resume</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
