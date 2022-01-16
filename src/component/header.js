import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import Logo from "../assest/images/logo.svg";
import HomeLogo from "../assest/images/home-icon.svg";
import SearchLogo from "../assest/images/search-icon.svg";
import WatchlistLogo from "../assest/images/watchlist-icon.svg";
import OriginalsLogo from "../assest/images/original-icon.svg";
import MoviesLogo from "../assest/images/movie-icon.svg";
import SeriesLogo from "../assest/images/series-icon.svg";
import PrimaryLinks from "./PrimaryLinks";

const header = (props) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto  bg-pry-bg h-[70px] text-white flex justify-between items-center tracking-widest fixed">
      <img src={Logo} className="px-8 w-36 " />
      <nav className=" mr-auto ml-10">
        <ul className="flex flex-nowrap">
          <PrimaryLinks LinkIcon={HomeLogo} LinkText="Home" Linkpath="home" />
          <PrimaryLinks
            LinkIcon={SearchLogo}
            LinkText="Search"
            Linkpath="search"
          />
          <PrimaryLinks
            LinkIcon={WatchlistLogo}
            LinkText="Watchlist"
            Linkpath="watchlist"
          />
          <PrimaryLinks
            LinkIcon={OriginalsLogo}
            LinkText="Originals"
            Linkpath="orginals"
          />
          <PrimaryLinks
            LinkIcon={MoviesLogo}
            LinkText="Movies"
            Linkpath="movies"
          />
          <PrimaryLinks
            LinkIcon={SeriesLogo}
            LinkText="Series"
            Linkpath="series"
          />
        </ul>
      </nav>
      <Link to="#" className="px-8">
        <span
          onClick={signInWithGoogle}
          className="border border-[#f9f9f9] bg-[#00000099] py-2 rounded transition hover:bg-white hover:text-black px-6 text-2xl tracking-wider"
        >
          Login
        </span>
      </Link>
    </div>
  );
};

header.propTypes = {};

export default header;
