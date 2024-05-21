import React from "react";

function AdminDashboard() {
  return (
    <section className="md:px-20 px-7 w-full md:py-10">
      <div className="flex justify-between items-center w-full hover:bg-gray-100 rounded-xl">
        <h2 className="text-xl font-semibold">Ebooks and Journals</h2>
        <button className="p-2 rounded-xl bg-[#179BD7] hover:bg-[#31b5f3] text-white font-medium">
          Add Ebook/Journal
          {/*bg-[#179BD7]*/}
        </button>
      </div>

      {/* ebooks and journals */}
      <div>
        <div>
          <h3>Name</h3>
          <h3>Title</h3>
          <h3>Year</h3>
          <h3></h3>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
