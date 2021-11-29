import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
