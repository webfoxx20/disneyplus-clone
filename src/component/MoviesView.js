import React from "react";

const MoviesView = ({ images }) => {
  const image = images.map((img) => {
    return (
      <div className="w-full mt-5 rounded-xl movies border-[rgba(115,115,115,0.34)] border-4 cursor-pointer hover:scale-105 hover:border-[rgba(249,249,249,0.8)]  overflow-hidden  group transition duration-300">
        <img
          src={img}
          alt="movie"
          className="w-full h-full  block  transition duration-300 "
        />
      </div>
    );
  });
  return (
    <div className="block  md:grid grid-cols-4x gap-5 w-full">{image}</div>
  );
};

export default MoviesView;
