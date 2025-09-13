"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { portfolioData } from "@/lib/data";

const AboutSection = () => {
  const { personal, skills, experience } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {personal.bio}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Skills & Expertise</h3>
            
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="mb-8">
                <h4 className="text-lg font-medium mb-4 capitalize text-primary">
                  {category === "frontend" ? "Frontend Development" :
                   category === "backend" ? "Backend Development" : 
                   "Tools & Technologies"}
                </h4>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <Badge variant="secondary" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Info */}
            <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-4">Get to Know Me</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Location:</span>
                    <p className="text-muted-foreground">{personal.location}</p>
                  </div>
                  <div>
                    <span className="font-medium">Email:</span>
                    <p className="text-muted-foreground">{personal.email}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-medium">Interests:</span>
                    <p className="text-muted-foreground mt-1">
                      Open source contribution, mentoring junior developers, photography, 
                      hiking, and exploring new technologies in AI and machine learning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;