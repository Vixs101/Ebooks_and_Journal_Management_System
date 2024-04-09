import React from "react";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Ebooks",
      url: "ebooks",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Journals",
      url: "journals",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Report",
      url: "report",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const ebooks = [
    {
      id:"1",
      image:"ebook1",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"2",
      image:"ebook2",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"3",
      image:"ebook3",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"4",
      image:"ebook4",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"5",
      image:"ebook5",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"6",
      image:"ebook6",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"7",
      image:"ebook7",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"8",
      image:"ebook8",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"5",
      image:"ebook5",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"6",
      image:"ebook6",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"7",
      image:"ebook7",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"8",
      image:"ebook8",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },    {
      id:"5",
      image:"ebook5",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"6",
      image:"ebook6",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"7",
      image:"ebook7",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
    {
      id:"8",
      image:"ebook8",
      title: "Book Title",
      Edition: "Edition/About Book" 
    },
  ]

  export {links, ebooks}
  