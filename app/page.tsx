import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Blog />
      <CTASection />
      <Footer />
      <BackToTop />
    </main>
  );
}