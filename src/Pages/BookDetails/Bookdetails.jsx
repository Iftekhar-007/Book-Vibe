import React from "react";
import { useLoaderData, useParams } from "react-router";

const Bookdetails = () => {
  const { id } = useParams();
  const bookid = parseInt(id);
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookid);
  console.log(singleBook);
  return (
    <div>
      <h1>{singleBook.bookName}</h1>
      <img className="w-3/12" src={singleBook.image} alt="" />

      <div className="flex gap-3 mt-10">
        <button className="btn btn-primary">read</button>
        <button className="btn btn-success">wishlist</button>
      </div>
    </div>
  );
};

export default Bookdetails;
