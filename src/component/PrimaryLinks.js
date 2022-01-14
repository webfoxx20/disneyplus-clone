import React from "react";
import { Link } from "react-router-dom";

const PrimaryLinks = ({ LinkIcon, LinkText, Linkpath }) => {
  return (
    <>
      <li className="flex mr-8">
        <Link to={Linkpath} classname="cursor-pointer">
          <div className="flex">
            <img src={LinkIcon} className="w-5 min-w-[20px] mb-1 mr-1" />

            <span className="text-lg text-pry-clr primary-nav">{LinkText}</span>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PrimaryLinks;
