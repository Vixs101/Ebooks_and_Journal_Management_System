import React from "react";
import { ebooks } from "../lib/constants";

function AdminDashboard() {
  return (
    <section className="md:px-20 px-7 w-full md:py-10">
      <div className="flex justify-between items-center w-full hover:bg-gray-100 rounded-xl">
        <h2 className="text-xl font-semibold">Ebooks and Journals</h2>
        <button className="p-2 rounded-xl bg-[#179BD7] hover:bg-[#31b5f3] text-white font-medium">
          Add Ebook/Journal
        </button>
      </div>

      {/* ebooks and journals */}
      <table className="w-full flex flex-col py-3 px-5 mt-7">
        <thead>
          <tr className="flex justify-between border-b-gray-300 border-b-2 pb-3 text-gray-500 text-sm font-medium ">
            <td>Name</td>
            <td>Edition</td>
            <td>Year</td>
            <td>Actions</td>
          </tr>
        </thead>
        {/* books */}

        {ebooks.map((ebook, index) => (
          <tbody>
            <tr className="flex justify-between border-b-gray-300 border-b-2 pb-3 text-gray-500 text-sm font-medium pt-2">
              <td className="flex items-center gap-2">
                <img
                  src={`/images/${ebook.image}.png`}
                  alt="Ebook cover"
                  className="h-10 w-10"
                />
                {ebook.title}
              </td>
              <td>{ebook.Edition}</td>
              <td>{ebook.year}</td>
              <td className="flex gap-2" >
                <button className="p-2 rounded-xl bg-[#179BD7] hover:bg-[#31b5f3] text-white font-medium">
                  Edit Book
                </button>
                <button className="p-2 rounded-xl bg-red-500 hover:bg-red-400 text-white font-medium">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default AdminDashboard;
