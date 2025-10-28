import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
