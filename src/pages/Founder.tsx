import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, Quote, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderPhoto from "@/assets/founder-photo.png";
import vishwanathPhoto from "@/assets/vishwanath-photo.jpg";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="mb-8 animate-fade-up">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Meet Our <span className="text-gradient">Founder</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                  Visionary leadership driving innovation in educational technology and 
                  transforming the future of higher education worldwide.
                </p>
              </div>
            </div>

            <Card className="max-w-6xl mx-auto border-0 card-professional shadow-professional-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center lg:text-left">
                    <div className="mb-8">
                      <Quote className="w-16 h-16 text-primary mb-6" />
                      <blockquote className="text-2xl md:text-3xl font-semibold italic text-foreground/90 leading-relaxed">
                        "Technology should democratize education, not complicate it. Our mission is to make 
                        advanced learning tools accessible to every university, empowering institutions to 
                        focus on what matters most - educating the next generation."
                      </blockquote>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-3 text-foreground">Jaya Chandra</h2>
                    <p className="text-2xl text-primary mb-2 font-semibold">Founder & CEO</p>
                    <p className="text-lg text-muted-foreground mb-8 font-medium">B.Tech • Entrepreneur</p>
                    
                    <div className="flex gap-6 justify-center lg:justify-start mb-8">
                      <a href="#" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Linkedin className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="#" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                        <Twitter className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                      <a href="mailto:team@techmechatorque.com" className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group shadow-professional">
                      <Mail className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                  </div>

                  <div className="relative">
                    <div className="w-96 h-96 mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                      <img 
                        src={founderPhoto} 
                        alt="Jaya Chandra - Founder & CEO" 
                        className="w-full h-full object-cover rounded-full shadow-professional-xl border-4 border-white/20 relative z-10"
                      />
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Background & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Background & Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                With over a decade of experience in educational technology and software engineering, 
                Jaya has dedicated his career to solving complex challenges in higher education. 
                His deep understanding of both technology and academia drives TechMecha Torque's 
                innovative approach to university digitalization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="border-0 card-professional shadow-professional animate-slide-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Educational Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                    "Education is the foundation of human progress. By leveraging technology thoughtfully, 
                    we can create learning environments that are more inclusive, efficient, and effective. 
                    Every feature we build is designed with the student experience at its core."
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Student-centric design approach</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Technology as an enabler, not a barrier</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground font-medium">Continuous innovation and improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 card-professional shadow-professional animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Technical Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                    Jaya's technical background spans full-stack development, cloud architecture, 
                    and AI/ML integration. His hands-on approach ensures that TechMecha Torque 
                    delivers not just functional, but exceptional user experiences.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">15+ years in software development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">Expert in scalable cloud solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">AI/ML integration specialist</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                Meet the visionaries driving innovation and excellence at TechMecha Torque
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Founder & CEO - Jaya Chandra */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img 
                        src={founderPhoto} 
                        alt="Jaya Chandra" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">Founder & CEO</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Jaya Chandra</h3>
                  <p className="text-primary font-semibold mb-3">Founder & Chief Executive Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    B.Tech, Entrepreneur with vision to transform educational technology 
                    and create accessible learning solutions.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* COO - Abhiram */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-accent/20 group-hover:border-accent/40 transition-colors bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                      <Users className="w-24 h-24 text-accent/40" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">COO</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Abhiram</h3>
                  <p className="text-accent font-semibold mb-3">Chief Operating Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Strategic operations leader with expertise in scaling EdTech platforms. 
                    Drives operational excellence and process optimization.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CTO - Vishwanath */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img 
                        src={vishwanathPhoto} 
                        alt="Vishwanath" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">CTO</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Vishwanath</h3>
                  <p className="text-primary font-semibold mb-3">Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Technology architect with deep expertise in cloud infrastructure and AI/ML. 
                    Leads product development and innovation initiatives.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CMO - Venkat Asrith */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-accent/20 group-hover:border-accent/40 transition-colors bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                      <Users className="w-24 h-24 text-accent/40" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">CMO</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Venkat Asrith</h3>
                  <p className="text-accent font-semibold mb-3">Chief Marketing Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Strategic marketing expert with deep EdTech industry knowledge. 
                    Leads brand positioning and market expansion strategies.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CTO - Sai Dhanush */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-primary/20 group-hover:border-primary/40 transition-colors bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Users className="w-24 h-24 text-primary/40" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">CTO</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Sai Dhanush</h3>
                  <p className="text-primary font-semibold mb-3">Chief Technology Officer</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Tech innovator focused on building scalable and reliable systems. 
                    Drives technical strategy and product architecture.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CHR - Shiva */}
              <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-professional-xl border-4 border-accent/20 group-hover:border-accent/40 transition-colors bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                      <Users className="w-24 h-24 text-accent/40" />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-light px-4 py-2 rounded-full shadow-professional">
                      <span className="text-white font-bold text-sm">CHR</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 mt-6">Shiva</h3>
                  <p className="text-accent font-semibold mb-3">Chief Human Resources</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    People-focused leader building high-performance teams. 
                    Champions workplace culture and talent development initiatives.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a href="#" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </a>
                    <a href="mailto:team@techmechatorque.com" className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interns Section */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">Our Talented Interns</h3>
              
              {/* AI/ML Interns */}
              <div className="mb-12">
                <h4 className="text-xl font-bold mb-6 text-center text-primary">AI/ML Interns</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Srikar Vamshi</h4>
                      <p className="text-sm text-primary font-semibold mb-2">AI/ML Intern</p>
                      <p className="text-xs text-muted-foreground">Developing intelligent learning systems</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/20">
                        <Users className="w-16 h-16 text-accent/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Omkareshwara</h4>
                      <p className="text-sm text-accent font-semibold mb-2">AI/ML Intern</p>
                      <p className="text-xs text-muted-foreground">Building predictive analytics models</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Kavya</h4>
                      <p className="text-sm text-primary font-semibold mb-2">AI/ML Intern</p>
                      <p className="text-xs text-muted-foreground">Implementing machine learning solutions</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Web Dev Interns */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-center text-accent">Web Development Interns</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/20">
                        <Users className="w-16 h-16 text-accent/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Ram Sai Kandagatta</h4>
                      <p className="text-sm text-accent font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Full stack development</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">M. Adesh</h4>
                      <p className="text-sm text-primary font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Frontend development</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/20">
                        <Users className="w-16 h-16 text-accent/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Bairagoni Charan</h4>
                      <p className="text-sm text-accent font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Backend development</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Sravan Nishanth</h4>
                      <p className="text-sm text-primary font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">UI/UX development</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/20">
                        <Users className="w-16 h-16 text-accent/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Ram Charan</h4>
                      <p className="text-sm text-accent font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Full stack development</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Chandra Siddharatha</h4>
                      <p className="text-sm text-primary font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Frontend specialist</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center border-2 border-accent/20">
                        <Users className="w-16 h-16 text-accent/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">ShataKanthi Veer</h4>
                      <p className="text-sm text-accent font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Backend specialist</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 card-professional text-center group hover:-translate-y-2 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-professional mb-4 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/20">
                        <Users className="w-16 h-16 text-primary/40" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Abhishek</h4>
                      <p className="text-sm text-primary font-semibold mb-2">Web Dev Intern</p>
                      <p className="text-xs text-muted-foreground">Full stack development</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 animate-fade-up">
              <h3 className="text-3xl font-bold mb-4 text-foreground">Connect with Our Team</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-medium">
                Interested in discussing your institution's digital transformation? 
                Reach out to our leadership team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:team@techmechatorque.com" className="inline-block">
                  <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4">
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Founder;