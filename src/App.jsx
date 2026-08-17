import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Coaches from "./components/Coaches/Coaches";
import WhyChoose from "./components/WhyChooseUs/WhyChoose";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Coaches />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
