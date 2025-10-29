// import React, { useEffect, useState } from "react";
// import CustomNav from "./CustomNav";
// import Header from "./Header";
// import backbutton from "../images/backbutton.svg";
// import { Link } from "react-router-dom";
// import Chats from "./Chats";
// import ChatInputCtn from "./ChatInputCtn";
// import SideNav from "./SideNav";
// import ChatHero from "./ChatHero";
// import Nav from "./Nav";

// export default function Chat() {
//   const [text, setText] = useState("");
//   // const [loading, setLoading] = useState(true);

//   const [messages, setMessages] = useState([
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//     { text: "Hello!", from: "bot" },
//     { text: "How can I help you today?", from: "bot" },
//     { text: "Hello!", from: "user" },
//     { text: "How can I help you today?", from: "user" },
//   ]);

//   const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     // Set initial viewport height
//     setViewportHeight(window.innerHeight);

//     // Prevent viewport resize on keyboard open
//     const metaViewport = document.querySelector('meta[name="viewport"]');
//     if (metaViewport) {
//       metaViewport.setAttribute(
//         "content",
//         "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover"
//       );
//     }

//     return () => {
//       if (metaViewport) {
//         metaViewport.setAttribute(
//           "content",
//           "width=device-width, initial-scale=1, viewport-fit=cover"
//         );
//       }
//     };
//   }, []);

//   return (
//     <div
//       className="chatbg overflow-hidden md:max-h-[calc(100dvh-88px)] md:min-h-[calc(100dvh-88px)]"
//       style={{
//         height: window.innerWidth < 768 ? `${viewportHeight}px` : "100dvh",
//       }}
//     >
//       <div>
//         <div className="md:hidden fixed top-0 left-0 z-50 w-full">
//           <Nav />
//         </div>

//         {/* custom header for the chatbot */}
//         <div className="hidden md:block fixed top-0 w-full z-900">
//           <CustomNav />
//         </div>
//       </div>

//       {/* main container */}
//       <section className="flex h-full pt-[51px]">
//         <div className="hidden md:flex bg-[#1E293B] w-[248px]">
//           <SideNav />
//         </div>

//         <div className="w-full md:flex-1 flex flex-col h-full overflow-hidden">
//           <div className="flex flex-1 flex-col w-full h-full min-h-0 overflow-hidden">
//             <div className="flex pl-[22.54px] pr-[27px] items-center justify-between h-[60px] md:hidden shrink-0">
//               <div className="cursor-pointer">
//                 <img src={backbutton} alt="" />
//               </div>

//               <Link to="/explore">
//                 <p className="font-figtree font-medium text-[13px] text-(--gray-500)">
//                   Skip for Now
//                 </p>
//               </Link>
//             </div>

//             <div className="hidden md:flex items-center justify-start py-[17px] pl-[25px] shrink-0">
//               <p className="text-[20px] font-medium leading-10 font-jakarta">
//                 Roadmap Journey
//               </p>
//             </div>

//             {messages.length === 0 && (
//               <div className="hidden md:flex items-center justify-center">
//                 <ChatHero />
//               </div>
//             )}

//             {/* ctn */}
//             <div className="flex-1 flex flex-col justify-end overflow-hidden md:px-[65px] md:items-center min-h-0">
//               <div className="flex flex-col justify-end overflow-hidden bg-[#141B27] min-h-0 md:max-w-[715px] md:pb-[26px] md:bg-transparent w-full">
//                 {/* message container */}
//                 {messages.length > 0 && (
//                   <div className="flex-1 flex flex-col min-h-0 overflow-hidden justify-end">
//                     <Chats messages={messages} />
//                   </div>
//                 )}

//                 {/* input container */}
//                 <div className="w-full shrink-0 fixed bottom-0 border">
//                   <ChatInputCtn
//                     // handleSubmit={handleSubmit}
//                     text={text}
//                     setText={setText}
//                   />
//                 </div>

//                 {messages.length === 0 && (
//                   <div className="hidden md:flex items-center justify-center w-full text-center shrink-0">
//                     <p>
//                       Please be assured that your responses and information are
//                       all safe with us
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// ChatUI.jsx
// Mobile-first Chat UI inspired by ChatGPT's interface.
// React + Tailwind single-file component (default export).
// How to use:
// 1. Ensure Tailwind CSS is configured in your app.
// 2. Place this file in your components folder and import <ChatUI /> into a page.
// 3. Hook sendMessageToApi(message) to your chat backend (OpenAI or any websocket).
// 4. This UI is purely client-side and does NOT send messages anywhere by default.

import React, { useEffect, useRef, useState } from "react";

export default function Chat({
  onSend /* optional: async (text) => response */,
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hello! I’m your assistant. Ask me anything.",
      time: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => scrollToBottom(), [messages]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }

  function addMessage(role, text) {
    setMessages((m) => [
      ...m,
      {
        id: Date.now() + Math.random(),
        role,
        text,
        time: new Date().toISOString(),
      },
    ]);
  }

  async function handleSend(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    addMessage("user", text);

    // Start sending state
    setIsSending(true);

    try {
      if (onSend) {
        // Allow parent to handle network call and return assistant reply
        const reply = await onSend(text);
        if (reply) addMessage("assistant", String(reply));
      } else {
        // Placeholder simulated response (replace this with real API call)
        await new Promise((r) => setTimeout(r, 700));
        addMessage("assistant", `You said: ${text}`);
      }
    } catch (err) {
      addMessage("assistant", "Error: could not fetch response. See console.");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  }

  // Press Enter to send, Shift+Enter for newline
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Small helper: message bubble styles
  function bubbleClasses(role) {
    return role === "user"
      ? "self-end bg-white/90 dark:bg-white/10 text-black dark:text-white shadow-sm rounded-2xl rounded-br-sm max-w-[85%]"
      : "self-start bg-slate-100/80 dark:bg-slate-800/60 text-black dark:text-white rounded-2xl rounded-bl-sm max-w-[85%]";
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-900">
      {/* Top bar */}
      <header className="flex items-center justify-between px-3 py-3 border-b border-slate-200 dark:border-slate-800 bg-opacity-70 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-md hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
            onClick={() => setShowSidebar((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18M3 12h18M3 18h18"
              />
            </svg>
          </button>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm">Chat</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Mobile-first • Responsive
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="hidden sm:inline-flex px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 text-sm"
            onClick={() => {
              addMessage(
                "assistant",
                "Quick tip: connect `onSend` prop to your API to make this live."
              );
            }}
          >
            Tips
          </button>

          <div className="flex items-center gap-2">
            <button
              className="p-2 rounded-md hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              aria-label="New chat"
              onClick={() => setMessages([])}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16M4 12h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex">
        {/* Sidebar (slide over on mobile) */}
        <aside
          className={`absolute top-16 left-0 z-30 h-[calc(100%-64px)] w-72 transform transition-transform duration-200 bg-white/70 dark:bg-slate-900/80 border-r border-slate-200 dark:border-slate-800 backdrop-blur-lg ${
            showSidebar ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }`}
        >
          <div className="p-4">
            <h3 className="text-sm font-semibold mb-3">Chats</h3>
            <div className="flex flex-col gap-2">
              <button
                className="text-left p-2 rounded-md hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                onClick={() => {
                  setMessages([
                    {
                      id: Date.now(),
                      role: "assistant",
                      text: "Hello — new chat started!",
                      time: new Date().toISOString(),
                    },
                  ]);
                  setShowSidebar(false);
                }}
              >
                + Start new chat
              </button>
              <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                Conversations saved locally in this session.
              </div>
            </div>
          </div>
        </aside>

        {/* Chat pane */}
        <section className="flex-1 flex flex-col p-3 sm:p-6">
          <div className="flex-1 overflow-auto pb-6">
            <div className="flex flex-col gap-3">
              {messages.length === 0 && (
                <div className="mt-6 text-center text-slate-500">
                  No messages yet — say hi 👋
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className={`p-3 ${bubbleClasses(m.role)} break-words`}>
                    <div className="whitespace-pre-wrap text-sm">{m.text}</div>
                    <div className="mt-1 text-[10px] opacity-60 text-slate-500 text-right">
                      {new Date(m.time).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isSending && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs">
                    AI
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-2xl">
                    <div className="flex items-end gap-1">
                      <div className="animate-bounce h-2 w-2 rounded-full bg-slate-600 dark:bg-white"></div>
                      <div className="animate-bounce delay-75 h-2 w-2 rounded-full bg-slate-600 dark:bg-white"></div>
                      <div className="animate-bounce delay-150 h-2 w-2 rounded-full bg-slate-600 dark:bg-white"></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <form onSubmit={handleSend} className="mt-2">
            <div className="flex items-end gap-2">
              <div className="flex-1 bg-transparent">
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Write a message... (Enter to send, Shift+Enter for newline)"
                  rows={1}
                  className="w-full resize-none min-h-[44px] max-h-48 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // Example quick action: insert prompt
                    setInput((v) =>
                      v
                        ? v + "\n"
                        : "Write a short list of 3 improvements for my website"
                    );
                    textareaRef.current?.focus();
                  }}
                  className="hidden sm:inline-flex px-3 py-2 border rounded-md text-sm"
                >
                  Prompt
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black shadow hover:opacity-95 disabled:opacity-50"
                >
                  {isSending ? (
                    <svg
                      className="w-4 h-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="2"
                        strokeOpacity="0.2"
                      ></circle>
                      <path
                        d="M22 12a10 10 0 00-10-10"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 2L11 13"
                      />
                      <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 2l-7 20-4-9-9-4 20-7z"
                      />
                    </svg>
                  )}
                  <span className="hidden sm:inline">Send</span>
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      {/* Footer small */}
      <footer className="text-center text-xs text-slate-400 p-2">
        Built with ❤️ • Mobile-first chat UI
      </footer>
    </div>
  );
}
