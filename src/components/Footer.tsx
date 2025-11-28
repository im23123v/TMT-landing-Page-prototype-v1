import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import tmtLogo from "@/assets/tmt-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={tmtLogo} 
                alt="TMT Logo" 
                className="h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed font-medium">
              Leading the digital transformation of higher education through innovative technology solutions. 
              Empowering universities worldwide with comprehensive, integrated platforms for modern learning.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/techmecha-torque" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 border border-primary/20 transition-all duration-300 group">
                <Twitter className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">NextChat Platform</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">NextCode IDE</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">NextAttendance</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Payroll Management</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Smart Scheduling</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">Security & Compliance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-foreground">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/founder" className="text-muted-foreground hover:text-primary transition-colors font-medium">Leadership</Link></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">Support</a></li>
              <li><Link to="/admin" className="text-primary hover:text-primary-light transition-colors font-semibold">Admin</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Email</div>
                <a href="mailto:team@techmechatorque.com" className="text-foreground hover:text-primary transition-colors font-semibold">
                  team@techmechatorque.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Phone</div>
                <a href="tel:+919848088022" className="text-foreground hover:text-primary transition-colors font-semibold">
                  +91 98480 88022
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-muted-foreground mb-1">Headquarters</div>
                <div className="text-foreground font-medium">
                  Hyderabad, Telangana<br />
                  India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © 2025 TechMecha Torque. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;