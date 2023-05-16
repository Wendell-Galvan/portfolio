import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
