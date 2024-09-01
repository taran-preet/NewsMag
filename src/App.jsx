import { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AOS from 'aos';
import NewsBoard from './components/NewsBoard';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animations
      offset: 200, // Offset from the original trigger point
      once: false, // Whether animation should happen only once
    });
  }, []);
  
  const [category, setCategory] = useState("general");

  return (
    <>
      <div>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Navbar setCategory={setCategory} />
          <NewsBoard category={category} />
        </div>
      </div>
    </>
  );
}

export default App;
