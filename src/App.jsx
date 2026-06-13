import gsap from 'gsap';
import React from 'react';
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Cocktail from './component/Cocktail';
import About from './component/About';
 
export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktail />
      <About />
    </main>
  )
}
