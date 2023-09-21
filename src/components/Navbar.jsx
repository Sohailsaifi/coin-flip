import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";


const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative z-[10]">
      <img src={logo} alt="coinflip" className="w-[110px] h-[16px] flex-shrink-0 sm:ml-10" />

      <ul className="list-none md:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`
              navbar-links ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } mr-10
            `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <Button styles={`sign-in-button md:flex hidden`} text={'Sign in'}/>
      <Button styles={`sign-up-button mr-10 md:flex hidden`} text={'Sign up'}/>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <Button styles={`sign-in-button mb-5`} text={'Sign in'}/>
            <Button styles={`sign-up-button mb-5`} text={'Sign up'}/>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>

              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
