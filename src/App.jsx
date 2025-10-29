import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotUI from "./components/Chat";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<ChatbotUI />} /> */}
          <Route path="/" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
