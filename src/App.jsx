import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vsl from './components/Vsl';
import LeCadre from './components/LeCadre';
import FundamentaAcademy from './components/FundamentaAcademy';
import Segmentation from './components/Segmentation';
import Manifesto from './components/Manifesto';
import SocialProofAndOffers from './components/SocialProofAndOffers';
import Faq from './components/Faq';
import FloatingDiamondContainer from './components/FloatingDiamondContainer';
import MultiStepLeadForm from './components/MultiStepLeadForm';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Add the noise overlay dynamically so it's globally active
    const noise = document.createElement('div');
    noise.className = 'noise-overlay';
    document.body.appendChild(noise);

    return () => {
      if (noise.parentNode) {
        noise.parentNode.removeChild(noise);
      }
    };
  }, []);

  return (
    <div className="bg-fa-deep text-fa-ivory font-sans relative">
      <Navbar />
      <FloatingDiamondContainer />
      <Hero />
      <Vsl />
      <LeCadre />
      <div className="bg-white text-fa-deep relative z-20 transition-colors duration-1000">
        {/* Aurora Borealis base container here conceptually, but rendered in FundamentaAcademy */}
        <FundamentaAcademy />
        <Segmentation />
        <Manifesto />
        <SocialProofAndOffers />
        <Faq />
      </div>
      <MultiStepLeadForm />
    </div>
  );
}

export default App;
