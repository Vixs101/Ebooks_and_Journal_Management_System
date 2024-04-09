import React from "react";
import NavBar from "../components/NavBar";

function Report() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10 items-center text-center gap-10">
        <div className="flex flex-col w-1/2 gap-8 text-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-gray-800">
            Tell us About the book you can't find
          </h1>
          <p className="text-gray-400 w-3/5">
            Kindly give us feedback or information about any stress you might
            have encountered here
          </p>
        </div>
        <form
          action=""
          className="flex flex-col w-3/4 h-full gap-8 items-center"
        >
          <textarea
            placeholder="Type your feedback here"
            className="outline-none border-2 rounded-xl w-full placeholder:text-center placeholder:items-start h-3/4 p-3"
          />{" "}
          <button className="bg-[#179BD7] hover:bg-[#3db5ed] p-2 rounded-sm text-white font-semibold w-1/4">
            Send feedback
          </button>
        </form>
      </section>
    </>
  );
}

export default Report;
