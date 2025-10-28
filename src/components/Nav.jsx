import { useState } from "react";
import menu from "../images/menu.svg";
import closeMenu from "../images/closeMenu.svg";
import right from "../images/right.svg";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  if (toggleMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {/* <!-- nav container --> */}
      <nav
        id="navBar"
        className={`px-6 lg:pl-16.5 lg:pr-[85px] md:border-b md:border-[#FFFFFF1A] bg-[#111827] min-h-[51px] ${
          toggleMenu ? "min-h-dvh" : "max-h-10 md:max-h-[52px] lg:max-h-[100px]"
        }`}
      >
        <div className="flex items-center justify-between md:h-[52px] lg:h-[100px] z-999 relative pt-[19px] md:pt-0 bg-[#111827] md:bg-transparent">
          <Link
            to="/"
            className="font-oswald text-[19.88px] tracking-[-0.24px] md:text-[15.54px] md:leading-[21px] md:tracking-[0.012] lg:text-[30.08px] lg:tracking-[-0.361px]"
          >
            PORTAL <span className="text-(--primary-100)">X</span>
          </Link>

          <div className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
            <img
              id="openMenu"
              src={toggleMenu ? closeMenu : menu}
              alt="menu"
              className="cursor-pointer"
            />
          </div>

          <div className="hidden md:flex gap-4.5 font-jakarta md:text-[12px] lg:text-[18px] font-medium md:tracking-[0.02px] lg:tracking-[-0.36px] items-center justify-between">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Find Events
            </NavLink>
            <NavLink
              to="/opportunities"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Find Opportunities
            </NavLink>

            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/beta"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Join Us
            </NavLink>
          </div>
        </div>

        {/* <!-- mobile dropdown nav --> */}
        <div
          id="dropdownMenu"
          className={`block md:hidden transition-transform duration-500 ease-in-out overflow-y-auto pb-[80px] navScroll absolute w-full left-0 px-6 top-0 bg-[#111827] pt-[134px] h-dvh ${
            toggleMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col text-[20px] tracking-[-0.24px] font-semibold font-jakarta gap-[23px]">
            <NavLink
              to="/"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-(--active-100)" : "text-white"
                } p-2.5 nav-link-active flex items-center justify-between`
              }
            >
              <p>Home</p>
              <img src={right} alt="" />
            </NavLink>

            <NavLink
              to="/submit-event"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-(--active-100)" : "text-white"
                } p-2.5 nav-link-active flex items-center justify-between`
              }
            >
              <p>Submit Event</p>
              <img src={right} alt="" />
            </NavLink>

            <NavLink
              to="/beta"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-(--active-100)" : "text-white"
                } p-2.5 nav-link-active flex items-center justify-between`
              }
            >
              <p>Join the Beta</p>
              <img src={right} alt="" />
            </NavLink>

            <NavLink
              to="/signin"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
              className="p-2.5 nav-link-active flex items-center justify-between"
            >
              <p>Log in</p>
              <img src={right} alt="" />
            </NavLink>

            <a
              href="https://pages.donately.com/noirlabs/campaign/launch-portal-x/donate"
              className="p-2.5 nav-link-active flex items-center justify-between"
            >
              <p>Donate</p>
              <img src={right} alt="" />
            </a>
            {/* <NavLink
              to="/login"
              className="p-2.5 nav-link-active flex items-center justify-between"
            >
              <p>Login</p>
              <img src={right} alt="" />
            </NavLink>
            <NavLink
              href="/signup"
              className="p-2.5 nav-link-active flex items-center justify-between"
            >
              <p>Sign Up</p>
              <img src={right} alt="" />
            </NavLink> */}
          </div>
        </div>
      </nav>
    </>
  );
}
