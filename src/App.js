import { useState, useEffect, useRef } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignPicker from "./components/DesignPicker";
import Services from "./components/Services";
import Work from "./components/Work";
import ContactForm from "./components/ContactForm";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import { styles } from "./styles";

// Sections configuration
const SECTIONS = {
  home: "home",
  designs: "designs",
  services: "services",
  work: "work",
  contact: "contact"
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(SECTIONS.home);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const refs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, e.target.id]));
          }
        });
      },
      { threshold: 0.15 }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sectionAnim = (id) =>
    visibleSections.has(id)
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(40px)" };

  // Handle section changes from navbar
  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.root}>
      <GlobalStyles />
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} scrollY={scrollY} />
      
      {/* Only render visible section */}
      <div>
        {activeSection === SECTIONS.home && (
          <Hero ref={(el) => (refs.current.home = el)} sectionAnim={sectionAnim} id="home" />
        )}

        {activeSection === SECTIONS.designs && (
          <div>
            <DesignPicker ref={(el) => (refs.current.designs = el)} sectionAnim={sectionAnim} id="designs" />
            <CustomerReviews id="reviews" />
          </div>
        )}

        {activeSection === SECTIONS.services && (
          <Services ref={(el) => (refs.current.services = el)} sectionAnim={sectionAnim} id="services" />
        )}

        {activeSection === SECTIONS.work && (
          <Work ref={(el) => (refs.current.work = el)} sectionAnim={sectionAnim} id="work" />
        )}

        {activeSection === SECTIONS.contact && (
          <ContactForm ref={(el) => (refs.current.contactForm = el)} sectionAnim={sectionAnim} id="contact" />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;