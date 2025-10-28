import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chats({ messages }) {
  const endRef = useRef(null);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function formatMarkdownText(text) {
    if (!text) return "";
    return (
      text
        // Ensure double newlines before numbered items
        .replace(/(\d+)\.\s+/g, "\n\n$1. ")
        // Ensure newlines before dashes (list items)
        .replace(/-\s+/g, "\n- ")
        // Fix spacing after periods
        .replace(/([a-z])\.\s([A-Z])/g, "$1.\n$2")
    );
  }

  return (
    <>
      {/* main message container */}
      <div className="max-h-full w-full bg-[#141B27] rounded-t-[25px] flex flex-col border-t border-white md:bg-transparent md:border-none">
        {/* white dash */}
        <div className="w-[50px] border-2 border-white flex mt-[11px] mb-[27px] mx-auto md:hidden"></div>

        {/* messages */}
        <div className="overflow-y-auto flex-1 justify-end min-h-0 px-2 pb-7 pt-2.5 customScroll">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-4 md:mb-[27px] w-full px-1 ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
              onClick={() => console.log("Clicked message ID:", msg.id)}
            >
              <div
                className={`relative max-w-[75%] px-3 py-[7px] text-[12px] leading-[15px] font-normal font-figtree tracking-[-0.15px] md:text-[15.659px] md:tracking-[-0.196px] md:leading-[19.574px] ${
                  msg.from === "user"
                    ? "bg-[#E3E3E3] text-black rounded-[16px]"
                    : "bg-(--primary-800) text-white rounded-[16px]"
                }`}
                style={{
                  wordWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {/* message text */}
                {msg.from === "user" ? (
                  msg.text
                ) : (
                  <div className="prose prose-sm text-white max-w-full wrap-break-word">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {formatMarkdownText(msg.text)}
                    </ReactMarkdown>
                  </div>
                )}
                {/* iMessage tail/pointer */}
                {msg.from === "user" ? (
                  <div className="absolute bottom-0 -right-1  border-t-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M12 10.5C12.5014 13.5086 15.3333 16.3333 17 17C10.6 17 6.5 14.8333 5.5 13.5L0.5 15L1 0H11.5V2V4V4.5C11.5 5.5 11.5 7.5 12 10.5Z"
                        fill="#E3E3E3"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="absolute bottom-0 -left-1 border-t-transparent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M5 10.5C4.49857 13.5086 1.66667 16.3333 0 17C6.4 17 10.5 14.8333 11.5 13.5L16.5 15L16 0H5.5V2V4V4.5C5.5 5.5 5.5 7.5 5 10.5Z"
                        fill="#1E293B"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div ref={endRef} />
        </div>
      </div>
    </>
  );
}
