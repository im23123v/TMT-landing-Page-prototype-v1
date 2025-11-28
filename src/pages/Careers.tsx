import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, ArrowLeft, Briefcase, Users, Heart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8 animate-fade-up"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="text-center max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">We're Hiring Interns!</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
                Join the <span className="text-gradient">Future</span> of EdTech
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-12">
                Launch your career with TechMecha Torque. Gain hands-on experience building 
                products that transform education for millions of students worldwide.
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="glass-card p-6 rounded-2xl">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">Real Projects</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">Expert Mentorship</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">Career Growth</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-semibold text-foreground">Flexible Hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-6">
            <Card className="max-w-5xl mx-auto border-0 shadow-professional-xl overflow-hidden animate-fade-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
              <CardContent className="p-16 text-center relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 shadow-professional-xl">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Apply for an Internship</h2>
                <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
                  We're looking for passionate individuals who want to make a real impact in EdTech.
                </p>
                <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Send your resume, portfolio, and a brief introduction to our team. We review all 
                  applications carefully and respond within 5 business days.
                </p>
                
                <div className="flex flex-col items-center gap-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-bold px-12 py-6 text-lg shadow-professional-xl hover:shadow-glow transition-all duration-300 group"
                    onClick={() => window.location.href = 'mailto:team@techmechatorque.com?subject=Internship Application - [Your Name]'}
                  >
                    <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                    team@techmechatorque.com
                  </Button>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                    <span>Available positions: Frontend • Backend • Design • Marketing • Business Development</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="font-semibold text-foreground mb-1">Duration</p>
                      <p className="text-sm text-muted-foreground">3-6 months</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="font-semibold text-foreground mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">Remote/Hybrid</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="font-semibold text-foreground mb-1">Start Date</p>
                      <p className="text-sm text-muted-foreground">Rolling basis</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
