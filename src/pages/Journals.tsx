import React from "react";
import NavBar from "../components/NavBar";
import { ebooks } from "../lib/constants";

function Journals() {
  return (
    <>
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10">
        <form className="self-center border-2 border-[#179BD7] p-2 px-3 rounded-2xl md:rounded-xl w-3/4 md:w-2/4 lg:w-2/5 flex mt-7 md:mt-0">
          <input
            type="text"
            placeholder="Search for Journals"
            className="outline-none w-full bg-transparent text-base text-gray-800 placeholder:text-sm md:placeholder:text-base placeholder-opacity-60"
          />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-[#179BD7] font-extrabold cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
        <h1 className="mt-5 text-lg md:text-2xl font-semibold text-gray-800 text-center">
          Available Journals
        </h1>
        <hr className="mt-5" />
        <main className="grid grid-cols-2 md:grid-cols-4 mt-7 md:mt-14 gap-6 md:gap-3 lg:gap-6 ">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-gray-50 hover:bg-slate-200 border-2 rounded-lg cursor-pointer"
            >
              <img
                src={`/images/${ebook.image}.png`}
                alt="Ebook cover"
                className="h-4/5 rounded-t-lg"
              />

              <div className="px-3 gap-6 pb-50">
                <h2 className="text-lg md:text-sm lg:text-lg text-gray-800 font-semibold">
                  {ebook.title}
                </h2>
                <p className="text-[#8f8f3b] text-xs lg:text-base">
                  {ebook.Edition}
                </p>
                <button className="flex rounded-2xl bg-[#179BD7] text-white hover:bg-[#4cbef3] lg:w-16 px-2 lg:h-8 items-center text-center my-2 text-base md:text-sm lg:text-base">
                  Read..
                </button>
              </div>
            </div>
          ))}
        </main>
        <div className="flex items-center justify-center w-full text-center my-6">
          <p className="text-gray-800 text-lg md:text-xl font-semibold">
            See More...
          </p>
        </div>
      </section>
    </>
  );
}

export default Journals;
