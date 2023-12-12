import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react'
import './App.css';
import GLOBE from 'vanta/dist/vanta.globe.min'
import Banner from './components/banner';
import NavigationBar from './components/navbar';
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
        touchControls: true,
        gyroControls: false,
        minHeight: viewportHeight,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x120a2f
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <main>
    <div ref={myRef}>
      <Banner/>
    </div>
</main>
}

export default App;
