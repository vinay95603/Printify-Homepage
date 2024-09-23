import React from 'react';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import "./App.css";


function App() {
  return (
    <div className="app">
      <Hero />
      <Featured />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;