import React from "react";
import NavBar from "../components/NavBar";
import { ebooks } from "../lib/constants";

function Journals() {
  return (
    <>
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10">
        <h1 className="mt-5 text-lg md:text-2xl font-semibold text-gray-800 text-center">
          Available Journals
        </h1>
        <hr className="mt-5"/>
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
          <p className="text-gray-800 text-lg md:text-xl font-semibold">See More...</p>
        </div>
      </section>
    </>
  );
}

export default Journals;
