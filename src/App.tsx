import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import MainBars from "./MainBars";
import Contact from "./pages/Contact";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/startServer")
      .then((res: any) => res.json())
      .then((res: any) => console.log(res))
      .catch((e) => console.log(e));

    fetch("https://marine-rental-api.onrender.com/startServer")
      .then((res: any) => res.json())
      .then((res: any) => console.log(res))
      .catch((e) => console.log(e));

    fetch("https://your-exp-api.onrender.com/startServer")
      .then((res: any) => res.json())
      .then((res: any) => console.log(res))
      .catch((e) => console.log(e));

   const serverReseting = setInterval(() => {
      
    console.log('interval is working');
    
    fetch("http://localhost:3001/startServer")
        .then((res: any) => res.json())
        .then((res: any) => console.log(res))
        .catch((e) => console.log(e));
      fetch("https://marine-rental-api.onrender.com/startServer")
        .then((res: any) => res.json())
        .then((res: any) => console.log(res))
        .catch((e) => console.log(e));
      fetch("https://your-exp-api.onrender.com/startServer")
        .then((res: any) => res.json())
        .then((res: any) => console.log(res))
        .catch((e) => console.log(e));
    }, 300000);

 return(()=>{
  clearInterval(serverReseting)
 })

  }, []);

  return (
    <div className="bg-light w-full min-h-screen dark:bg-dark ">
      <Router>
        <Routes>
          <Route path="/" element={<MainBars />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
