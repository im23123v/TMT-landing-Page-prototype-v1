import { TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Professional dark background with red accent lighting effects */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Red accent glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-32 left-16 opacity-40">
        <div className="w-20 h-20 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center animate-float border border-primary/30 shadow-red">
          <TrendingUp className="w-10 h-10 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-20 opacity-40" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center animate-float border border-primary/30 shadow-red">
          <Shield className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-foreground">
        <div className="mb-8 animate-fade-up">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 border border-primary/30 glow-effect">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Enterprise EdTech Solutions</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary backdrop-blur-md rounded-full px-6 py-3 border border-primary/50 animate-pulse shadow-glow">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm font-bold text-white">Coming Soon</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">TechMecha</span>
            <span className="text-gradient block">Torque</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive digital transformation platform designed specifically for universities. 
            Streamline operations, enhance learning experiences, and modernize your institution 
            with our integrated suite of advanced tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;