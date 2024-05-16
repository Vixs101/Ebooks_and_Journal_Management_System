import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDoc, doc, setDoc } from "firebase/firestore";

function SignIn() {
  const [loginType, setLoginType] = useState("login");
  const [error, setError] = useState("");
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    regNumber: "",
  });
  const [isValidRegNumber, setIsValidRegNumber] = useState(true);
  const [isLoginIn, setIsLoginIn] = useState(false);
  const navigate = useNavigate();

  // function that retrieves the user credentials
  function handleCredentials(e) {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });

    if (name === "regNumber") {
      // defining regex pattern for reg format
      const regNumberPattern = /^TSU\/[A-Z]{3}\/[A-Z]{2}\/\d{2}\/\d{4}$/;

      // validating the input
      const isValidRegNumber = regNumberPattern.test(value);

      //setting validating state based on validation result
      setIsValidRegNumber(isValidRegNumber);
    }
  }


  //function to handle signUp and send the details to firebase
  async function handleSignUp(e) {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );

      const user = userCredential.user;

      if (user) {
        // adding user to firestore with role set as "user"
        const userRef = doc(collection(db, "users"), user.uid); //creating a doc reference
        await setDoc(userRef, {
          email: user.email,
          role: "user",
          registrationNumber: userCredentials.regNumber,
        });

        navigate("/"); //redirect to homepage
      }
    } catch (error) {
      setError(error.message);
    }
  }

  // function to sign in an existing user
  function handleLogin(e) {
    e.preventDefault();
    setError("");
    setIsLoginIn(true);

    signInWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        const user = userCredential.user;

        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoginIn(false);
      });
  }

  return (
    <>
      <section className="flex md:flex-row flex-col h-full w-full">
        <aside className="h-1/4 md:h-full md:w-1/2">
          <div className="bg-[url(/images/signInImage.jpg)] bg-no-repeat bg-center bg-cover h-full w-full">
            <div className="bg-[#179BD7] h-full w-full bg-opacity-60 "></div>
          </div>
        </aside>
        <aside className="h-3/4 md:h-full md:w-1/2 flex flex-col items-center justify-center pb-5 px-5 md:px-7 lg:px-20 text-center">
          <div className="flex flex-col items-center justify-center h-full w-full gap-2  ">
            <img
              src="/images/logo.png"
              alt="School logo"
              className="lg:h-1/6 lg:w-1/6"
            />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-semibold text-gray-800">
                Welcome to Taraba State University E-Library Portal
              </h1>
              <p className="text-base text-gray-400 font-medium">
                Login or create an account to continue
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className={`rounded-lg text-white  font-bold p-2  ${
                  loginType == "login" ? "bg-slate-600" : "bg-[#179BD7]"
                }`}
                onClick={() => setLoginType("login")}
              >
                Login
              </button>
              <button
                className={`rounded-lg  text-white font-bold p-2  ${
                  loginType == "signup" ? "bg-slate-600" : "bg-[#179BD7]"
                }`}
                onClick={() => setLoginType("signup")}
              >
                Signup
              </button>
            </div>

            <form action="submit" className="flex flex-col gap-3 w-full">
              {/* card id */}
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="registrationNumber"
                  className="font-semibold text-gray-800"
                >
                  Reg Number *
                </label>
                <input
                  type="text"
                  name="regNumber"
                  placeholder="Enter your Registration Number"
                  onChange={(e) => {
                    handleCredentials(e);
                  }}
                  className={`outline-none border p-2 ${
                    isValidRegNumber ? "border-[#8f8f3b]" : "border-red-500"
                  } w-full rounded-lg`}
                />
                {!isValidRegNumber && (
                  <p className="text-red-500 text-sm ml-3">
                    Invalid registration number format
                  </p>
                )}
              </div>

              {/* faculty */}
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="email" className="font-semibold text-gray-800">
                  Enter your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your school mail"
                  onChange={(e) => {
                    handleCredentials(e);
                  }}
                  className="outline-none border p-2 border-[#8f8f3b] w-full rounded-lg"
                />
              </div>
              {/* department */}
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-gray-800"
                >
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  onChange={(e) => {
                    handleCredentials(e);
                  }}
                  className="outline-none border p-2 border-[#8f8f3b] w-full rounded-lg"
                />
              </div>

              {loginType == "login" ? (
                <button
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                  className="rounded-xl font-bold p-2 bg-[#179BD7] hover:bg-[#49bced] md:w-3/12 text-white self-center cursor-pointer mb-10 md:mb-0"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    handleSignUp(e);
                  }}
                  className="rounded-xl font-bold p-2 bg-[#179BD7] hover:bg-[#49bced] md:w-3/12 text-white self-center cursor-pointer mb-10 md:mb-0"
                >
                  Sign up
                </button>
              )}
              {error && <div className="mt-3 text-gray-800">{error}</div>}
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}

export default SignIn;
