
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

export interface ProjectType {
  id: number;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Employee Management System",
      role: ".NET Developer",
      description: "A scalable system for managing employee data and HR processes.",
      highlights: [
        "Developed a scalable Employee Management System using ASP.NET Core and Entity Framework, reducing HR manual data entry by 50%.",
        "Implemented role-based authentication and user management.",
        "Designed a RESTful API for seamless communication between frontend and backend.",
        "Integrated SQL Server for data storage and retrieval."
      ],
      technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "RESTful API", "Authentication"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Invoice Processing Automation",
      role: "RPA Developer",
      description: "Automated solution for processing and storing invoice data.",
      highlights: [
        "Automated invoice processing using Power Automate to extract data from PDFs.",
        "Stored extracted data in Excel and SQL databases.",
        "Sent email notifications for processed invoices.",
        "Reduced manual effort by 80% through automation."
      ],
      technologies: ["Power Automate", "Excel", "SQL", "PDF Processing", "Email Automation"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "ERA Payment Posting Bot",
      role: "RPA Developer",
      description: "Automated solution for ERA payment processing and posting.",
      highlights: [
        "Automated ERA payment posting to minimize manual effort and improve processing efficiency.",
        "Logged into the ERA payment portal using valid credentials.",
        "Identified and downloaded PDF files containing payment details.",
        "Extracted necessary payment data and stored it in an Excel file.",
        "Searched for client records within the portal and applied corresponding adjustments.",
        "Processed payments automatically and logged missing data in a centralized log.",
        "Sent email notifications summarizing processed and missing records."
      ],
      technologies: ["RPA", "Excel Automation", "Data Processing", "PDF Extraction", "Web Automation"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const openProjectModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="highlight">My Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here are some key projects I've worked on. Click on "View Details" to learn more about each project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={project.id} className="card-hover animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-white/80">{project.role}</p>
                  </div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="font-medium text-primary">
                  {project.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1"
                  onClick={() => openProjectModal(project)}
                >
                  <Eye className="h-4 w-4" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectModal} 
      />
    </section>
  );
};

export default Projects;
