import React, { useState } from "react";
import { blogContent } from "./blog";
import { tabsData } from "./tabs";

function Blogs() {
  const [filteredItems, setFilteredItems] = useState(blogContent);
  const [filteredTabs, setFilteredTabs] = useState(tabsData);
  const [activeAll, setActiveAll] = useState(true);
  const [activeBranding, setActiveBranding] = useState(false);
  const [razno, setActiverazno] = useState(false);
  const [activePhotography, setActivePhotography] = useState(false);

  const handleFilterAll = () => {
    setFilteredItems(blogContent);
    setActiveAll(true);
    setActiveBranding(false);
    setActiverazno(false);
    setActivePhotography(false);
  };

  const handleBranding = () => {
    const filteredItems = blogContent.filter((item) =>
      item.category.includes("Game")
    );
    setFilteredItems(filteredItems);
    setActiveAll(false);
    setActiveBranding(true);
    setActiverazno(false);
    setActivePhotography(false);
  };

  const handleRazno = () => {
    const filteredItems = blogContent.filter((item) =>
      item.category.includes("Web Design")
    );
    setFilteredItems(filteredItems);
    setActiveAll(false);
    setActiveBranding(false);
    setActiverazno(true);
    setActivePhotography(false);
  };

  return (
    <div className="relative bg-gray-200">
      <div className="px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="sm:pe-6 lg:pe-8">
          <div className="flex flex-col justify-center items-center">
            <p className="text-green-500 text-left font-bold text-lg md:text-2xl">
              RECENT WORKS
            </p>
            <h2 className="text-left font-bold text-4xl md:text-4xl">
              Our Portfolio
            </h2>
          </div>
        </div>
      </div>

      <div>
        <div className="flex space-x-4 max-w-lg mx-auto pb-20">
          <button
            onClick={handleFilterAll}
            className={`flex-1 ${activeAll ? "bg-green-500" : ""} ${
              activeAll ? "text-white" : "text-black"
            }  font-bold py-2 px-4 rounded shadow-2xl`}
          >
        Aplikacije
          </button>
          {/* <button
            onClick={handleBranding}
            className={`flex-1 ${activeBranding ? "bg-green-500" : ""} ${
              activeBranding ? "text-white" : "text-black"
            } font-bold py-2 px-4 rounded shadow-2xl`}
          >
        
          </button> */}
          <button
            onClick={handleRazno}
            className={`flex-1 ${razno ? "bg-green-500" : ""} ${
              razno ? "text-white" : "text-black"
            } font-bold py-2 px-4 rounded shadow-2xl`}
          >
            Razno
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-2 max-w-3xl mx-auto gap-20 w-full">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            <a
              href={`/portfolio/${item.headline
                .toLowerCase()
                .replace(/\s/g, "-")
                .replaceAll(",", "")
                .replaceAll("ć", "c")
                .replaceAll("š", "s")
                .replaceAll("!", "")
                .replaceAll("?", "")}`}
              className="block  rounded-md overflow-hidden"
            >
              <div className="bg-gray-200 border border-gray-300 shadow-md p-5">
                <img
                  src={item.src.src}
                  alt="images"
                  className="w-full h-[20rem] object-contain"
                />
              </div>
            </a>
            <div className="mt-4 flex flex-col items-start justify-start opacity-0 bg-white transition-all duration-500 transform translate-y-[-4rem] 
              group-hover:opacity-100 group-hover:translate-y-[-7rem] mx-2 py-4 rounded-lg ease-in">
              <h2 className="text-lg text-center opacity-0 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-5 duration-500 delay-200 text-green-500 font-semibold">{item.category}</h2>
              <a
                href={`portfolio/${item.headline
                  .toLowerCase()
                  .replace(/\s/g, "-")
                  .replaceAll(",", "")
                  .replaceAll("ć", "c")
                  .replaceAll("š", "s")
                  .replaceAll("!", "")
                  .replaceAll("?", "")}`}
                className="text-lg text-black transform translate-x-20 group-hover:translate-x-5 duration-500 delay-500"
              >
                <p className="text-base text-start opacity-0 group-hover:opacity-100 translate-x-20 group-hover:-translate-x-0 duration-500 delay-200 text-black font-semibold ">{item.headline}</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2">
        {razno ?
          filteredTabs.map((tab) => (
            <div key={tab.id} className="border p-4 m-4">
              <p className="font-bold mb-2 text-left text-2xl">{tab.category}</p>
              <ul className="list-disc ">
                {tab.content.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          )) :
          ''}
      </div>
    </div>
  );
}

export default Blogs;
