import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import SkillCard from "./Components/HardSkills/SkillCard"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <div className="bg-[#171d32] h-auto w-full overflow-hidden">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <SkillCard />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
