
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectType } from './Projects';
import { BadgeCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-foreground/70 font-medium">
            {project.role}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Project Description</h3>
          <ul className="space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2">
                <BadgeCheck className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
