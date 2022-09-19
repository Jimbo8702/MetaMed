import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signin";
import Login from "./Pages/Options";
import Main from "./Pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
