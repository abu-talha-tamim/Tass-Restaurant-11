import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg";
import AuthContext from "../../Contex/AuthContex/AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.error("Failed to logout:", error));
  };

  return (
    <div className="navbar sticky top-0 left-0 w-full bg-white shadow-lg px-5 py-3 flex items-center justify-between z-50">
      {/* Left Section */}
      <div className="navbar-start flex items-center">
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

      {/* Center Menu  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-8 text-lg text-gray-700">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/foods"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Foods
            </Link>
          </li>
          <li>
            <Link
              to="/addfood"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Add Food
            </Link>
          </li>
          <li>
            <Link
              to="/foodsgallery"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex items-center">
        {user ? (
          <div className="relative">
            {/* Profile Image */}
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
              
              {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg py-2 animate-fade-in">
                <ul className="text-gray-700">
                  <li>
                    <Link
                      to="/myfoods"
                      className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                    >
                      My Foods
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addfood"
                      className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                    >
                      Add Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/purchase/:id"
                      className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="block px-4 py-2 text-red-500 hover:bg-red-100 transition-all duration-300 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
