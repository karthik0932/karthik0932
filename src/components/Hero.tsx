
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone, Code, Database, Server, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  
  useEffect(() => {
    // Set typing complete after the animation duration
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 4500); // Animation is 3.5s + 1s delay
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
              <span className={cn(
                "inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500",
                typingComplete ? "permanent typing-animation" : "typing-animation"
              )}>Karthik S</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-5">
              <span className="highlight">.NET Developer</span> & <span className="highlight">RPA Specialist</span>
            </h2>
            
            <div className="relative overflow-hidden w-full py-3 mb-8 bg-background/50 rounded-md shadow-sm">
              <div className="animate-marquee whitespace-nowrap">
                <span className="inline-flex items-center text-lg text-primary font-medium mx-4">
                  <Code className="h-4 w-4 mr-2" /> Aspiring DevOps Engineer
                </span>
                <span className="inline-flex items-center text-lg text-muted-foreground mx-4">
                  <Server className="h-4 w-4 mr-2" /> CI/CD Pipelines
                </span>
                <span className="inline-flex items-center text-lg text-primary font-medium mx-4">
                  <Cloud className="h-4 w-4 mr-2" /> Cloud Infrastructure
                </span>
                <span className="inline-flex items-center text-lg text-muted-foreground mx-4">
                  <Database className="h-4 w-4 mr-2" /> Infrastructure as Code
                </span>
                <span className="inline-flex items-center text-lg text-primary font-medium mx-4">
                  <Code className="h-4 w-4 mr-2" /> Kubernetes & Docker
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I build scalable web applications and automate business processes, while exploring 
              DevOps methodologies to improve deployment pipelines and system reliability.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://www.linkedin.com/in/karthik-shivanna" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 hover-card">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/karthik0932" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2 hover-card">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="mailto:karthiks9066@gmail.com">
                      <Button variant="outline" className="flex items-center gap-2 hover-card">
                        <Mail className="h-4 w-4" />
                        Email
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-medium">karthiks9066@gmail.com</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="tel:9066263802">
                      <Button variant="outline" className="flex items-center gap-2 hover-card">
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-medium">9066263802</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex gap-4">
              <a href="#projects">
                <Button className="flex items-center gap-2 hover-card">
                  View My Projects
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </a>
              
              <a href="/lovable-uploads/0288e8c2-7ef4-420f-a93b-02dd561edf34.png" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="flex items-center gap-2 hover-card">
                  View Resume
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="devops-avatar-container">
                <div className="devops-avatar-item">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div className="devops-avatar-item" style={{ animationDelay: '1s' }}>
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <div className="devops-avatar-item" style={{ animationDelay: '2s' }}>
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="devops-avatar-item" style={{ animationDelay: '3s' }}>
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold relative avatar-pulse">
                  <span className="tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">KS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
