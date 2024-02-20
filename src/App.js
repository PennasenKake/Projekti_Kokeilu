


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Body from './Body';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

          <Header />
          <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          <Body />
          <Footer />

    </div>
  );
}

export default App;
