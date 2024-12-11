import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Specifications from './components/Specifications';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="font-sans text-right" dir="rtl">
      <Hero />
      {/* <ProductSlider /> */}
      <Features />
      <Specifications />
      <Testimonials />
      
      <Benefits />
      <Pricing />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;