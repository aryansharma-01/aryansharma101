
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Code, Palette, Smartphone, Globe, ChevronDown, User, BookOpen, Code2, FolderOpen, MessageCircle } from 'lucide-react';
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-bright to-green-600 rounded-full flex items-center justify-center animate-pulse-green">
            <User size={48} className="text-black" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Aryan Sharma</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Frontend Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building beautiful web experiences with passion and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-green-bright hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 glow-effect"
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-green-bright text-green-bright hover:bg-green-bright hover:text-black px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-16">
            <ChevronDown 
              size={32} 
              className="mx-auto animate-bounce text-green-bright cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
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
