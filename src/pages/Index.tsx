

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
          <div className="relative mb-8 inline-block mt-8">
            <div className="w-40 h-40 mx-auto rounded-full flex items-center justify-center relative overflow-hidden group">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-bright via-transparent to-green-bright opacity-75 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 bg-background rounded-full"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-2 border-green-bright/20">
                <img 
                  src="https://i.postimg.cc/wMjkDTTb/AARYAN.jpg" 
                  alt="Aryan Sharma - Frontend Developer"
                  className="w-full h-full object-cover"
                />
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

      {/* Enhanced About Section */}
      <section id="about" className="py-20 section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-green-bright/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">About Me</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-bright to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-bright to-green-600 rounded-full"></div>
                <div className="pl-8">
                  <h3 className="text-2xl font-semibold mb-4 text-green-bright">My Journey</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I am a frontend developer with a strong passion for crafting stylish, designable websites. 
                    I'm currently pursuing my B.Tech at ABES Institute of Technology and expanding my skills 
                    into backend development.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every line of code I write is driven by curiosity and the desire to create something 
                    meaningful. I believe in the power of clean, efficient code and beautiful user experiences.
                  </p>
                </div>
              </div>

              {/* Philosophy Card */}
              <Card className="bg-gradient-to-br from-card to-card/50 border-green-bright/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-bright/20 rounded-full flex items-center justify-center">
                      <Sparkles className="text-green-bright" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Philosophy</h3>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Great design is not just what it looks like — it's how it works. I strive to create 
                    web experiences that are both beautiful and functional."
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Education Card */}
              <Card className="bg-card/80 border-border hover:border-green-bright/50 transition-all duration-500 group backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-bright/20 to-green-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="text-green-bright" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-green-bright">Education</h3>
                      <p className="font-medium text-lg">Bachelor of Technology</p>
                      <p className="text-muted-foreground">ABES Institute of Technology</p>
                      <div className="mt-3 inline-flex items-center space-x-2 bg-green-bright/10 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-bright rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-bright font-medium">3rd Year - In Progress</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Focus Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-card/60 border-border hover:border-green-bright/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-bright/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="text-green-bright" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Frontend Mastery</h3>
                    <p className="text-sm text-muted-foreground">
                      Modern web technologies & responsive design
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/60 border-border hover:border-green-bright/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-bright/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="text-green-bright" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Full-Stack Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      Expanding to backend development
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 section-padding bg-muted/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-bright to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and creative problem-solving
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="group bg-card/80 border-border hover:border-green-bright/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-bright/20 to-green-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="text-green-bright" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-1">{skill.name}</h3>
                      <p className="text-muted-foreground">Proficiency Level</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-green-bright">{skill.level}%</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-secondary/50 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-bright to-green-600 h-full rounded-full relative transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Currently Learning Section */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-green-bright/10 to-green-600/10 border-green-bright/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-green-bright/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Code2 className="text-green-bright" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Currently Exploring</h3>
                <div className="inline-flex items-center space-x-3 bg-green-bright/20 px-6 py-3 rounded-full mb-4">
                  <div className="w-3 h-3 bg-green-bright rounded-full animate-pulse"></div>
                  <span className="text-xl font-semibold text-green-bright">Backend Development</span>
                </div>
                <p className="text-muted-foreground text-lg">
                  Expanding my horizons to become a full-stack developer and build complete web solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-20 section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-bright/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Portfolio</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-bright to-green-600 mx-auto rounded-full mb-6"></div>
          </div>
          
          <Card className="bg-gradient-to-br from-card/80 to-card/40 border-green-bright/20 backdrop-blur-sm">
            <CardContent className="p-16">
              {/* Animated Icon */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-bright/20 to-green-600/20 rounded-full flex items-center justify-center">
                  <FolderOpen className="text-green-bright" size={64} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-bright/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-600/30 rounded-full animate-pulse"></div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6">Amazing Projects Coming Soon</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm currently working on exciting projects that will showcase my growing expertise 
                in frontend development. Each project will demonstrate different aspects of modern web development.
              </p>
              
              {/* Coming Soon Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: Globe, title: "Web Applications", desc: "Interactive user experiences" },
                  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first approach" },
                  { icon: Palette, title: "UI/UX Focus", desc: "Beautiful & functional" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-muted/20 rounded-xl border border-green-bright/10">
                    <div className="w-12 h-12 bg-green-bright/20 rounded-full flex items-center justify-center mb-3">
                      <item.icon className="text-green-bright" size={24} />
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Inspirational Quote */}
              <div className="bg-green-bright/10 border border-green-bright/20 rounded-2xl p-8">
                <blockquote className="text-2xl font-medium text-green-bright mb-4">
                  "Every expert was once a beginner. Every pro was once an amateur."
                </blockquote>
                <p className="text-muted-foreground">
                  Stay tuned for the journey ahead — great things are coming!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 section-padding bg-muted/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Let's Connect</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-green-bright to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or just chat about web development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-green-bright">Get In Touch</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a question, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's create something amazing together!
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "aryanpandit1017@gmail.com", link: "mailto:aryanpandit1017@gmail.com" },
                  { icon: Phone, label: "Phone", value: "8439401407", link: "tel:8439401407" },
                  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn - Aryan Sharma", link: "#" }
                ].map((contact, index) => (
                  <Card key={index} className="group bg-card/60 border-border hover:border-green-bright/50 transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm">
                    <CardContent className="p-6">
                      <a href={contact.link} className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-green-bright/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <contact.icon className="text-green-bright" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                          <p className="text-lg font-semibold">{contact.value}</p>
                        </div>
                        <ArrowRight className="text-green-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" size={20} />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Proof */}
              <Card className="bg-gradient-to-br from-green-bright/10 to-green-600/10 border-green-bright/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="text-green-bright mx-auto mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. Let's start the conversation!
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Contact Form */}
            <Card className="bg-card/80 border-green-bright/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Send Message</h3>
                  <p className="text-muted-foreground">Fill out the form below and I'll get back to you soon.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Your Name</label>
                    <Input
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-green-bright transition-colors duration-300 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-green-bright transition-colors duration-300 h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Message</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-green-bright transition-colors duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-green-bright hover:bg-green-600 text-black font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <ArrowRight size={20} />
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 section-padding border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-bright/5 via-transparent to-green-600/5"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <div className="text-2xl font-bold gradient-text mb-2">Aryan Sharma</div>
            <p className="text-muted-foreground">Frontend Developer • B.Tech Student • Future Full-Stack Developer</p>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-green-bright/50 to-transparent mb-6"></div>
          
          <p className="text-muted-foreground">
            © 2024 Aryan Sharma. Built with passion, precision, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

