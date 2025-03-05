// import React from "react"
// import { Routes,Route } from "react-router-dom"
// import Contact from "./Contact"
// import About from "./About"
// import TeamSection from "./TeamSection"
// import Services from "./Services"
// import Navbar from "./Navbar"
// import WorksPage from "./WorksPage"
// import VideoSection from "./VideoSection"
// import Works from "./Works"
// import Blog from "./Blog"
// import ContactForm from "./ContactForm"
// import Hero from "./Hero"
// import Stdio from "./Stdio"
// import FlipBook from "./FlipBook";

// function App() {

//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar/>
//               <Hero/>
//               <About/>
//               <WorksPage/>
//               <Services/>
//               <VideoSection/>
//               <TeamSection/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/studio"
//           element={
//             <>
//               <Navbar/>
//               <Stdio/>
//               <TeamSection/>
//               <About/>
//               <FlipBook/>
//               <Services/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/work"
//           element={
//             <>
//               <Works/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/blog"
//           element={
//             <>
//               <Blog/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Navbar/>
//               <ContactForm/>
//               <Contact/>
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   )
// }

// export default App

// import React from "react"
// import { Routes,Route } from "react-router-dom"
// import Contact from "./Contact"
// import TeamSection from "./TeamSection"
// import Navbar from "./Navbar"
// import WorksPage from "./WorksPage"
// import Blog from "./Blog"
// import ContactForm from "./ContactForm"
// import Hero from "./Hero"
// import Stdio from "./Stdio"
// import CognimuseStory from "./CognimuseStory"
// import FlipBook from "./FlipBook"
// import About from "./About"
// import Works from "./Works"
// import VideoSection from "./VideoSection"
// import Services from "./Services"
// import Studio1 from "./Studio1"
// import TestimonialsSection from "./TestimonialsSection"
// import LoadingPage from "./LoadingPage"
// import Parallax from "./Parallax"

// function App() {

//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero/>
//               <About/>
//               <WorksPage/>
//               <Services/>
//               <VideoSection/>
//               <TestimonialsSection/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/studio"
//           element={
//             <>
//               <Navbar/>
//               <CognimuseStory/>
//               <FlipBook/>
//               <Studio1/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/work"
//           element={
//             <>
//               <Works/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/blog"
//           element={
//             <>
//               <Blog/>
//               <Contact/>
//             </>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Navbar/>
//               <ContactForm/>
//               <Contact/>
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   )
// }

// export default App
// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import WorksPage from "./WorksPage";
// import Blog from "./Blog";
// import ContactForm from "./ContactForm";
// import Hero from "./Hero";
// import CognimuseStory from "./CognimuseStory";
// import FlipBook from "./FlipBook";
// import About from "./About";
// import Works from "./Works";
// import VideoSection from "./VideoSection";
// import Services from "./Services";
// import Studio1 from "./Studio1";
// import TestimonialsSection from "./TestimonialsSection";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar/>
//               <Hero/>
//               <About />
//               <WorksPage />
//               <Services />
//               <VideoSection />
//               <TestimonialsSection />
//               <Contact />
//             </>
//           }
//         />
//         <Route
//           path="/studio"
//           element={
//             <>
//               <Navbar />
//               <CognimuseStory />
//               <FlipBook />
//               <Studio1 />
//               <Contact />
//             </>
//           }
//         />
//         <Route
//           path="/work"
//           element={
//             <>
//               <Works />
//               <Contact />
//             </>
//           }
//         />
//         <Route
//           path="/blog"
//           element={
//             <>
//               <Blog />
//               <Contact />
//             </>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <>
//               <Navbar />
//               <ContactForm />
//               <Contact />
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import Contact from './Contact'
import Hero from './Hero'
import Navbar from './Navbar'
import OurWorks from './OurWorks'
import WorksPage from './WorksPage'
import { Routes, Route } from "react-router-dom";

function App() {
 return (
  <>
  <Routes>
      <Route
          path="/"
          element={
          <>
            <Navbar/>
            <Hero/>
            <OurWorks/>
            <Contact/>
          </>
          }
      />
      <Route
          path="/works"
          element={
          <>
            <WorksPage/>
          </>
          }
      />
      <Route
        path="/services"
        element={
          <>
            
            <OurWorks/>
          </>
        }
      />

      <Route
        path="/contact"
        element={
          <>
            <Contact/>
          </>
        }
      />
    </Routes>
  </>
 )
}
export default App