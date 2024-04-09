import React from "react";

function SignIn() {
  return (
    <>
      <section className="flex md:flex-row flex-col h-full w-full">
        <aside className="h-1/4 md:h-full md:w-1/2">
          <div className="bg-[url(/images/signInImage.jpg)] bg-no-repeat bg-center bg-cover h-full w-full">
            <div className="bg-[#179BD7] h-full w-full bg-opacity-60 "></div>
          </div>
        </aside>
        <aside className="h-3/4 md:h-full md:w-1/2 flex flex-col items-center justify-center pb-5 pt-3 px-5 md:px-7 lg:px-20 text-center">
          <div className="flex flex-col items-center justify-center h-full w-full gap-4  ">
            <img
              src="/images/logo.png"
              alt="School logo"
              className="lg:h-1/6 lg:w-1/6"
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-2xl font-semibold text-gray-800">
                Welcome to Taraba State University E-Library Portal
              </h1>
              <p className="text-base text-gray-400 font-medium">
                Kindly fill in the information below to sign in
              </p>
            </div>
            <form className="flex flex-col gap-3 w-full">
              {/* card id */}
              <div className="flex flex-col items-start gap-2">
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
                  className="outline-none border p-2 border-[#8f8f3b] w-full rounded-sm"
                />
              </div>

              {/* faculty */}
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="selectFaculty"
                  className="font-semibold text-gray-800"
                >
                  Select faculty *
                </label>
                <select
                  id="faculty"
                  className="outline-none border p-2 border-[#8f8f3b] w-full rounded-sm"
                >
                  <option value="">Select...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              {/* department */}
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="selectDepartment"
                  className="font-semibold text-gray-800"
                >
                  Department *
                </label>
                <select
                  id="departments"
                  className="outline-none border p-2 border-[#8f8f3b] w-full rounded-sm"
                >
                  <option value="">Select...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <button className="bg-[#179BD7] hover:bg-[#3db5ed] p-2 rounded-xl text-white font-semibold w-1/2 self-center">
                Sign In
              </button>
              <div className="flex self-center items-center gap-2 mb-10 md:mb-2">
                <input
                  type="checkbox"
                  name="saveDetails"
                  className="h-6 w-7 "
                />
                <label htmlFor="saveDetails" className="text-gray-400">
                  Remember Me
                </label>
              </div>
            </form>
          </div>
        </aside>
      </section>
    </>
  );
}

export default SignIn;
