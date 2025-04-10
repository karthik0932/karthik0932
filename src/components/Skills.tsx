
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Database, Server, FileCode, Briefcase, Cloud, GitBranch, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "C#", level: 90 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      name: "Frameworks",
      icon: <FileCode className="h-5 w-5" />,
      skills: [
        { name: ".NET", level: 90 },
        { name: "ASP.NET", level: 85 },
        { name: "MVC", level: 80 },
        { name: "Entity Framework", level: 75 },
      ]
    },
    {
      name: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "SQL Server", level: 85 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      name: "Automation",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Power Automate", level: 90 },
        { name: "RPA", level: 85 },
        { name: "Excel Automation", level: 80 },
        { name: "Web Scraping", level: 75 },
        { name: "API Integration", level: 80 },
      ]
    },
    {
      name: "DevOps",
      icon: <GitBranch className="h-5 w-5" />,
      skills: [
        { name: "CI/CD Pipelines", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Git/GitHub", level: 80 },
        { name: "Azure DevOps", level: 75 },
        { name: "Infrastructure as Code", level: 65 },
        { name: "Monitoring & Logging", level: 70 },
      ]
    },
    {
      name: "Other",
      icon: <Briefcase className="h-5 w-5" />,
      skills: [
        { name: "Confluence Documentation", level: 85 },
        { name: "Data Processing", level: 80 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <span className="highlight">Technical Skills</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I've developed expertise in various technologies and tools throughout my career, with a focus on .NET development, automation, and expanding into DevOps practices.
        </p>

        <Tabs defaultValue={skillCategories[0].name} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name} className="flex items-center gap-2 py-3">
                {category.icon}
                <span className="hidden md:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {skillCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="animate-fade-in">
              <Card className="border border-primary/10 shadow-lg">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar bg-primary/10">
                          <div 
                            className="skill-progress transition-all duration-1000" 
                            style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
