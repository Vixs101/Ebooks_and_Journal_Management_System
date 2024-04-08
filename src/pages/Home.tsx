import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <section className="p-2 md:px-20 w-full h-full md:py-10">
        <div className="flex md:flex-row flex-col- w-full h-2/3 bg-[#179BD7] rounded-lg text-white md:px-8 items-center">
          <aside className="md:h-1/2 text-center md:text-start text-xl w-full md:w-1/2 lg:w-3/4 md:text-4xl lg:text-5xl ">
            <h1 className="w-full font-semibold leading-12">Your Journey To Infinite Learning Begins Here</h1>
          </aside>
          <aside className="bg-[url(/images/heroImage.png)] bg-no-repeat bg-center bg-cover w-full md:w-1/2 lg:w-1/2 md:h-full h-3/4 ">

          </aside>
        </div>
      </section>
    </>
  );
}

export default Home;
