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

//   return (
//     <div className="chatbg overflow-hidden min-h-dvh max-h-dvh md:max-h-dvh md:min-h-dvh">
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
//       <section className="flex h-full pt-[51px] md:pt-[88px]">
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
//                 <div className="w-full shrink-0">
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

// import React, { useState, useRef, useEffect } from "react";
// import { Send, Menu, X, Sparkles } from "lucide-react";

// export default function ChatbotUI() {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! I'm your AI assistant. How can I help you today?",
//       sender: "bot",
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     // Prevent body scroll and handle mobile viewport
//     const preventScroll = (e) => {
//       if (
//         !e.target.closest("textarea") &&
//         !e.target.closest("[data-scrollable]")
//       ) {
//         e.preventDefault();
//       }
//     };

//     document.body.style.overflow = "hidden";
//     document.body.style.position = "fixed";
//     document.body.style.width = "100%";
//     document.body.style.height = "100dvh";
//     document.body.style.top = "0";

//     // Prevent pull-to-refresh and overscroll
//     document.addEventListener("touchmove", preventScroll, { passive: false });

//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.position = "";
//       document.body.style.width = "";
//       document.body.style.height = "";
//       document.body.style.top = "";
//       document.removeEventListener("touchmove", preventScroll);
//     };
//   }, []);

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       const newMessage = {
//         id: messages.length + 1,
//         text: inputValue,
//         sender: "user",
//         timestamp: new Date(),
//       };
//       setMessages([...messages, newMessage]);
//       setInputValue("");

//       // Simulate bot response
//       setTimeout(() => {
//         const botResponse = {
//           id: messages.length + 2,
//           text: "Thanks for your message! This is a demo chatbot UI.",
//           sender: "bot",
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, botResponse]);
//       }, 1000);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 flex bg-gray-50"
//       style={{ height: "100dvh", touchAction: "none" }}
//     >
//       {/* Sidebar */}
//       <div
//         className={`${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}
//         style={{ height: "100dvh" }}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
//             <div className="flex items-center space-x-2">
//               <Sparkles className="w-6 h-6 text-indigo-600" />
//               <h1 className="text-xl font-bold text-gray-800">ChatBot</h1>
//             </div>
//             <button
//               onClick={() => setIsSidebarOpen(false)}
//               className="lg:hidden"
//             >
//               <X className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>
//           <div
//             className="flex-1 overflow-y-auto p-4"
//             data-scrollable
//             style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
//           >
//             <button className="w-full px-4 py-3 mb-2 text-left text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
//               New Chat
//             </button>
//             <div className="mt-6">
//               <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                 Recent Chats
//               </h3>
//               <div className="mt-2 space-y-1">
//                 <div className="px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
//                   Previous conversation
//                 </div>
//                 <div className="px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
//                   Help with coding
//                 </div>
//                 <div className="px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
//                   Recipe ideas
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm flex-shrink-0">
//           <button
//             onClick={() => setIsSidebarOpen(true)}
//             className="lg:hidden mr-3"
//           >
//             <Menu className="w-6 h-6 text-gray-600" />
//           </button>
//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
//               <Sparkles className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <h2 className="text-sm font-semibold text-gray-800">
//                 AI Assistant
//               </h2>
//               <p className="text-xs text-green-600">Online</p>
//             </div>
//           </div>
//         </div>

//         {/* Messages Area */}
//         <div
//           className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
//           data-scrollable
//           style={{
//             WebkitOverflowScrolling: "touch",
//             touchAction: "pan-y",
//             overscrollBehavior: "contain",
//           }}
//         >
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex ${
//                 message.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl ${
//                   message.sender === "user" ? "order-2" : "order-1"
//                 }`}
//               >
//                 <div
//                   className={`rounded-2xl px-4 py-3 ${
//                     message.sender === "user"
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-gray-800 border border-gray-200"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed">{message.text}</p>
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1 px-2">
//                   {message.timestamp.toLocaleTimeString([], {
//                     hour: "2-digit",
//                     minute: "2-digit",
//                   })}
//                 </p>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Area */}
//         <div
//           className="bg-white border-t border-gray-200 px-4 py-4 flex-shrink-0"
//           style={{ touchAction: "none" }}
//         >
//           <div className="max-w-4xl mx-auto flex items-end space-x-3">
//             <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all">
//               <textarea
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 rows="1"
//                 className="w-full px-4 py-3 bg-transparent text-sm text-gray-800 placeholder-gray-500 resize-none focus:outline-none"
//                 style={{ maxHeight: "120px", touchAction: "manipulation" }}
//               />
//             </div>
//             <button
//               onClick={handleSend}
//               disabled={!inputValue.trim()}
//               className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for mobile sidebar */}
//       {isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//         />
//       )}
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";

// export default function Chat() {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "bot", text: "Hi 👋, how can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const chatEndRef = useRef(null);

//   const handleSend = () => {
//     if (!input.trim()) return;
//     const userMsg = { id: Date.now(), sender: "user", text: input };
//     setMessages((prev) => [...prev, userMsg]);
//     setInput("");

//     // Simulate bot reply
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { id: Date.now() + 1, sender: "bot", text: "Got it! 👍" },
//       ]);
//     }, 600);
//   };

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-[100dvh] bg-gray-50">
//       {/* Header */}
//       <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
//         <h1 className="font-semibold text-lg">Chatbot</h1>
//       </header>

//       {/* Chat Area */}
//       <main className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${
//                 msg.sender === "user"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-900"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={chatEndRef} />
//       </main>

//       {/* Input Bar */}
//       <footer
//         className="
//           fixed bottom-0 left-0 right-0 
//           bg-white border-t border-gray-200 
//           px-3 py-[env(safe-area-inset-bottom,0.75rem)] 
//           flex items-center gap-2
//         "
//         style={{
//           // ensures input stays visible above keyboard on mobile
//           paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)",
//         }}
//       >
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type a message..."
//           className="
//             flex-1 border border-gray-300 rounded-full 
//             px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500
//           "
//         />
//         <button
//           onClick={handleSend}
//           className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm active:scale-95"
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm your assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle keyboard on mobile
  useEffect(() => {
    const handleResize = () => {
      if (inputRef.current) {
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    window.visualViewport?.addEventListener('resize', handleResize);
    
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(input),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! Nice to meet you. What would you like to talk about?";
    } else if (input.includes('how are you')) {
      return "I'm doing great, thank you for asking! How can I assist you today?";
    } else if (input.includes('help')) {
      return "I'm here to help! You can ask me questions or just chat with me.";
    } else if (input.includes('bye')) {
      return "Goodbye! Have a wonderful day!";
    } else {
      return "That's interesting! Tell me more about that.";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-md px-4 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">AI Assistant</h1>
          <p className="text-xs text-gray-500">Always here to help</p>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'bot' && (
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            <div
              className={`max-w-xs sm:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-2 justify-start">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div ref={inputRef} className="bg-white border-t border-gray-200 px-4 py-3 safe-area-bottom">
        <div className="flex gap-2 items-end max-w-4xl mx-auto">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows="1"
            className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm"
            style={{ maxHeight: '100px' }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}