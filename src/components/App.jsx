import { useState } from 'react'
import './App.scss'
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Reasons from './Reasons/Reasons';
import About from './About/About';
import Services from './Services/Services';
import Stars from './Stars/Stars';
import Ads from './Ads/Ads';
import Projects from './Projects/Projects';
import Cta from './Cta/Cta';
import Bottom from './Bottom/Bottom';
import Footer from './Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Reasons />
      <About />
      <Services />
      <Stars />
      <Ads />
      <Projects />
      <Cta />
      <Bottom />
      <Footer />
    </div>
  )
}

export default App
