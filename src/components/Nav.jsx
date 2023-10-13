import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [showList, setShowList] = useState("hidden");
  return (
    <header id="top" className="padding-x py-8 absolute z-50 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px] hover:scale-105"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="hover:scale-110 ">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red duration-150"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden max-lg:block "
          onClick={() =>
            showList === "hidden" ? setShowList("flex") : setShowList("hidden")
          }
        >
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
      <div
        className={
          showList +
          " flex-col  bg-slate-gray opacity-95 w-1/3 absolute right-20 rounded-xl "
        }
      >
        <ul className="w-full flex-1 flex flex-col justify-center items-center">
          {navLinks.map((item) => (
            <li key={item.label} className="w-full text-center">
              <a href={item.href} className="nav-li">
                {item.label}
              </a>
            </li>
          ))}
          <li className="w-full text-center">
            <a href="/" className="nav-li">
              Sign in
            </a>
          </li>
          <li className="w-full text-center">
            <a href="/" className="nav-li">
              Explore now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
