import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/ui/Footer";

// ...

<main>
  {/* all your sections like Hero, Skills, Projects, Contact */}
  <Footer />
</main>


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        {/* Add more routes like About, Projects etc. here */}
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
