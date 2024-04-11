import React, { useState } from "react";
import { links } from "../lib/constants";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

// function to signout users
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

function NavMenu({ navigate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex md:w-2/3 justify-end">
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-white md:hidden"
            onClick={() => setOpen(true)}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        )}

        {open && (
          <div className="absolute flex flex-col gap-5 px-5 py-10 text-lg font-semibold right-0 mt-12 h-[calc(100vh-7rem)] w-[calc(100vw-5rem)] bg-white border-gray-300 border-2 text-black rounded-lg duration-500">
            {links.map((link) => (
              <Link
                to={link.url}
                key={link.id}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <div className="flex text-[#179BD7] hover:bg-gray-100 rounded-sm h-10 gap-2 items-center">
                  {link.icon}
                  {link.title}
                </div>
                <hr className="" />
              </Link>
            ))}
            <button
              className="flex rounded-2xl bg-[#179BD7] text-white hover:bg-[#4cbef3] md:w-16 lg:w-20 p-2 h-8 items-center self-center"
              onClick={() => {
                handleSignOut(navigate);
              }}
            >
              Logout
            </button>
            <hr className=" bg-slate-950 mt-40" />
          </div>
        )}
      </div>
    </>
  );
}

export default NavMenu;
