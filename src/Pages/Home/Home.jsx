import React, { Suspense } from "react";
import Banner from "../../Components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Banner></Banner>
      <h1 className="text-center text-5xl font-bold mb-16">Books</h1>
      <Suspense fallback={<span>Loading.......</span>}>
        <Books data={data}></Books>
      </Suspense>
    </>
  );
};

export default Home;
