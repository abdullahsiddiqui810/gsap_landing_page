import gsap from 'gsap';
import React from 'react';
import {ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

 
export default function App() {
  return (
    <div className="flex-center h-[100vh]">
        <h1 className="text-4xl text-indigo-300">Hello, GSAP!</h1>
    </div>
  )
}
