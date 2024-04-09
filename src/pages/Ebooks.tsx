import React from "react";
import NavBar from "../components/NavBar";
import { ebooks } from "../lib/constants";

function Ebooks() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10">
        <h1 className="mt-5 text-lg md:text-2xl font-semibold text-gray-800 text-center">Available Ebooks</h1>
        <main className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-6 ">
          {ebooks.map((ebook) => (
            <div className="flex flex-col gap-3 bg-gray-50
            hover:bg-slate-200 border-2 rounded-b-lg cursor-pointer">
              <img
                src={`/images/${ebook.image}.png`}
                alt="Ebook cover"
                className="h-4/5"
              />
              <div className="px-3 gap-3 pb-50">
                <h2 className="text-lg text-gray-800 font-semibold">
                  {ebook.title}
                </h2>
                <p className="text-[#8f8f3b] text-xs">{ebook.Edition}</p>
              </div>
            </div>
          ))}
        </main>
        <div className="flex items-center justify-center w-full text-center my-6">
          <p className="text-gray-800 text-xl font-semibold">See More...</p>
        </div>
      </section>
    </>
  );
}

export default Ebooks;
