import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MainBars from "./MainBars";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-light w-full min-h-screen dark:bg-dark ">
      <Router>
        <Routes>
          <Route path="/" element={<MainBars />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
