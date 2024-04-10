import React, { useState } from "react";
import { PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import NavBar from "./NavBar";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserSignedIn(!!user);
      console.log(user);
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
      <NavBar />
      <Outlet />
    </div>
  );
}
