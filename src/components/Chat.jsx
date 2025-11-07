import React, { useEffect, useState, useRef } from "react";
import CustomNav from "./CustomNav";
import Header from "./Header";
import backbutton from "../images/backbutton.svg";
import { Link } from "react-router-dom";
import Chats from "./Chats";
import ChatInputCtn from "./ChatInputCtn";
import SideNav from "./SideNav";
import ChatHero from "./ChatHero";
import Nav from "./Nav";

export default function Chat() {
  const [text, setText] = useState("");
  const inputContainerRef = useRef(null);

  const [messages, setMessages] = useState([
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
  ]);

  // Handle mobile keyboard appearing
  useEffect(() => {
    let timeoutId;

    const handleViewportResize = () => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (inputContainerRef.current) {
          inputContainerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
          });
        }
      }, 100);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportResize);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          handleViewportResize
        );
      }
    };
  }, []);

  return (
    <div className="chatbg h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col">
      {/* Navigation - Fixed height, not part of flex */}
      <div className="shrink-0">
        <div className="md:hidden z-50 w-full">
          <Nav />
        </div>

        <div className="hidden md:block fixed top-0 w-full z-900">
          <CustomNav />
        </div>
      </div>

      {/* Main container - Takes remaining space */}
      <section className="flex flex-1 min-h-0 md:pt-[88px]">
        {/* Side nav */}
        <div className="hidden md:flex bg-[#1E293B] w-[248px] shrink-0">
          <SideNav />
        </div>

        {/* Main chat area */}
        <div className="w-full md:flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="flex flex-1 flex-col w-full min-h-0 overflow-hidden">
            {/* Mobile header - Fixed height */}
            <div className="flex pl-[22.54px] pr-[27px] items-center justify-between h-[60px] md:hidden shrink-0">
              <div className="cursor-pointer">
                <img src={backbutton} alt="" />
              </div>

              <Link to="/explore">
                <p className="font-figtree font-medium text-[13px] text-(--gray-500)">
                  Skip for Now
                </p>
              </Link>
            </div>

            {/* Desktop header - Fixed height */}
            <div className="hidden md:flex items-center justify-start py-[17px] pl-[25px] shrink-0">
              <p className="text-[20px] font-medium leading-10 font-jakarta">
                Roadmap Journey
              </p>
            </div>

            {/* Empty state hero */}
            {messages.length === 0 && (
              <div className="hidden md:flex items-center justify-center flex-1">
                <ChatHero />
              </div>
            )}

            {/* Chat content area - Takes remaining space */}
            <div className="flex-1 flex flex-col justify-end overflow-hidden md:px-[65px] md:items-center min-h-0">
              <div className="flex flex-col justify-end h-full bg-[#141B27] min-h-0 md:max-w-[715px] md:bg-transparent w-full overflow-hidden">
                {/* Messages - Scrollable area */}
                {messages.length > 0 && (
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <Chats messages={messages} />
                  </div>
                )}

                {/* Input container - Fixed at bottom */}
                <div
                  ref={inputContainerRef}
                  className="shrink-0"
                  style={{
                    paddingBottom: "env(safe-area-inset-bottom, 0px)",
                  }}
                >
                  <ChatInputCtn text={text} setText={setText} />
                </div>

                {/* Empty state message */}
                {messages.length === 0 && (
                  <div className="hidden md:flex items-center justify-center w-full text-center shrink-0 pb-4">
                    <p>
                      Please be assured that your responses and information are
                      all safe with us
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
