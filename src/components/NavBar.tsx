import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function NavBar() {
  return (
    <>
      <nav className="bg-[#179BD7] flex justify-between p-2 md:py-3 md:px-10 text-white items-center ">
        <div className="flex items-center gap-1">
          <img src="/images/logo.png" alt="Logo" className="md:h-10 md:w-10 h-12 w-12" />
          <h1 className="text-lg md:text-2xl font-semibold">TSU E-library</h1>
        </div>
        <NavMenu/>
        <ul className="md:flex items-center gap-5 font-medium hidden">
          <Link to="/">
            <li className="hover:border-b-4">Home</li>
          </Link>
          <Link to="ebooks">
            <li className="hover:border-b-4">Ebooks</li>
          </Link>
          <Link to="journals">
            <li className="hover:border-b-4">Journals</li>
          </Link>
          <Link to="report">
            <li className="hover:border-b-4">Report</li>
          </Link>
          <form
            className="flex bg-white bg-opacity-40 p-2 px-3 rounded-lg w-3/4 md:w-1/2 "
          >
            <input
              type="text"
              placeholder="Search for books"
              className="outline-none w-full bg-transparent text-base text-white placeholder-white placeholder-opacity-60"
            />

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-white font-extrabold cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
