import React from "react";
import { ebooks } from "../lib/constants";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col px-7 md:px-20 w-full h-full md:py-10 mb-10">
        <section className="flex md:flex-row flex-col w-full h-1/2 md:h-2/3 bg-[#179BD7] rounded-lg text-white md:px-10 items-center p-3 mt-5">
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
          {ebooks.map((ebook) => (
            <div className="flex flex-col gap-3 bg-gray-50 hover:bg-slate-200 border-2 rounded-b-lg cursor-pointer">
              <img
                src={`/images/${ebook.image}.png`}
                alt="Ebook cover"
                className="h-4/5"
              />
              <div className="px-3 gap-3 pb-50">
                <h2 className="text-lg text-gray-800 font-semibold">
                  {ebook.title}
                </h2>
                <p className="text-[#8f8f3b] text-xs md:text-base">{ebook.Edition}</p>
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
