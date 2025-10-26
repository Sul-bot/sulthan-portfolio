"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Brain, Image as ImageIcon, Activity, Droplets, GitBranch, Bike, Utensils } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      id: "flood-prediction",
      title: "Flood Probability Prediction",
      category: "Data Mining",
      description: "Neural network model predicting flood risk using 50,000+ environmental data entries with 99.87% R² score",
      icon: Droplets,
      tags: ["Neural Networks", "Python", "Deep Learning", "Environmental Data"],
      metrics: ["R² Score: 0.9987", "RMSE: 0.0023", "MAE: 0.0018"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "irrigation-forecasting",
      title: "Irrigation Demand Forecasting",
      category: "Artificial Intelligence",
      description: "AI system predicting daily water needs using Decision Tree and Fuzzy Inference System based on climate data",
      icon: Droplets,
      tags: ["Decision Tree", "Fuzzy Logic", "Python", "Scikit-learn"],
      metrics: ["RMSE: 0.016", "MAE: 0.014"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "heart-disease-prediction",
      title: "Heart Disease Prediction",
      category: "Computational Intelligence",
      description: "ACO-PSO optimized model with Random Forest achieving 86.68% accuracy for cardiovascular risk prediction",
      icon: Activity,
      tags: ["ACO", "PSO", "Random Forest", "XGBoost", "Optimization"],
      metrics: ["Accuracy: 86.68%", "UCI Dataset: 303 samples"],
      color: "from-red-500 to-pink-500"
    },
    {
      id: "fruit-image-restoration",
      title: "Fruit Image Restoration",
      category: "Image Digital Processing",
      description: "Classical filtering techniques to restore fruit images degraded by synthetic noise using OpenCV",
      icon: ImageIcon,
      tags: ["OpenCV", "Image Processing", "Python", "Filters"],
      metrics: ["PSNR: 29.57 dB", "SSIM: 0.7033"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: "carbon-away",
      title: "Carbon Away",
      category: "Database",
      description: "Environmental platform for calculating personal carbon footprint with efficient data management using Python and SQL",
      icon: Database,
      tags: ["SQL", "Python", "Web Development", "Environmental Tech"],
      metrics: ["Carbon Calculator", "User Scoreboard"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "clinic-health-management",
      title: "Clinic Health Management System",
      category: "Data Structure",
      description: "Healthcare system using vectors, arrays, hash tables for efficient patient data management and security",
      icon: Activity,
      tags: ["Data Structures", "Algorithms", "Healthcare", "Security"],
      metrics: ["Vector & Array", "Hash Tables", "Hashing Security"],
      color: "from-purple-500 to-violet-500"
    },
    {
      id: "economic-clustering",
      title: "Global Economic Clustering",
      category: "Quantitative Method",
      description: "K-Means clustering system categorizing countries based on GDP and income with optimal cluster determination",
      icon: GitBranch,
      tags: ["K-Means", "Silhouette Coefficient", "Elbow Method", "Python"],
      metrics: ["Silhouette Coefficient", "Elbow Method"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "bike-rental-analysis",
      title: "Bike Rental Data Analysis",
      category: "Dicoding Project",
      description: "Python-based analysis of bike-rental data uncovering insights to enhance business value and strategies",
      icon: Bike,
      tags: ["Python", "Pandas", "Data Analysis", "Streamlit"],
      metrics: ["Business Insights", "Streamlit Dashboard"],
      color: "from-sky-500 to-blue-500"
    },
    {
      id: "sugar-consumption-monitoring",
      title: "Sugar Consumption Monitoring",
      category: "Bangkit Project",
      description: "Sequence-based deep learning model identifying excess daily sugar consumption using TensorFlow",
      icon: Utensils,
      tags: ["TensorFlow", "Deep Learning", "Sequential Model", "Health Tech"],
      metrics: ["User Profile Analysis", "Food Consumption Data"],
      color: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects Portfolio
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of data science, machine learning, and AI projects demonstrating practical application 
              of cutting-edge technologies to solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Link href={`/projects/${project.id}`} key={project.id}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {project.metrics && (
                        <div className="mb-4 space-y-1">
                          {project.metrics.slice(0, 2).map((metric, idx) => (
                            <p key={idx} className="text-xs text-muted-foreground">
                              • {metric}
                            </p>
                          ))}
                        </div>
                      )}
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  These projects showcase my expertise in data science, machine learning, and AI. 
                  I'm always open to discussing new opportunities and collaborations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/resume">
                    <Button size="lg" variant="outline">
                      View Resume
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
