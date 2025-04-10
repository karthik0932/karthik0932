
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "karthiks9066@gmail.com",
      href: "mailto:karthiks9066@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "9066263802",
      href: "tel:9066263802"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "karthik-shivanna",
      href: "https://www.linkedin.com/in/karthik-shivanna"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "karthik0932",
      href: "https://github.com/karthik0932"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="highlight">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I'm currently available for freelance work and full-time positions. If you'd like to work together or have any questions, feel free to contact me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href} 
                    target={item.label === "LinkedIn" || item.label === "GitHub" ? "_blank" : undefined}
                    rel={item.label === "LinkedIn" || item.label === "GitHub" ? "noopener noreferrer" : undefined}
                    className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground mb-4">
                As a .NET Developer and RPA Specialist, I bring a unique blend of software development and process automation expertise to help businesses improve efficiency and scalability.
              </p>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Achievements</h4>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Created and maintained a Confluence page for automation project documentation.</li>
                  <li>Standardized workflows, improving onboarding and knowledge sharing.</li>
                </ul>
              </div>
              <Button className="w-full">Download Resume</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
