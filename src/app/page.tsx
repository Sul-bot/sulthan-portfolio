"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Briefcase, GraduationCap, Code2, Award, Brain, Database, BarChart3, TrendingUp } from "lucide-react"

export default function Home() {
  const technicalSkills = [
    "Python", "TensorFlow", "SQL", "Machine Learning", "Deep Learning",
    "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "PyTorch",
    "Natural Language Processing", "Computer Vision", "Data Visualization",
    "Tableau", "Power BI", "Git", "Docker", "API Development"
  ]

  const softSkills = [
    "Data-Driven Decision Making", "Problem Solving", "Team Collaboration",
    "Communication", "Project Management", "Agile Methodologies",
    "Research & Documentation", "Leadership", "Adaptability"
  ]

  const certifications = [
    { title: "Machine Learning Specialization", provider: "Coursera - DeepLearning.AI" },
    { title: "TensorFlow Developer Certificate", provider: "Coursera - DeepLearning.AI" },
    { title: "Data Analysis with Python", provider: "Dicoding" },
    { title: "Career Essentials in Data Analysis", provider: "Microsoft & LinkedIn" },
    { title: "Data Engineering Foundations", provider: "Astronomer" },
    { title: "Data Science Professional Certificate", provider: "KNIME" },
    { title: "Agile Project Management", provider: "Atlassian & LinkedIn" },
    { title: "Data Governance", provider: "LinkedIn Learning" },
    { title: "Tableau Business Insights", provider: "LinkedIn Learning" },
    { title: "Advanced SQL for Data Engineering", provider: "LinkedIn Learning" },
    { title: "Bangkit Academy - Machine Learning Path", provider: "Google, GoTo, Traveloka" },
    { title: "Agile Scrum Fundamentals", provider: "MindMagine" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/5 to-purple-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
                Available for Opportunities
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sulthan Farras Razin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Data Science & Machine Learning Professional
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Computer Science graduate passionate about the complete data lifecycle — from analytics and AI 
              to data governance and operations. Transforming complex data into actionable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-1">3.56</div>
              <div className="text-sm text-muted-foreground">GPA / 4.00</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
            <Card className="border-primary/20">
              <CardContent className="p-6 md:p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 I am a data-driven professional with a strong focus on the complete data lifecycle — spanning analytics, Data Science, Artificial Intelligence, and data governance. A Computer Science graduate from Institut Pertanian Bogor with a GPA of 3.46, I continuously develop my expertise through various certifications across data disciplines, demonstrating adaptability, technical proficiency, and a commitment to continuous growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  With hands-on experience at <strong>BCA</strong>, <strong>GoTo</strong>, and <strong>AIESEC</strong>, 
                  I have contributed to building dashboards, evaluating AI models, optimizing data processes, and implementing 
                  Generative AI solutions. My work has included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6 ml-4">
                  <li>Fine-tuning GenAI models for behavioral scoring with up to 80% accuracy</li>
                  <li>Web scraping and collecting 15,000+ links and 2M+ tokens for AI training</li>
                  <li>Building dashboards to monitor 120+ participant engagement metrics</li>
                  <li>Developing neural networks and ML models with 86%+ accuracy</li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I thrive in dynamic environments, solving complex challenges, and delivering impactful, 
                  data-driven solutions that support strategic decisions. I am motivated to keep growing in 
                  data-related roles and turn complex information into clear, practical insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
              <p className="text-muted-foreground">
                Proficient in cutting-edge technologies and tools for data science and machine learning
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  {technicalSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Soft Skills</h2>
              <p className="text-muted-foreground">
                Essential professional skills that drive successful collaboration and project delivery
              </p>
            </div>
            <Card>
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Training</h2>
              <p className="text-muted-foreground">
                Continuous learning through industry-recognized certifications and courses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">{cert.provider}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Interested in collaborating on data science projects or discussing opportunities? 
                I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/experience">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Experience
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
