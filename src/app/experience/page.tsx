"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Bank Central Asia",
      location: "Jakarta, Indonesia",
      role: "Data Science Intern",
      period: "Aug 2025 - Dec 2025",
      description: "Focused on Generative AI and Voice-to-Text technologies for Call Center automation",
      achievements: [
        "Researched, explored, and fine-tuned Generative AI models to enhance automatic behavioral scoring for Call Center agents based on Voice-to-Text (VTT) transcripts, improving accuracy and consistency in evaluation",
        "Implemented audio pre- and post-processing pipelines, increasing transcription accuracy by 10–20%, and compared 7 state-of-the-art models including OpenAI Whisper, Whisper-VLLM, and Qwen variants to identify the most efficient in performance, runtime, and user alignment",
        "Developed and deployed a custom VTT API integrated with the agent scoring system, automating assessment workflows within BCA KPR product operations and achieving up to 80% scoring accuracy",
        "Designed detailed system documentation and flow diagrams outlining the end-to-end scoring agent architecture to ensure scalability, reproducibility, and seamless deployment",
        "Labeled and analyzed 15,000+ customer chat transcripts from Halo BCA, categorizing user inputs into information requests, feedback, and complaints, providing actionable insights and financial domain understanding for model training"
      ],
      skills: ["Generative AI", "Voice-to-Text", "OpenAI Whisper", "Python", "API Development", "Model Fine-tuning", "Data Labeling"]
    },
    {
      company: "GoTo",
      location: "Jakarta, Indonesia",
      role: "Data Science Intern",
      period: "Jan 2025 - Jul 2025",
      description: "Data collection, web scraping, and AI model evaluation for various GoTo products",
      achievements: [
        "Successfully scraped 20+ websites using Python and EzScrape, automating large-scale data extraction, resulting in the collection of 15,000+ links and extraction of over 2 million tokens to optimize structured data pipelines for AI training",
        "Conducted research on data augmentation and model efficiency, analyzing multiple papers and journals on Web Rephrasing Data and synthetic text generation to improve model accuracy before deployment",
        "Conducted data annotation and validation using Label Studio, labeling 800+ pickup points for GoRide, GoCar, and GoSend, and categorizing 1,500+ food items to enhance the AI-based recommendation system for GoFood",
        "Contributed to the DIRA voice assistant project by collecting 500+ voice samples, and participated in evaluating and testing 1000+ AI prompts, thinking models, and chatbot responses for Sahabat GoTo's conversational AI system"
      ],
      skills: ["Web Scraping", "Python", "EzScrape", "Label Studio", "Data Annotation", "AI Model Evaluation", "NLP"]
    }
  ]

  const organizationalExperiences = [
    {
      organization: "AIESEC In IPB",
      location: "Bogor, Indonesia",
      role: "Customer Data Specialist",
      period: "Aug 2023 - Feb 2025",
      description: "Managing participant data and engagement metrics for leadership development programs",
      achievements: [
        "Built and maintained a Google Sheets–based dashboard to monitor 120+ participant engagement metrics and attendance across 10+ events, enabling real-time performance tracking and data-driven decision-making",
        "Conducted onboarding and engagement sessions, achieving an average satisfaction score of 9.5/10, while continuously refining training flow and documentation based on participant feedback and performance metrics",
        "Developed and standardized operational documentation (SOPs, templates, and event timelines) that successfully passed internal audits, earning a compliance grade of 95% from the national board"
      ],
      skills: ["Data Analysis", "Google Sheets", "Dashboard Development", "Documentation", "Project Management"]
    },
    {
      organization: "IEEE IPB Student Branch",
      location: "Bogor, Indonesia",
      role: "Web Development",
      period: "Dec 2023 - Present",
      description: "Developing web content and prototypes for IEEE IPB",
      achievements: [
        "Created engaging content and updates about activities and news on the website to increase total visitors",
        "Designed and developed prototype landing pages for website improvements and enhanced user experience"
      ],
      skills: ["Web Development", "UI/UX Design", "Content Management", "Prototyping"]
    }
  ]

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional journey in Data Science and Machine Learning with hands-on experience at leading tech companies
            </p>
          </div>

          {/* Work Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 md:text-right">
                        <Badge variant="secondary" className="w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">{exp.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-2 text-muted-foreground">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              Organizational Experience
            </h2>
            <div className="space-y-8">
              {organizationalExperiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div>
                        <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {exp.organization}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 md:text-right">
                        <Badge variant="secondary" className="w-fit">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">{exp.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Contributions:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex gap-2 text-muted-foreground">
                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Skills Applied:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
