import React from "react";
import ctaLogoTwo from "../assest/images/details.jpg";
import movieTitle from "../assest/images/scale.png";
import playButtonWhite from "../assest/images/play-icon-white.png";
import playButtonBlack from "../assest/images/play-icon-black.png";

const Details = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className=" container  pt-20 h-full mx-auto top-0 px-4 md:px-10 ">
        <img src={movieTitle} alt="movie-title" className="w-96" />
        <div className="flex  mt-20">
          <button className="bg-white  px-4 rounded md:py-1.5 hover:bg-white hover:bg-opacity-80 flex items-center">
            <img src={playButtonBlack} alt="play button" />
            <span className="text-xl tracking-widest uppercase">play</span>
          </button>
          <button className="bg-black hover:bg-[#0f0f0f] bg-opacity-30 ml-3 px-4 rounded md:py-1.5 flex items-center border border-white">
            <img src={playButtonWhite} alt="play button" />
            <span className="text-xl tracking-widest text-white uppercase">
              Trailer
            </span>
          </button>
          <div className="ml-3 w-10 h-10 self-center bg-black bg-opacity-30  border-2 border-white rounded-[50%] flex flex-col items-center justify-center ">
            <div className="w-4 h-0.5 bg-white "></div>
            <div className="w-4 h-0.5 bg-white -rotate-90 transform -translate-y-0.5"></div>
            <div></div>
          </div>
        </div>
        <div>
          <h3 className="text-[rgb(249,249,249)] mt-10 ">sub title</h3>
          <p className="text-[rgb(249,249,249)">description</p>
        </div>
      </div>
      <img
        src={ctaLogoTwo}
        alt="hero"
        className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden"
      />
    </div>
  );
};

export default Details;
