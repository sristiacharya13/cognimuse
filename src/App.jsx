import React from "react"
import { Routes,Route } from "react-router-dom"
import Contact from "./Contact"
import About from "./About"
import TeamSection from "./TeamSection"
import Services from "./Services"
import Navbar from "./Navbar"
import WorksPage from "./WorksPage"
import VideoSection from "./VideoSection"
import Works from "./Works"
import Blog from "./Blog"
import ContactForm from "./ContactForm"
import Hero from "./Hero"
import Stdio from "./Stdio"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero/>
              <About/>
              <WorksPage/>
              <Services/>
              <VideoSection/>
              <TeamSection/>
              <Contact/>
            </>
          }
        />
        <Route
          path="/studio"
          element={
            <>
              <Navbar/>
              <Stdio/>
              <TeamSection/>
              <About/>
              <Services/>
              <Contact/>
            </>
          }
        />
        <Route
          path="/work"
          element={
            <>
              <Works/>
              <Contact/>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog/>
              <Contact/>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar/>
              <ContactForm/>
              <Contact/>
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App
