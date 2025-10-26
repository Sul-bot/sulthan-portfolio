"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award, ChevronRight } from "lucide-react"

export default function AcademicPage() {
  const education = [
    {
      institution: "Institut Pertanian Bogor",
      location: "Bogor, Indonesia",
      degree: "Bachelor of Computer Science",
      period: "May 2022 - Jul 2026 (Expected)",
      gpa: "3.46 / 4.00",
      specialization: "Computational Intelligence Optimization Division",
      description: "Specialized in Computational Intelligence Optimization Division, integrating practical experience with Computer Science major",
      highlights: [
        "GPA: 3.46 out of 4.00",
        "Focus on Computational Intelligence and Optimization",
        "Active participation in research and development projects",
        "Strong foundation in algorithms, data structures, and software engineering"
      ]
    },
    {
      institution: "Bangkit Academy 2024",
      location: "Online",
      program: "Machine Learning Path",
      period: "2024 Batch 2",
      organizers: "Google, GoTo, and Traveloka",
      description: "Intensive machine learning program with hands-on projects and industry mentorship",
      highlights: [
        "Completed comprehensive Machine Learning curriculum",
        "Built sequence-based deep learning model for dietary analysis",
        "Worked on real-world capstone project with team collaboration",
        "Gained practical experience with TensorFlow and modern ML frameworks"
      ]
    }
  ]

  const achievements = [
    {
      title: "Finalist PIMNAS 37",
      category: "Social Research and Humanity",
      organizer: "Puspresnas and Kemendikbudristek",
      year: "2024",
      description: "National scientific competition finalist"
    },
    {
      title: "7 Habits of Highly Effective New College Students",
      category: "Service Module",
      organizer: "Dunamis Organization",
      year: "2022",
      description: "Leadership and personal development training"
    }
  ]

  const organizationalRoles = [
    {
      organization: "AIESEC In IPB",
      role: "Customer Data Specialist",
      period: "Aug 2023 - Feb 2025",
      location: "Bogor, Indonesia",
      type: "Non-profit Leadership Development",
      impact: [
        "Managed data for 120+ participants across 10+ events",
        "Achieved 9.5/10 satisfaction score in training sessions",
        "Earned 95% compliance grade from national board",
        "Developed standardized documentation and SOPs"
      ],
      description: "AIESEC is a global non-profit organization for youth leadership development"
    },
    {
      organization: "IEEE IPB Student Branch",
      role: "Web Development Division",
      period: "Dec 2023 - Present",
      location: "Bogor, Indonesia",
      type: "Professional Association",
      impact: [
        "Created engaging content to increase website visitors",
        "Developed prototype landing pages for website improvement",
        "Maintained and updated organizational web presence"
      ],
      description: "IEEE is the world's largest professional organization advancing technology through collaboration and innovation"
    }
  ]

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academic Background
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educational journey and organizational involvement shaping my expertise in Data Science and Machine Learning
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {edu.degree || edu.program}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {edu.institution}
                        </CardDescription>
                        {edu.organizers && (
                          <CardDescription className="text-sm text-muted-foreground mt-1">
                            Organized by: {edu.organizers}
                          </CardDescription>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 md:text-right">
                        <Badge variant="secondary" className="w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.period}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="w-fit mt-2">
                        GPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.specialization && (
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Specialization:</strong> {edu.specialization}
                      </p>
                    )}
                    <p className="text-muted-foreground italic mt-2">{edu.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-muted-foreground">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <CardDescription>{achievement.organizer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="secondary">{achievement.year}</Badge>
                      <p className="text-sm text-muted-foreground">{achievement.category}</p>
                      <p className="text-sm">{achievement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Organizational Experience Section */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Organizational Leadership
            </h2>
            <div className="space-y-8">
              {organizationalRoles.map((org, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{org.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {org.organization}
                        </CardDescription>
                        <Badge variant="outline" className="mt-2 w-fit">
                          {org.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-2 md:text-right">
                        <Badge variant="secondary" className="w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {org.period}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {org.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mt-2">{org.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Impact & Contributions:</h4>
                    <ul className="space-y-2">
                      {org.impact.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-muted-foreground">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
