import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg";
import AuthContext from "../../Contex/AuthContex/AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Failed to logout:", error);
      });
  };

  const linkItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-10 mt-2 w-48 p-2"
          >
            {linkItems}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold flex items-center space-x-2"
        >
          <motion.span
            animate={{ color: ["#ecff33", "#295015"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="font-bold underline"
          >
            TA
          </motion.span>
          SS
          <img
            className="w-14 h-11 rounded-lg object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Center Menu (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 text-lg">{linkItems}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="btn btn-info">
            LogOut
          </button>
        ) : (
          <>
            <Link to="/register" className="btn btn-info px-4 py-2">
              Register
            </Link>
            <Link to="/login" className="btn btn-info px-4 py-2">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
