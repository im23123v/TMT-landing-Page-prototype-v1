import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Code, Users, DollarSign, Calendar, Shield, ArrowLeft, CheckCircle, TrendingUp, Zap, Globe, Building2, GraduationCap, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    icon: MessageCircle,
    title: "NextChat",
    tagline: "Revolutionizing Campus Communication",
    description: "NextChat is our enterprise-grade communication platform designed specifically for educational institutions. It brings together students, faculty, and administration in a unified communication ecosystem.",
    features: [
      "Real-time messaging with end-to-end encryption",
      "HD video conferencing with up to 500 participants",
      "Collaborative workspaces with shared documents",
      "Assignment submission and feedback system",
      "Automated notifications and reminders",
      "Integration with learning management systems",
      "Mobile apps for iOS and Android",
      "Advanced search and message archiving"
    ],
    benefits: [
      "Reduce email overload by 70%",
      "Improve response times for student queries",
      "Foster better collaboration between departments",
      "Maintain institutional knowledge in searchable archives"
    ],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Code,
    title: "NextCode",
    tagline: "Advanced Coding Education Platform",
    description: "NextCode transforms how programming is taught and evaluated, providing a comprehensive environment for coding education with integrated development tools and automated assessment.",
    features: [
      "Browser-based IDE supporting 50+ programming languages",
      "Automated code evaluation and grading",
      "Advanced plagiarism detection using AI",
      "Real-time collaborative coding sessions",
      "Code quality analysis and suggestions",
      "Version control integration (Git)",
      "Custom test case creation for assignments",
      "Detailed analytics on student progress"
    ],
    benefits: [
      "Save 15+ hours per week on manual grading",
      "Detect code plagiarism with 95% accuracy",
      "Enable peer programming and collaboration",
      "Track student coding patterns and improvement"
    ],
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Users,
    title: "NextAttendance",
    tagline: "Intelligent Attendance Tracking",
    description: "NextAttendance brings smart, efficient attendance management to educational institutions with biometric integration, geolocation verification, and comprehensive analytics.",
    features: [
      "Multiple attendance marking methods (biometric, QR, geofence)",
      "Real-time attendance tracking and alerts",
      "Automated parent notifications",
      "Advanced analytics and reporting",
      "Integration with student information systems",
      "Leave management for students and faculty",
      "Attendance forecasting using ML",
      "Customizable attendance policies"
    ],
    benefits: [
      "Reduce attendance marking time by 80%",
      "Eliminate proxy attendance fraud",
      "Improve student attendance rates by 25%",
      "Generate compliance reports automatically"
    ],
    color: "from-green-500/20 to-green-600/20"
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    tagline: "Complete HR & Payroll Solution",
    description: "Our comprehensive payroll management system streamlines HR operations, automates salary calculations, and ensures compliance with tax regulations and labor laws.",
    features: [
      "Automated salary calculations with tax deductions",
      "Multi-currency and multi-location support",
      "Benefits and allowances management",
      "Leave and attendance integration",
      "Statutory compliance and reporting",
      "Employee self-service portal",
      "Direct bank deposit and payment processing",
      "Detailed financial reports and analytics"
    ],
    benefits: [
      "Reduce payroll processing time by 90%",
      "Eliminate calculation errors and discrepancies",
      "Ensure 100% tax and statutory compliance",
      "Provide transparent salary breakdowns to employees"
    ],
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    tagline: "AI-Powered Timetable Optimization",
    description: "Smart Scheduling uses advanced AI algorithms to create optimal timetables, manage resources efficiently, and handle schedule conflicts automatically.",
    features: [
      "AI-powered automatic timetable generation",
      "Resource allocation and room management",
      "Faculty workload balancing",
      "Conflict detection and resolution",
      "Exam scheduling with hall allocation",
      "Real-time schedule updates and notifications",
      "Calendar integration (Google, Outlook)",
      "Mobile access for students and faculty"
    ],
    benefits: [
      "Save 40+ hours per semester on scheduling",
      "Eliminate timetable conflicts automatically",
      "Optimize resource utilization by 35%",
      "Reduce scheduling-related complaints by 85%"
    ],
    color: "from-rose-500/20 to-rose-600/20"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    tagline: "Enterprise-Grade Security Framework",
    description: "Our comprehensive security and compliance module ensures data protection, regulatory compliance, and provides complete audit trails for institutional accountability.",
    features: [
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "End-to-end data encryption",
      "Automated compliance monitoring",
      "Complete audit trails and logging",
      "Data backup and disaster recovery",
      "GDPR and privacy compliance tools",
      "Security threat detection and alerts"
    ],
    benefits: [
      "Achieve 99.9% data security compliance",
      "Prevent unauthorized access and data breaches",
      "Meet international security standards",
      "Generate compliance reports automatically"
    ],
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  {
    icon: Building2,
    title: "NextHostels",
    tagline: "Complete Hostel Management System",
    description: "NextHostels streamlines hostel operations with comprehensive room allocation, maintenance tracking, and student welfare management. A complete solution for residential campus management.",
    features: [
      "Automated room allocation and management",
      "Visitor management and security logging",
      "Maintenance request tracking system",
      "Mess management and meal planning",
      "Fee collection and billing automation",
      "Student check-in/check-out tracking",
      "Inventory management for hostel supplies",
      "Emergency alert and notification system"
    ],
    benefits: [
      "Reduce room allocation time by 90%",
      "Improve maintenance response time by 60%",
      "Enhance student safety and security",
      "Streamline fee collection and reduce defaults"
    ],
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    icon: GraduationCap,
    title: "NextCourses",
    tagline: "Intelligent Course Management Platform",
    description: "NextCourses revolutionizes academic program management with intelligent course planning, enrollment management, and comprehensive learning outcome tracking.",
    features: [
      "Course catalog and curriculum management",
      "Automated enrollment and waitlist management",
      "Prerequisites and co-requisite tracking",
      "Learning outcome assessment tools",
      "Faculty workload distribution",
      "Course evaluation and feedback system",
      "Credit transfer and equivalency management",
      "Program completion tracking and advising"
    ],
    benefits: [
      "Reduce enrollment conflicts by 95%",
      "Improve course planning efficiency by 75%",
      "Track learning outcomes effectively",
      "Enable data-driven curriculum improvements"
    ],
    color: "from-violet-500/20 to-violet-600/20"
  },
  {
    icon: BookOpen,
    title: "NextLibrary",
    tagline: "Modern Digital Library Management",
    description: "NextLibrary brings your institutional library into the digital age with advanced cataloging, digital resource management, and intelligent search capabilities.",
    features: [
      "Comprehensive catalog management system",
      "RFID-based check-in/check-out",
      "Digital resource repository and access",
      "Advanced search with AI recommendations",
      "Automated overdue notifications",
      "Inter-library loan management",
      "Reading analytics and insights",
      "Mobile app for resource discovery"
    ],
    benefits: [
      "Reduce manual cataloging time by 80%",
      "Increase resource utilization by 45%",
      "Eliminate book loss and misplacement",
      "Provide 24/7 access to digital resources"
    ],
    color: "from-emerald-500/20 to-emerald-600/20"
  }
];

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <div className="text-center animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="text-gradient">Vision</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforming higher education through innovative digital solutions. Each product in our ecosystem 
                is designed to solve specific challenges while working seamlessly together for complete institutional transformation.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-20 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Card className="border-0 card-professional bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  To empower educational institutions with cutting-edge technology that enhances operational 
                  efficiency, improves learning outcomes, and creates a seamless digital experience for all stakeholders. 
                  We believe in making advanced technology accessible and affordable for institutions of all sizes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Products */}
          <div className="space-y-16">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="border-0 card-professional overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${product.color} p-8 md:p-12`}>
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/90 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <product.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                            {product.title}
                          </h2>
                          <p className="text-xl text-primary font-semibold mb-4">
                            {product.tagline}
                          </p>
                          <p className="text-lg text-foreground/80 leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 md:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
                          </div>
                          <ul className="space-y-3">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span className="text-foreground/90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <TrendingUp className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold text-foreground">Proven Benefits</h3>
                          </div>
                          <ul className="space-y-4">
                            {product.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <span className="text-primary font-bold text-sm">{idx + 1}</span>
                                </div>
                                <span className="text-foreground/90 font-medium pt-1">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/10 animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Transform Your Institution?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how TechMecha Torque can revolutionize your university's operations and enhance the educational experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919848088022?text=Hi%20I'm%20interested%20in%20TechMecha%20Torque" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 font-semibold text-lg shadow-professional">
                  Prebook Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vision;
