import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDoc } from "firebase/firestore";

import NavBar from "./NavBar";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
      
      if (user) {
        
        navigate("/");
      }
    });

    return () => unsubscribe(); //cleaning up the listener on unmount
  }, [auth]);

  if (!isUserSignedIn) {
    navigate("sign_in", { replace: true });
    return null;
  }

  return (
    <div className="">
      <NavBar navigate={navigate} />
      <Outlet />
    </div>
  );
}
