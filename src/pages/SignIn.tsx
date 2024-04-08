import React from "react";

function SignIn() {
  return (
    <>
      <section className="flex h-full w-full">
        <aside className="h-full w-1/2">
          <div className="bg-[url(/images/signInImage.jpg)] bg-no-repeat bg-center bg-cover h-full w-full">
            <div className="bg-[#179BD7] h-full w-full bg-opacity-60 "></div>
          </div>
        </aside>
        <aside className="h-full w-1/2 flex flex-col items-center justify-center py-10 px-20 text-center">
          <div className="flex flex-col items-center h-full w-full gap-7 ">
            <img
              src="/images/logo.png"
              alt="School logo"
              className="h-1/6 w-1/6"
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-3xl font-semibold text-gray-800">
                Welcome to Taraba State University E-Library Portal
              </h1>
              <p className="text-lg text-gray-400 font-medium">
                Kindly fill in the information below to sign in
              </p>
            </div>
            <form className="flex flex-col gap-3 w-full">
              <div className="flex flex-col items-start gap-4">
                <label
                  htmlFor="LibraryCardId"
                  className="font-semibold text-gray-800"
                >
                  Card Number *
                </label>
                <input
                  type="text"
                  name="LibraryCardId"
                  placeholder="Enter Library Card Id"
                  className="outline-none border p-2 border-[#179BD7] w-full rounded-sm"
                />
              </div>
              <button className="bg-[#179BD7] hover:bg-[#3db5ed] p-2 rounded-sm text-white font-semibold">
                Sign In
              </button>
              <div className="flex items-center gap-2">
                <input type="checkbox" name="saveDetails" className="h-6 w-7 "/>
                <label htmlFor="saveDetails" className="text-gray-400">Remember Me</label>
              </div>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}

export default SignIn;
