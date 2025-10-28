import { useState } from "react";
import menu from "../../images/menu.svg";
import closeMenu from "../../images/closeMenu.svg";
import right from "../../images/right.svg";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

export default function CustomNav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useAuth();
  const logout = useLogout();

  const handleLogout = (e) => {
    e.preventDefault();

    if (toggleMenu) setToggleMenu(false); // only close if it's open
    logout();
  };

  if (toggleMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {/* <!-- nav container --> */}
      <nav className="sm:border-b sm:border-[#FFFFFF1A] bg-[#1E293B]">
        <div className="flex items-center justify-between sm:h-[51px] md:h-[88px] z-999 relative pt-[19px] sm:pt-0 bg-[#1E293B] px-6 md:pl-5 md:pr-[27px]">
          <Link
            to="/"
            className="font-oswald text-[19.88px] tracking-[-0.24px] sm:text-[15.54px] sm:leading-[21px] sm:tracking-[0.012] md:text-[30.08px] md:tracking-[-0.361px]"
          >
            PORTAL <span className="text-(--primary-100)">X</span>
          </Link>

          <div className="sm:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
            <img
              id="openMenu"
              src={toggleMenu ? closeMenu : menu}
              alt="menu"
              className="cursor-pointer"
            />
          </div>

          <div className="hidden sm:flex gap-4.5 font-jakarta sm:text-[12px] md:text-[18px] font-medium sm:tracking-[0.02px] md:tracking-[-0.36px] items-center justify-between">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/submit-event"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Submit an Event
            </NavLink>
            <NavLink
              to="/beta"
              className={({ isActive }) =>
                `${isActive ? "text-(--active-100)" : "text-white"} p-[5.17px]`
              }
            >
              Join the Beta
            </NavLink>
            <a
              target="_blank"
              href="https://pages.donately.com/noirlabs/campaign/launch-portal-x/donate"
              className="p-[5.17px] underline nav-link-active"
            >
              Donate
            </a>
          </div>
        </div>

        {/* <!-- mobile dropdown nav --> */}
        <div
          id="dropdownMenu"
          className={`block sm:hidden transition-transform duration-500 ease-in-out overflow-y-auto pb-20 navScroll absolute w-full left-0 px-6 top-0 bg-[#111827] pt-[134px] h-dvh ${
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
              to="/chat-bot"
              onClick={() => setToggleMenu(!toggleMenu)}
              className={({ isActive }) =>
                `${
                  isActive ? "text-(--active-100)" : "text-white"
                } p-2.5 nav-link-active flex items-center justify-between`
              }
            >
              <p>Master yourself</p>
              <img src={right} alt="" />
            </NavLink>

            {user ? (
              <button
                onClick={handleLogout}
                className="p-2.5 flex items-center justify-between cursor-pointer"
              >
                <p>Log out</p>
                <img src={right} alt="" />
              </button>
            ) : (
              ""
            )}

            <a
              href="https://pages.donately.com/noirlabs/campaign/launch-portal-x/donate"
              className="p-2.5 nav-link-active flex items-center justify-between"
              target="_blank"
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
