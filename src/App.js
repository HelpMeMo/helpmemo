import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Hst from "./pages/Hst";
import Initial from "./pages/Initial";
import Math from "./pages/Math";
import Sociology from "./pages/Sociology";
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <Router>
      <div className="App">
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Initial />} />
              <Route path="/about" element={<About />} />
              <Route path="/hst" element={<Hst />} />
              <Route path="/math" element={<Math />} />
              <Route path="/sociology" element={<Sociology />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
