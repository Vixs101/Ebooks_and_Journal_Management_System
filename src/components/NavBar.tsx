import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import NavMenu from "./NavMenu";

function handleSignOut(navigate) {
  signOut(auth)
    .then(() => {
      navigate("sign_in");
      return null;
    })
    .catch((error) => {
      // Handle errors with specific messages
      let errorMessage = "Sign out failed. Please try again.";
      switch (error.code) {
        case "auth/network-request-failed":
          errorMessage =
            "Network error. Please check your internet connection.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many sign-out attempts. Please try again later.";
          break;
        default:
          console.error("Sign out error:", error);
      }
      alert(errorMessage);
    });
}

function NavBar({ navigate }) {
  navigate = useNavigate();

  return (
    <>
      <nav className="bg-[#179BD7] flex justify-between px-7 md:py-3 md:px-20 text-white items-center w-full">
        <div className="flex items-center gap-1 md:w-3/4 lg:w-2/4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="md:h-10 md:w-10 h-12 w-12"
          />
          <h1 className="text-lg lg:text-2xl font-semibold">TSU E-library</h1>
        </div>
        <NavMenu navigate={navigate}/>
        <ul className="md:flex items-center justify-between font-medium hidden w-2/4  text-sm  gap-4">
          <Link to="/">
            <li className="hover:border-b-2">Home</li>
          </Link>
          <Link to="ebooks">
            <li className="hover:border-b-2">Ebooks</li>
          </Link>
          <Link to="journals">
            <li className="hover:border-b-2">Journals</li>
          </Link>
          <Link to="report">
            <li className="hover:border-b-2 mr-3">Report</li>
          </Link>
          <button
            className="rounded-xl text-[#179BD7] bg-white hover:bg-slate-200 md:w-16 lg:w-20 h-8 items-center border border-gray-50"
            onClick={() => {
              handleSignOut(navigate);
            }}
          >
            Logout
          </button>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
