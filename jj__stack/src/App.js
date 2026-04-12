import { useState, useEffect, useRef } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Servies";
import Work from "./components/Work";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { styles } from "./styles";

//where the app start

function App() 
{
   const [scrollY, setScrollY] =useState(0);
   const [visibleSections, setVisibleSections] = useState(new Set());
   const refs =useRef({});

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", onscroll, { passive: true});
    return () => window.removeEventListener("scroll",onScroll);
  }, []);
  
  useEffect ( () => {
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
     : { opacity: 0, transform: "translateY(40px)" }

  return (
   <div style={styles.root}>
     <GlobalStyles />
     <Navbar scrollY={scrollY} />
     <Hero ref={(el) => (refs.current.home = el)} sectionAnim={sectionAnim} />
     <Services ref={(el) => (refs.current.services = el)} sectionAnim={sectionAnim} />
     <Work ref={(el) => (refs.current.work = el)} sectionAnim ={sectionAnim} />
     <ContactForm ref ={(el) => (refs.current.contactForm = el)} sectionAnim={sectionAnim} />
     <Footer /> 
   </div>
  );    
}
// export file to rest of the app
export default App;

