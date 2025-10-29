import React, { useEffect, useRef } from "react";
import send from "../images/send.svg";
import attach from "../images/attach.svg";
import clip from "../images/clip.svg";
import record from "../images/record.svg";
import sendMsg from "../images/sendMsg.svg";

export default function ChatInputCtn({ handleSubmit, text, setText }) {
  const inputRef = useRef(null);

  // handles Enter to submit (and Shift+Enter to add new line)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.target.form.requestSubmit();
    }
  };

  // auto resize textarea
  useEffect(() => {
    const textarea = inputRef.current;
    if (textarea) {
      // reset height to auto to get the correct scrollHeight
      textarea.style.height = "auto";
      // set height to scrollHeight to fit content
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <>
      <div
        className="px-[23.5px] py-[31.09px] bg-[#101625] rounded-t-[25px] border-t border-t-white w-full min-h-[93px] md:relative md:h-[81px] md:rounded-full md:bg-white md:text-black md:p-0 md:mx-auto md:border-none md-m-0"
      >
        <form
          onSubmit={handleSubmit}
          className="flex items-end justify-between gap-2.5 h-full md:h-full md:items-center md:justify-between md:gap-4 md:px-[23px] chatbox"
        >
          <div className="flex-1 md:flex md:items-center">
            <div className="hidden md:block">
              <img src={clip} alt="attach files" />
            </div>

            <div className="md:flex md:flex-1">
              <textarea
                ref={inputRef}
                placeholder="Ask me something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                className="text-[12.5px] leading-[18.75px] tracking-[-0.25px] font-jakarta font-medium w-full outline-none resize-none bg-transparent transition-all duration-200 md:tracking-[-0.112px] md:leading-[22px] md:text-[16px] md:text-[#1E293B] customScroll"
                style={{
                  minHeight: "20px",
                  maxHeight: "70px",
                }}
                rows={1}
              />
            </div>
          </div>

          {/* sm screens icon */}
          <div className="flex items-center justify-center gap-5 md:hidden">
            <div>
              <img src={attach} alt="attach files" />
            </div>

            <button
              type="submit"
              className="p-[7.007px] bg-[#4C6080] flex rounded-[7.007px] items-center justify-center cursor-pointer"
            >
              <img src={send} alt="send" />
            </button>
          </div>

          {/* lg screens icon */}
          <div className="hidden md:flex">
            <div className="">
              <img src={record} alt="voice note" />
            </div>

            <button className="">
              <img src={sendMsg} alt="send" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
