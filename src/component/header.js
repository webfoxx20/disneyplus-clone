import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { UserLogin, UserSignOut } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

import Logo from "../assest/images/logo.svg";
import HomeLogo from "../assest/images/home-icon.svg";
import SearchLogo from "../assest/images/search-icon.svg";
import WatchlistLogo from "../assest/images/watchlist-icon.svg";
import OriginalsLogo from "../assest/images/original-icon.svg";
import MoviesLogo from "../assest/images/movie-icon.svg";
import SeriesLogo from "../assest/images/series-icon.svg";
import PrimaryLinks from "./PrimaryLinks";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const name = useSelector((state) => state.user.value.name);
  const email = useSelector((state) => state.user.value.email);
  const photo = useSelector((state) => state.user.value.photo);

  console.log(email);
  console.log(photo);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [name]);

  const signInWithGoogle = () => {
    if (!name) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          setUser(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      signOut(auth).then(() => {
        dispatch(UserSignOut());
        navigate("/");
      });
    }
  };

  const setUser = (data) => {
    dispatch(
      UserLogin({
        name: data.displayName,
        email: data.email,
        photo: data.photoURL,
      })
    );
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto  w-full px-8  h-[70px] text-white flex justify-between items-center tracking-widest ">
        <img src={Logo} className="px-8 w-36 " />
        {!name ? (
          <Link to="#" className="px-8">
            <span
              onClick={signInWithGoogle}
              className="border border-[#f9f9f9] bg-[#00000099] py-2 rounded transition hover:bg-white hover:text-black px-6 text-2xl tracking-wider"
            >
              Login
            </span>
          </Link>
        ) : (
          <>
            <nav className=" mr-auto ml-10">
              <ul className="flex flex-nowrap">
                <PrimaryLinks
                  LinkIcon={HomeLogo}
                  LinkText="Home"
                  Linkpath="home"
                />
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
            <div className="user-profile h-14 w-14 relative flex group cursor-pointer">
              <img src={photo} className="h-full w-full " />
              <span
                onClick={signInWithGoogle}
                className="bg-[rgba(19,19,19)] px-3 py-1  absolute right-0.5 top-14 border-[rgba(115,115,115,0.34)] shadow-sm rounded-sm opacity-0 transition duration-500 group-hover:opacity-100 "
              >
                SignOut
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
