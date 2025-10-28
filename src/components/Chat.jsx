import React, { useState } from "react";
import CustomNav from "./CustomNav";
import Header from "./Header";
import backbutton from "../images/backbutton.svg";
import { Link } from "react-router-dom";
import Chats from "./Chats";
import ChatInputCtn from "./ChatInputCtn";
import SideNav from "./SideNav";
import ChatHero from "./ChatHero";

export default function Chat() {
  const [text, setText] = useState("");
  // const [loading, setLoading] = useState(true);
  
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
    { text: "Hello!", from: "bot" },
    { text: "How can I help you today?", from: "bot" },
    { text: "Hello!", from: "user" },
    { text: "How can I help you today?", from: "user" },
  ]);

  return (
    <div className="chatbg">
      <div>
        <div className="md:hidden">
          <Header />
        </div>

        {/* custom header for the chatbot */}
        <div className="hidden md:block fixed top-0 w-full z-900">
          <CustomNav />
        </div>
      </div>

      {/* main container */}
      <section className="pt-[51px] flex md:pt-[88px] overflow-hidden">
        <div className="hidden md:flex bg-[#1E293B] w-[248px]">
          <SideNav />
        </div>

        <div className="w-full max-h-[calc(100dvh-51px)] min-h-[calc(100dvh-51px)] md:max-h-[calc(100dvh-88px)] md:min-h-[calc(100dvh-88px)] md:flex-1">
          <div className="flex flex-1 flex-col w-full h-full border border-green-400">
            <div className="flex pl-[22.54px] pr-[27px] items-center justify-between h-[60px] md:hidden">
              <div className="cursor-pointer">
                <img src={backbutton} alt="" />
              </div>

              <Link to="/explore">
                <p className="font-figtree font-medium text-[13px] text-(--gray-500)">
                  Skip for Now
                </p>
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-start py-[17px] pl-[25px]">
              <p className="text-[20px] font-medium leading-10 font-jakarta">
                Roadmap Journey
              </p>
            </div>

            {messages.length === 0 && (
              <div className="hidden md:flex items-center justify-center">
                <ChatHero />
              </div>
            )}

            {/* ctn */}
            <div className="flex-1 flex flex-col justify-end overflow-hidden md:px-[65px] md:items-center">
              {/* {loading && (
                <p className="text-gray-400 text-center">Loading...</p>
              )} */}
              <div className="flex flex-col justify-end overflow-hidden bg-[#141B27] min-h-0 md:max-w-[715px] md:pb-[26px] md:bg-transparent w-full">
                {/* message container */}
                {messages.length > 0 && (
                  <div className="flex-1 flex flex-col min-h-0 overflow-hidden justify-end">
                    <Chats messages={messages} />
                  </div>
                )}

                {/* input container */}
                <div className="">
                  <ChatInputCtn
                    // handleSubmit={handleSubmit}
                    text={text}
                    setText={setText}
                  />
                </div>

                {messages.length === 0 && (
                  <div className="hidden md:flex items-center justify-center w-full text-center">
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
