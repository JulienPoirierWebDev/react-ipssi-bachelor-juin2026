import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Accueil = () => {

  
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Accueil;
