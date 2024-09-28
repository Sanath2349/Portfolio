import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Common/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
