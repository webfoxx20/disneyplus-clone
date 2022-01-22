import React from "react";
import img1 from "../assest/images/hero.jpg";
import MoviesView from "./MoviesView";
const Recommends = () => {
  const images = [img1, img1, img1, img1];
  return (
    <div className="mt-14">
      <h4>Recommended for you</h4>
      <MoviesView images={images} />
    </div>
  );
};

export default Recommends;
