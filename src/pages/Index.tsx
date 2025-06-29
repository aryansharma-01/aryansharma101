
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Code, Palette, Smartphone, Globe, ChevronDown, User, BookOpen, Code2, FolderOpen, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'HTML', level: 90, icon: Code },
    { name: 'CSS', level: 85, icon: Palette },
    { name: 'JavaScript', level: 80, icon: Code2 },
    { name: 'React', level: 75, icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="section-padding py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">AS</div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home', icon: User },
                { name: 'About', id: 'about', icon: BookOpen },
                { name: 'Skills', id: 'skills', icon: Code2 },
                { name: 'Portfolio', id: 'portfolio', icon: FolderOpen },
                { name: 'Contact', id: 'contact', icon: MessageCircle }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-sm hover:text-green-bright transition-colors duration-300"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-bright/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-bright rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center animate-fade-in relative z-10 max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-bright/10 border border-green-bright/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-bright rounded-full animate-pulse"></div>
            <span className="text-sm text-green-bright font-medium">Available for opportunities</span>
          </div>
          
          {/* Profile Picture with Enhanced Design */}
          <div className="relative mb-8 inline-block">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-green-bright to-green-600 rounded-full flex items-center justify-center relative overflow-hidden group">
              {/* Inner glow effect */}
              <div className="absolute inset-2 bg-gradient-to-br from-green-bright/20 to-transparent rounded-full"></div>
              
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-bright via-transparent to-green-bright opacity-75 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 bg-background rounded-full"></div>
              
              {/* Profile content */}
              <div className="relative z-10 w-32 h-32 bg-gradient-to-br from-green-bright to-green-600 rounded-full flex items-center justify-center">
                <User size={48} className="text-black" />
              </div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-bright/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-bright/30">
              <Sparkles size={16} className="text-green-bright" />
            </div>
          </div>
          
          {/* Main Heading with Enhanced Typography */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-2 tracking-tight">
              <span className="gradient-text block">Aryan</span>
              <span className="gradient-text block">Sharma</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div className="h-px bg-gradient-to-r from-transparent via-green-bright to-transparent w-20"></div>
              <p className="text-xl md:text-2xl text-green-bright font-semibold tracking-wide">
                Frontend Developer
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-green-bright to-transparent w-20"></div>
            </div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with 
            <span className="text-green-bright font-medium"> modern technologies</span> and 
            <span className="text-green-bright font-medium"> creative vision</span>
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['React', 'JavaScript', 'CSS', 'HTML'].map((tech, index) => (
              <div key={tech} className="px-4 py-2 bg-muted/20 border border-green-bright/20 rounded-full text-sm text-green-bright backdrop-blur-sm hover:bg-green-bright/10 transition-colors duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                {tech}
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="group bg-green-bright hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 glow-effect relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-bright to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-green-bright/50 text-green-bright hover:bg-green-bright hover:text-black px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>Get In Touch</span>
                <MessageCircle size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
            <div className="relative">
              <ChevronDown 
                size={32} 
                className="text-green-bright cursor-pointer hover:text-green-400 transition-colors duration-300 animate-bounce"
                onClick={() => scrollToSection('about')}
              />
              <div className="absolute inset-0 bg-green-bright/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a frontend developer with a strong passion for crafting stylish, designable websites. 
                I'm currently pursuing my B.Tech at ABES Institute of Technology and expanding my skills 
                into backend development.
              </p>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-bright">Education</h3>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="text-green-bright mt-1" size={20} />
                    <div>
                      <p className="font-medium">B.Tech (Pursuing)</p>
                      <p className="text-muted-foreground">ABES Institute of Technology</p>
                      <p className="text-sm text-green-bright">3rd Year</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-card border-border hover:border-green-bright transition-colors duration-300">
                <CardContent className="p-6">
                  <Code className="text-green-bright mb-3" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Frontend Focus</h3>
                  <p className="text-muted-foreground">
                    Specializing in modern web technologies and responsive design patterns.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border hover:border-green-bright transition-colors duration-300">
                <CardContent className="p-6">
                  <Globe className="text-green-bright mb-3" size={24} />
                  <h3 className="text-xl font-semibold mb-2">Always Learning</h3>
                  <p className="text-muted-foreground">
                    Currently expanding into backend development to become a full-stack developer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 section-padding bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="bg-card border-border hover:border-green-bright transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon className="text-green-bright" size={24} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-bright to-green-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-muted-foreground mt-2">{skill.level}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-card border-border text-center">
            <CardContent className="p-8">
              <Code2 className="text-green-bright mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Currently Learning</h3>
              <p className="text-muted-foreground">Backend Development</p>
              <p className="text-sm text-green-bright mt-2">Expanding to full-stack capabilities</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 gradient-text">Portfolio</h2>
          
          <Card className="bg-card border-border">
            <CardContent className="p-12">
              <FolderOpen className="text-green-bright mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-semibold mb-4">Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Stay tuned for exciting projects that showcase my growing expertise in frontend development.
              </p>
              <p className="text-green-bright font-medium">
                "Every expert was once a beginner. Every pro was once an amateur."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about web development.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-green-bright" size={20} />
                  <span>aryanpandit1017@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-bright" size={20} />
                  <span>8439401407</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="text-green-bright" size={20} />
                  <span>LinkedIn - Aryan Sharma</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-green-bright"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-green-bright"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-green-bright resize-none"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-green-bright hover:bg-green-600 text-black font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Aryan Sharma. Built with passion and precision.
        </p>
      </footer>
    </div>
  );
};

export default Index;
