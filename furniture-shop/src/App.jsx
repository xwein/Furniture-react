import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, UpperFooter, LowerFooter } from "./components";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <UpperFooter />
      <LowerFooter />
    </Router>
  );
}

export default App;
