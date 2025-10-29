import Nav from "./Nav";
import close from "../images/close.svg";
import { Link } from "react-router-dom";

export default function Header({ showBanner, setShowBanner }) {
  return (
    <div>
      <header className="z-50 w-full bg-(--background-color)">
        {/* <!-- banner --> */}
        {showBanner ? (
          <div
            id="banner"
            className="bg-(--primary-100) pr-6 items-center justify-center font-figtree relative hidden md:flex text-black md:h-[25px] lg:h-12 text-[10px] lg:text-[16px]"
          >
            <p className="">
              Help us by submitting your events&nbsp;
              <Link to="/submit-event" className="font-bold underline">
                Submit an event
              </Link>
            </p>

            <div
              id="closeBanner"
              className="absolute right-6 cursor-pointer h-[9.3px] w-[9.3px] lg:h-[18px] lg:w-[18px]"
              onClick={() => setShowBanner(false)}
            >
              <img src={close} alt="cancel" />
            </div>
          </div>
        ) : null}

        <Nav />
      </header>
    </div>
  );
}
