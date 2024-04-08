import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <section className="p-2 md:px-20 w-full h-full md:py-10">
        <section className="flex md:flex-row flex-col w-full h-1/2 md:h-2/3 bg-[#179BD7] rounded-lg text-white md:px-10 items-center p-3">
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
      </section>
    </>
  );
}

export default Home;
