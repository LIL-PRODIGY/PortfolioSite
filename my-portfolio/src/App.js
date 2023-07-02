import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience"
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <NavBar />
     <Home />
     <SocialLinks />
     <About />
     <Projects />
     <Experience />
     <Footer />
    </div>
  );
}

export default App;
