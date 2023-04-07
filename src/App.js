import './App.css';
import { Routes, Route } from "react-router-dom";
import logo from './images/logo.png'
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>

  );
}

export default App;
