import React from "react";
import { ebooks } from "../lib/constants";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10 items-center">
        <form className="md:hidden border-2 border-[#179BD7] p-2 px-3 rounded-xl w-3/4 md:w-2/4 flex mt-7">
          <input
            type="text"
            placeholder="Search for books"
            className="outline-none w-full bg-transparent text-base text-gray-800 placeholder:text-based placeholder-opacity-60"
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

        <section className="flex md:flex-row flex-col w-full h-1/2 md:h-2/3 bg-[#179BD7] rounded-lg text-white md:px-10 items-center p-3 mt-5 gap-10 md:gap-0">
          <aside className="md:w-3/4 h-2/6 text-2xl text-center md:text-start md:text-3xl lg:text-5xl">
            <h1 className="my-10 md:my-0 w-full h-full md:h-0 font-semibold leading-12 ">
              Your Journey To Infinite Learning Begins Here
            </h1>
          </aside>
          <aside className="h-1/2 md:h-3/4 lg:h-full md:w-3/4">
            <img
              src="/images/heroImage.png"
              alt="Hero image"
              className="w-full h-full"
            />
          </aside>
        </section>
        <main className="grid grid-cols-2 md:grid-cols-4 mt-14 gap-6 ">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 bg-gray-50 hover:bg-slate-200 border-2 rounded-b-lg cursor-pointer"
            >
              <img
                src={`/images/${ebook.image}.png`}
                alt="Ebook cover"
                className="h-4/5"
              />
              <div className="px-3 gap-5 pb-50">
                <h2 className="text-lg text-gray-800 font-semibold">
                  {ebook.title}
                </h2>
                <p className="text-[#8f8f3b] text-xs md:text-base">
                  {ebook.Edition}
                </p>
                <button className="bg-[#179BD7] hover:bg-[#3db5ed] p-1 rounded-lg text-white text-center text-sm h-8">
                  Read..
                </button>
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

export default Home;
