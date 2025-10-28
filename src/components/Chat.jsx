import React, { useEffect, useState } from "react";
import CustomNav from "../xcomponents/CustomNav";
import Header from "../layout/Header";
import backbutton from "../../images/backbutton.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Chats from "../xcomponents/Chats";
import {
  createSession,
  getSessionMessages,
  getSessions,
  sendMessage,
} from "../../services/chat";
import ChatInputCtn from "../xcomponents/ChatInputCtn";
import SideNav from "../xcomponents/SideNav";
import ChatHero from "../xcomponents/ChatHero";
import { ChatWebSocket } from "../../services/chatSocket";
import { useAuth } from "../../hooks/useAuth";

export default function Chat() {
  const [sessionId, setSessionId] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // grab user token
  const { token } = useAuth();

  // determine session_type from state, localstorage or default
  const sessionType =
    location.state?.sessionType ||
    localStorage.getItem("sessionType") ||
    "general";

  // save to localStorage (so it persists after refresh)
  useEffect(() => {
    if (sessionType) localStorage.setItem("sessionType", sessionType);
    // console.log(`🧠 Active chatbot session type: ${sessionType}`);
  }, [sessionType]);

  // const [messages, setMessages] = useState([
  //   // { text: "Hello!", from: "bot" },
  //   // { text: "How can I help you today?", from: "bot" },
  // ]);

  // Step 1: fetch or create a session
  useEffect(() => {
    const fetchOrCreateSession = async () => {
      try {
        // Check if user already has a session
        const res = await getSessions({ type: sessionType });
        const existingSession = res.data.results?.[0];

        if (existingSession) {
          setSessionId(existingSession.id);
          // console.log("Using existing session:", existingSession.id);
        } else {
          const sessionTitleMap = {
            general: "General Conversation",
            purpose_discovery: "Life Purpose Exploration",
            brainstorming: "Creative Idea Generation",
            analysis: "Problem Analysis",
            education: "Learning and Study",
            career: "Career Guidance",
          };

          // Create a new session if none exists
          const createRes = await createSession({
            title: sessionTitleMap[sessionType] || "General Conversation",
            session_type: sessionType || "general",
          });
          setSessionId(createRes.data.id);
          // console.log("Created new session:", createRes.data.id);
        }
      } catch (error) {
        console.error("Error fetching/creating session:", error);
      }
    };

    fetchOrCreateSession();
  }, [sessionType]);

  // Step 2: Once sessionId is ready, fetch messages
  useEffect(() => {
    if (!sessionId) return;

    const fetchMessages = async () => {
      setLoading(true);

      try {
        const { data } = await getSessionMessages(sessionId);
        // console.log("Session data:", data);
        // map API response to your UI format
        if (Array.isArray(data.messages)) {
          // map backend messages to UI-friendly format
          setMessages(
            data.messages.map((m) => ({
              id: m.id,
              text: m.content,
              from: m.role === "user" ? "user" : "bot",
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [sessionId]);

  // Step 3: Connect WebSocket (ONLY when session + token ready)
  useEffect(() => {
    if (!sessionId || !token) return;

    const ws = new ChatWebSocket(sessionId, token, (data) => {
      // console.log("WebSocket message:", data);

      if (data.type === "chat_message") {
        setMessages((prev) => [
          ...prev,
          {
            text: data.message.content,
            from: data.message.role === "user" ? "user" : "bot",
            id: data.message.id,
          },
        ]);
      }
    });

    return () => ws.close(); // Cleanup on unmount
  }, [sessionId, token]);

  // Step 4: Handle message sending (REST fallback)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = text.trim();
    if (!content || !sessionId) return;

    // add user message
    setMessages((prev) => [...prev, { text: content, from: "user" }]);
    setText("");

    try {
      const response = await sendMessage(sessionId, content);

      const aiReply = response.data?.ai_message?.content;
      if (aiReply) {
        setMessages((prev) => [...prev, { text: aiReply, from: "bot" }]);
      }
    } catch (error) {
      console.error("Send message failed:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Something went wrong. Try again.", from: "bot" },
      ]);
    }
  };

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
      <section className="pt-[51px] flex md:pt-[88px]">
        <div className="hidden md:flex bg-[#1E293B] w-[248px]">
          <SideNav />
        </div>

        <div className="w-full max-h-[calc(100vh-51px)] min-h-[calc(100vh-51px)] md:max-h-[calc(100vh-88px)] md:min-h-[calc(100vh-88px)] md:flex-1">
          <div className="flex flex-1 flex-col w-full h-full min-h-0">
            <div className="flex pl-[22.54px] pr-[27px] items-center justify-between h-[60px] md:hidden">
              <div onClick={() => navigate(-1)} className="cursor-pointer">
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
              {loading && (
                <p className="text-gray-400 text-center">Loading...</p>
              )}
              <div className="flex flex-col justify-end overflow-hidden bg-[#141B27] min-h-0 md:max-w-[715px] md:pb-[26px] md:bg-transparent">
                {/* message container */}
                {messages.length > 0 && (
                  <div className="flex-1 flex flex-col min-h-0 overflow-hidden justify-end">
                    <Chats messages={messages} />
                  </div>
                )}

                {/* input container */}
                <div className="">
                  <ChatInputCtn
                    handleSubmit={handleSubmit}
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
