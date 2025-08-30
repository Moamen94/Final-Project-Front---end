import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsMain from "./AboutUs/AboutUsMain";
import MainConTact from "./contact/MainConTact";
import Courses from "./Courses/CoursesHeader";
import Navbar from "./compuntsHome1/heder";
import Main from "./compuntsHome1/Main";

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<AboutUsMain />} />
        <Route path="/contact" element={<MainConTact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faq" element={<div>FAQ Page</div>} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/course-details" element={<div>Course Details Page</div>} />
        <Route path="/blog" element={<div>Blog List</div>} />
        <Route path="/blog-details" element={<div>Blog Details</div>} />
      </Routes>
    </Router>
  );
}

export default App;


