import React from 'react';
import './App.css';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Culture from './components/Culture';
import Chairman from './components/Chairman';
import Team from './components/Team';
import Activities from './components/Activities';
import Quote from './components/Quote';
import Philosophy from './components/Philosophy';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Culture />
        <Chairman />
        <Team />
        <Activities />
        <Quote />
        <Philosophy />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;
