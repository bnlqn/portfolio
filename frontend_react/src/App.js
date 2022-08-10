import React from 'react';

import { About, Footer, Header, Skills, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Testimonial />
    <Skills />
    <Footer />
  </div>
);

export default App;
