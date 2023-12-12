import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import GLOBE from 'vanta/dist/vanta.globe.min'
import Banner from './components/banner';
function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  let viewportHeight = window.innerHeight;
  useEffect(() => {

        // Calculate 100vh as an integer
        let hundredVhAsInteger = Math.floor(viewportHeight);

        console.log(hundredVhAsInteger);
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: hundredVhAsInteger,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color2: 0x871e1e,
        size: 0.50
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <main>
    <div ref={myRef} id="bg">
    </div>
    <div>
    <Banner/>
    </div>
</main>
}

export default App;
