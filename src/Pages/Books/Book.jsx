import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
import Bookdetails from "../BookDetails/Bookdetails";

const Book = ({ singleBook }) => {
  return (
    <Link to={`/Bookdetails/${singleBook.bookId}`}>
      <div>
        <div className="card bg-base-100 shadow-sm p-5">
          <figure className="bg-gray-200 p-5 rounded-2xl">
            <img className="w-3/12" src={singleBook.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-start items-center gap-5">
              {singleBook.tags.map((tag) => (
                <ul>
                  <li className="p-2 bg-gray-100 rounded-2xl">
                    <a className="text-[1rem] text-green-700">{tag}</a>
                  </li>
                </ul>
              ))}
            </div>
            <h2 className="card-title">{singleBook.bookName}</h2>
            <p>
              By: <b>{singleBook.author}</b>{" "}
            </p>

            <div className="flex justify-between items-center">
              <div>{singleBook.category}</div>
              <div className="flex items-center">
                {singleBook.rating}
                <CiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
