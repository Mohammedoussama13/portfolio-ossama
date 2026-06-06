import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, ArrowRight, Briefcase, Award, Code2, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      year: "2024",
      title: "Medical Assistant",
      company: "Tlemcen Medical Center",
      description: "Healthcare professional providing patient support and medical assistance in clinical settings.",
      icon: "🏥",
    },
    {
      year: "2024",
      title: "Delivery & Distribution Specialist",
      company: "Tlemcen Logistics",
      description: "Managing delivery operations and distribution services across Tlemcen region.",
      icon: "📦",
    },
    {
      year: "2023",
      title: "Automotive Technician",
      company: "Sidi-Bel Abbesse Auto Repair",
      description: "Specialized in car radiator repair and automotive maintenance services.",
      icon: "🔧",
    },
    {
      year: "2021",
      title: "Electrical Assistant",
      company: "Sidi-Bel Abbesse",
      description: "Assistant in architectural electricity systems and electrical installations.",
      icon: "⚡",
    },
  ];

  const education = [
    {
      year: "2014-2016",
      title: "Diploma in Transmission Technology",
      institution: "Military School of Transmission, Tiaret",
      details: "Specialized training in transmission systems and commutation techniques",
      icon: "🎖️",
    },
    {
      year: "2017",
      title: "Fiber Optics & Repair Certification",
      institution: "Regional Establishment, Oran",
      details: "Technical certification in fiber optics installation and repair",
      icon: "🔌",
    },
    {
      year: "2013-2014",
      title: "Baccalaureate Degree",
      institution: "Tlemcen Secondary School",
      details: "Baccalaureate in Management and Economic Science",
      icon: "📚",
    },
  ];

  const skills = [
    "Fiber Optics Installation",
    "Electrical Systems",
    "Automotive Repair",
    "Technical Support",
    "Telecommunications",
    "Problem Solving",
    "Team Collaboration",
    "Customer Service",
  ];

  const languages = [
    { name: "French", level: "Fluent" },
    { name: "Arabic", level: "Native" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-accent/30 shadow-lg shadow-accent/10" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center py-4 md:py-6">
          <div className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">MO</span>
          </div>
          <div className="flex gap-6 md:gap-10">
            <a href="#about" className="text-sm hover:text-accent transition-colors duration-200 hover:scale-110">
              About
            </a>
            <a href="#experience" className="text-sm hover:text-accent transition-colors duration-200 hover:scale-110">
              Experience
            </a>
            <a href="#education" className="text-sm hover:text-accent transition-colors duration-200 hover:scale-110">
              Education
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors duration-200 hover:scale-110">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663544672102/CEEvaaf2HfVyuWVKb8biBV/hero-premium-dark-bFqQUHuZaYovngkDfoCp2a.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full border border-accent/50 bg-accent/10 text-accent text-sm font-bold">
                ✨ PROFESSIONAL PROFILE
              </div>
              <h1 className="text-display leading-tight">
                Mohamed
                <br />
                <span className="gradient-text">Oussama</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                Multi-skilled technical professional with expertise in telecommunications, automotive systems, and electrical installations. Dedicated to delivering excellence in every project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:o4995575@gmail.com">
                <Button className="premium-button-primary w-full sm:w-auto">
                  Get in Touch <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <Button className="premium-button-outline w-full sm:w-auto">
                Download CV
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <a
                href="mailto:o4995575@gmail.com"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125"
                title="Email"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125"
                title="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-125"
                title="GitHub"
              >
                <Github size={28} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-8 space-y-3 border-t border-accent/20">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-accent" />
                <span>Tlemcen, Algeria</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-accent" />
                <span>+213 554 236 806</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-accent" />
                <span>o4995575@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex items-center justify-center relative animate-float">
            <div className="relative w-80 h-80">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-spin" style={{ animationDuration: "20s" }} />
              {/* Middle Ring */}
              <div
                className="absolute inset-8 rounded-full border-2 border-accent-secondary/40 animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              />
              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent/15 to-accent-secondary/15 backdrop-blur-md border border-accent/40 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl font-bold gradient-text">MO</div>
                  <p className="text-sm text-muted-foreground mt-3 font-bold">PROFESSIONAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown size={28} className="text-accent" />
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-gradient" />
      </div>

      {/* About Section */}
      <section id="about" className="section-spacing relative">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h2 className="text-heading">About Me</h2>
              <div className="space-y-6 text-body">
                <p className="leading-relaxed">
                  I am a versatile technical professional with a proven track record in telecommunications, automotive systems, and electrical installations. My diverse background demonstrates adaptability and commitment to mastering various technical domains.
                </p>
                <p className="leading-relaxed">
                  With formal training in transmission technology and fiber optics, combined with hands-on experience in multiple fields, I bring both theoretical knowledge and practical expertise. I am passionate about solving complex technical challenges and delivering high-quality results.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary rounded-2xl blur-2xl opacity-20"
                style={{ transform: "translate(20px, 20px)" }}
              />
              <div className="glass-card relative space-y-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Technical Expertise</h3>
                    <p className="text-muted-foreground text-sm">Telecommunications, electrical systems, automotive repair</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="text-accent-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Certified Professional</h3>
                    <p className="text-muted-foreground text-sm">Multiple certifications in specialized technical fields</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code2 className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Problem Solver</h3>
                    <p className="text-muted-foreground text-sm">Dedicated to finding innovative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-gradient" />
      </div>

      {/* Experience Section */}
      <section id="experience" className="section-spacing relative">
        <div className="container max-w-4xl">
          <h2 className="text-heading mb-16 animate-fade-in-up">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="experience-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-6">
                  <div className="text-5xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-subheading">{item.title}</h3>
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                    </div>
                    <p className="text-accent font-bold mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-gradient" />
      </div>

      {/* Education Section */}
      <section id="education" className="section-spacing relative">
        <div className="container max-w-4xl">
          <h2 className="text-heading mb-16 animate-fade-in-up">Education & Certifications</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="experience-card animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-6">
                  <div className="text-5xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-subheading">{item.title}</h3>
                      <span className="text-accent font-bold text-lg">{item.year}</span>
                    </div>
                    <p className="text-accent font-bold mb-2">{item.institution}</p>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-gradient" />
      </div>

      {/* Skills Section */}
      <section className="section-spacing relative">
        <div className="container max-w-4xl">
          <h2 className="text-heading mb-16 animate-fade-in-up">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-badge animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-bold text-lg">{skill}</span>
              </div>
            ))}
          </div>

          <h3 className="text-subheading mb-8 animate-fade-in-up">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="glass-card animate-fade-in-up"
                style={{ animationDelay: `${(index + skills.length) * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{lang.name}</span>
                  <span className="text-accent font-bold">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-gradient" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="section-spacing relative">
        <div className="container max-w-3xl text-center">
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-heading">Let's Connect</h2>
            <p className="text-body text-muted-foreground max-w-md mx-auto text-lg">
              I'm always interested in hearing about new opportunities and collaborations. Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="mailto:o4995575@gmail.com">
                <Button className="premium-button-primary w-full sm:w-auto">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button className="premium-button-outline w-full sm:w-auto">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button className="premium-button-outline w-full sm:w-auto">
                  <Github className="mr-2" size={20} />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-accent/20 py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Mohamed Oussama Boumediou. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
