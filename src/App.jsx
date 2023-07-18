import React from "react";
import "./App.less";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Experience,
  Education,
  ProfessionalSkills,
  // Portfolio,
  ContactMe,
  Footer,
  NotFound,
} from "./components";
import ScrollToTop from "./components/commonComponents/ScrollToTop";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/skills" element={<ProfessionalSkills />} />
          {/* <Route exact path="/portfolio" element={<Portfolio />} /> */}
          <Route exact path="/contact" element={<ContactMe />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

export default App;
