import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="font-extrabold text-2xl text-yellow-600">
            KITCHEN-ALCHEMY
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-2xl inline-block font-medium">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-2xl inline-block font-medium">
              <a>Blog</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div className="avatar online">
              <div className="w-12 rounded-full">
                <img
                  title={user?.displayName}
                  src={user?.photoURl}
                  alt="Avatar"
                />
              </div>
            </div>
          )}
          {user ? (
            <button className="btn ml-2">
              Log out
            </button>
          ) : (
            <Link to={"/login"} className="btn ml-2">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
