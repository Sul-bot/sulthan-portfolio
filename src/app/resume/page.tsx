"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink } from "lucide-react"

export default function ResumePage() {
  const handleDownload = () => {
    // Trigger download dari file di folder public
    const link = document.createElement("a")
    link.href = "/sulthan-farras-razin-resume.pdf"
    link.download = "sulthan-farras-razin-resume.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Download my complete resume to learn more about my experience, skills, and qualifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleDownload}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/sulthan-razin-3993aa244/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Resume Preview Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Sulthan Farras Razin - Resume</CardTitle>
                  <CardDescription>
                    Data Science & Machine Learning Professional
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Resume Preview - Embedded PDF */}
              <iframe
                src="/sulthan-farras-razin-resume.pdf"
                className="w-full aspect-[8.5/11] rounded-lg border"
                title="Sulthan Farras Razin Resume PDF"
              />
            </CardContent>
          </Card>

          {/* Quick Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">Institut Pertanian Bogor</p>
                <p className="text-sm text-muted-foreground mb-2">B.Sc. Computer Science</p>
                <p className="text-sm font-medium">GPA: 3.46 / 4.00</p>
                <p className="text-xs text-muted-foreground mt-2">Expected: Jul 2026</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">Bank Central Asia</p>
                    <p className="text-xs text-muted-foreground">Data Science Intern</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">GoTo</p>
                    <p className="text-xs text-muted-foreground">Data Science Intern</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-sm">
                  <p>• Python, TensorFlow, SQL</p>
                  <p>• Machine Learning & AI</p>
                  <p>• Data Analysis & Visualization</p>
                  <p>• 12+ Certifications</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you'd like to discuss opportunities or learn more about my experience, 
                feel free to reach out. I'm always open to new challenges and collaborations.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">
                  Contact Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}