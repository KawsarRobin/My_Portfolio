import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contact from './Pages/Home/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Skills from './Pages/Home/Skills/Skills';
import FinalProject from './Pages/Projects/FinalProject/FinalProject';
import Projects from './Pages/Projects/Projects/Projects';
import NotFound from './Shared/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/projects/:id" element={<FinalProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
