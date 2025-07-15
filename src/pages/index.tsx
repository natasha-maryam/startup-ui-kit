import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComponentGallery from '../components/ComponentGallery';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ComponentGallery />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;