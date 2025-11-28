import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary/20 shadow-xl relative overflow-hidden">
      {/* Organized White Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={tmtLogo} 
              alt="TMT Logo" 
              className="h-14 w-auto group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white">TechMecha</span>
              <span className="text-xl font-bold text-primary">Torque</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link 
              to="/vision"
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Vision
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/founder"
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Leadership
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/careers"
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Careers
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 hover:text-primary transition-colors font-semibold relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-primary/20 shadow-lg relative overflow-hidden">
          {/* Organized White Dot Pattern for mobile menu */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="container mx-auto px-6 py-6 relative z-10">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Solutions
              </button>
              <Link
                to="/vision"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Vision
              </Link>
              <Link
                to="/founder"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Leadership
              </Link>
              <Link
                to="/careers"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Careers
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground/70 hover:text-primary transition-colors font-semibold py-3 border-b border-border/30"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;