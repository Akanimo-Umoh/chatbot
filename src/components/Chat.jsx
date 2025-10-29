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


import React, { useState, useRef, useEffect } from 'react';
import { Send, Menu, X, Sparkles } from 'lucide-react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! This is a demo chatbot UI.",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">ChatBot</h1>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <button className="w-full px-4 py-3 mb-2 text-left text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              New Chat
            </button>
            <div className="mt-6">
              <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Recent Chats</h3>
              <div className="mt-2 space-y-1">
                <div className="px-3 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  Previous conversation
                </div>
                <div className="px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  Help with coding
                </div>
                <div className="px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                  Recipe ideas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center shadow-sm">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden mr-3">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-800">AI Assistant</h2>
              <p className="text-xs text-green-600">Online</p>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                <div className={`rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-2">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-end space-x-3">
            <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows="1"
                className="w-full px-4 py-3 bg-transparent text-sm text-gray-800 placeholder-gray-500 resize-none focus:outline-none"
                style={{ maxHeight: '120px' }}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
    </div>
  );
}