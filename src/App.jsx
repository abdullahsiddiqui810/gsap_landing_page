import gsap from 'gsap';
import React from 'react';
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from './component/Navbar';
import Hero from './component/Hero';
 
export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  )
}
