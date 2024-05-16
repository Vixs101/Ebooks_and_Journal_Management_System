import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";

import NavBar from "./NavBar";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);

      if (user) {
        const checkUserRole = async () => {
          // getting user doc reference
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef); //fetch user doc

          //@ts-ignore
          if (userDoc.exists && userDoc?.data()?.role === "admin") {
            setUserRole(true);
          }
          9;
        };

        checkUserRole();
      }
    });

    return () => unsubscribe(); //cleaning up the listener on unmount
  }, [auth]);

  if (!isUserSignedIn) {
    navigate("sign_in", { replace: true });
    return null;
  }

  //Only render children if user is signed in and has "admin" role
  if (!userRole) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex self-center h-1/2 w-1/2 bg-[#179BD7] text-white font-bold text-center rounded-lg items-center justify-center">
          Oops!
          You are not authorized to access this page.
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <NavBar navigate={navigate} />
      <Outlet />
    </div>
  );
}
