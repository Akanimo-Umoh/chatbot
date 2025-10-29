import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatbotUI from "./components/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChatbotUI />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
