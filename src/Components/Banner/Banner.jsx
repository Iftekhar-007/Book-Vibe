import React from "react";
import ImageBook from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between px-20 items-center py-20 bg-gray-200 rounded-2xl mb-40">
      <div>
        <h1 className="text-5xl font-bold">
          Books to Freshen Up <br /> Your Bookshelf
        </h1>
        <button className="btn btn-success text-white mt-8 text-[1rem] font-bold">
          View The List
        </button>
      </div>
      <div>
        <img className="w-full rounded-2xl" src={ImageBook} alt="" />
      </div>
    </div>
  );
};

export default Banner;
