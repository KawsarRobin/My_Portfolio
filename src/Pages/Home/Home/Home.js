import React from 'react';
import Header from '../../../Shared/Header/Header';
import Projects from '../../Projects/Projects/Projects';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
