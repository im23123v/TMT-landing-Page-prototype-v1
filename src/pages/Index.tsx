import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Dotted Pattern Background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div id="features">
            <Features />
          </div>
          <Stats />
          <FAQ />
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
