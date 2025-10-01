import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Network from './components/Network';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Network />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
