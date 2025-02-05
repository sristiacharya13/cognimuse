import Contact from "./Contact"
import About from "./About"
import TeamSection from "./TeamSection"
import Services from "./Services"
import Navbar from "./Navbar"
import WorksPage from "./WorksPage"

function App() {

  return (
    <>
      <Navbar/>
      <WorksPage/>
      <Services/>
      <About/>
      <TeamSection/>
      <Contact/>
      {/*
      <Hero/>
      <Studio/>
      */}
    </>
  )
}

export default App
