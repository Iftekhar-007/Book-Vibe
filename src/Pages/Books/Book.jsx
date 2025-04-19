import React from "react";

const Book = ({ singleBook }) => {
  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure className="bg-gray-200 p-5 rounded-2xl">
        <img className="w-3/12" src={singleBook.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleBook.bookName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </div>
  );
};

export default Book;
