
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Karthik Shivanna
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
              <span className="highlight">.NET Developer</span> & <span className="highlight">RPA Specialist</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I build scalable web applications and automate business processes to deliver efficient, user-friendly solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://www.linkedin.com/in/karthik-shivanna" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/karthik0932" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="mailto:karthiks9066@gmail.com">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </a>
              <a href="tel:9066263802">
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </a>
            </div>
            
            <a href="#projects">
              <Button className="flex items-center gap-2">
                View My Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-secondary opacity-90 flex items-center justify-center text-white text-6xl font-bold">
              K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
