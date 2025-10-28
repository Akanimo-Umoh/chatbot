import React from "react";
import cal from "../images/cal.svg";
import opps from "../images/opps.svg";
import bot from "../images/bot.svg";
import help from "../images/help.svg";
import logoutIcon from "../images/logout.svg";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="p-[19px] font-jakarta flex flex-col justify-between h-full w-full">
      <div className="space-y-2">
        <NavLink to="/events" className="flex items-center gap-3 p-4">
          <img src={cal} alt="" />
          <p className="text-[16px] leading-5">Live Event</p>
        </NavLink>

        <NavLink to="/events" className="flex items-center gap-3 p-4">
          <img src={opps} alt="" />
          <p className="text-[16px] leading-5">Opportunities</p>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-(--primary-100) text-[#1E293B] font-medium"
                : "text-white"
            } flex items-center gap-3 p-4 rounded-lg`
          }
        >
          <img src={bot} alt="" />
          <p className="text-[16px] leading-5">Chat Bot</p>
        </NavLink>
      </div>

      <div className="space-y-2">
        <NavLink to="/" className="flex items-center gap-3 p-4">
          <img src={help} alt="" />
          <p className="text-[16px] leading-5">Help</p>
        </NavLink>

        <button className="flex items-center gap-3 p-4 w-full cursor-pointer">
          <img src={logoutIcon} alt="" />
          <p className="text-[16px] leading-5">Logout</p>
        </button>
      </div>
    </div>
  );
}
