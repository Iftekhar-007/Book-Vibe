import React from "react";
import Book from "./Book";

const Books = ({ data }) => {
  //   console.log(data);
  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((singleBook, index) => (
        <Book key={index} singleBook={singleBook}></Book>
      ))}
    </div>
  );
};

export default Books;
