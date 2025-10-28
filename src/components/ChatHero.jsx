import React from "react";
import power from "../../images/power.png";

export default function ChatHero() {
  return (
    <div className="flex flex-col gap-[14px] items-center justify-center">
      <img
        src={power}
        alt=""
        className="w-[75.477px] h-[75.477px] rounded-full"
      />

      <div className="flex flex-col gap-2.5 items-center justify-center">
        <p className="text-[40px] font-jakarta font-semibold leading-[49px] tracking-[-0.4px]">
          Discover Your Superpower
        </p>
        <p className="w-[381px] text-[16px] font-figtree text-[#BFD0DD] tracking-[-0.24px] leading-6 text-center">
          Let’s have a quick chat to uncover your unique strengths and
          potential.
        </p>
      </div>
    </div>
  );
}
