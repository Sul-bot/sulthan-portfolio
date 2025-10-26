"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Target, Wrench, TrendingUp, Github } from "lucide-react"

// Project data
const projectsData: Record<string, any> = {
  "flood-prediction": {
    title: "Flood Probability Prediction Using Deep Learning",
    category: "Data Mining",
    period: "2025",
    course: "Data Mining Subject",
    description: "Built a neural network model to predict flood probabilities using over 50,000 environmental and socioeconomic data entries, achieving exceptional accuracy for early warning systems.",
    challenge: "Flooding is a critical environmental hazard affecting communities worldwide. Predicting flood probability requires analyzing complex relationships between environmental factors like rainfall, urbanization, and drainage quality. Traditional methods often lack the accuracy needed for effective disaster mitigation.",
    approach: [
      "Collected and preprocessed 50,000+ rows of environmental and socioeconomic data",
      "Performed data normalization and outlier removal to improve model performance",
      "Designed and trained a Neural Network architecture optimized for regression tasks",
      "Conducted extensive hyperparameter tuning to maximize prediction accuracy",
      "Validated model performance using multiple metrics (R², RMSE, MAE)"
    ],
    results: [
      "Achieved R² Score of 0.9987, indicating near-perfect predictive capability",
      "RMSE of 0.0023 and MAE of 0.0018 demonstrate extremely low prediction error",
      "Model can accurately predict flood risk across diverse geographic conditions",
      "Findings support development of early flood warning systems",
      "Contributes to disaster mitigation planning and resource allocation"
    ],
    technologies: [
      "Python",
      "TensorFlow/Keras",
      "Neural Networks",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Data Preprocessing",
      "Regression Analysis"
    ],
    metrics: {
      "R² Score": "0.9987",
      "RMSE": "0.0023",
      "MAE": "0.0018",
      "Dataset Size": "50,000+ entries"
    },
    impact: "This model demonstrates the potential of deep learning for environmental prediction tasks and can be integrated into disaster management systems to provide early warnings and save lives.",
    imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80"
  },
  "irrigation-forecasting": {
    title: "Irrigation Demand Forecasting System",
    category: "Artificial Intelligence",
    period: "2025",
    course: "Artificial Intelligence Subject",
    description: "AI-powered system that predicts daily water requirements for agricultural irrigation using Decision Tree and Fuzzy Inference System algorithms based on climate data.",
    challenge: "Efficient water management is crucial for sustainable agriculture. Farmers need accurate predictions of irrigation requirements based on weather conditions to optimize water usage and crop yield while conserving resources.",
    approach: [
      "Collected climate data including rainfall, temperature, humidity, and wind speed",
      "Implemented Decision Tree algorithm for interpretable rule-based predictions",
      "Developed Fuzzy Inference System (FIS) to handle uncertainty in weather patterns",
      "Integrated both algorithms to provide robust and explainable forecasts",
      "Built visualization tools to display irrigation trends and recommendations"
    ],
    results: [
      "Decision Tree achieved RMSE of 0.016 and MAE of 0.014",
      "High prediction accuracy for daily water needs across different seasons",
      "Interpretable rules through FIS provide actionable insights for farmers",
      "Visual insights help identify patterns in irrigation requirements",
      "Supports efficient water use and promotes sustainable farming practices"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Decision Tree",
      "Fuzzy Logic",
      "Pandas",
      "Matplotlib",
      "Climate Data Analysis",
      "Agricultural Tech"
    ],
    metrics: {
      "RMSE": "0.016",
      "MAE": "0.014",
      "Algorithms": "Decision Tree + FIS",
      "Climate Factors": "4 variables"
    },
    impact: "This system empowers farmers with data-driven irrigation decisions, reducing water waste and improving crop yields through optimized resource management.",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  "heart-disease-prediction": {
    title: "Heart Disease Prediction using ACO-PSO Swarm Fusion",
    category: "Computational Intelligence",
    period: "2025",
    course: "Computational Intelligence Subject",
    description: "Hybrid optimization model combining Ant Colony Optimization (ACO) and Particle Swarm Optimization (PSO) with Random Forest to predict cardiovascular disease risk with 86.68% accuracy.",
    challenge: "Heart disease is a leading cause of death worldwide. Early prediction requires analyzing multiple health indicators, but traditional models often struggle with feature selection and hyperparameter optimization, leading to suboptimal accuracy.",
    approach: [
      "Utilized UCI Heart Disease dataset with 303 samples and 13 clinical features",
      "Applied Ant Colony Optimization (ACO) for intelligent feature selection",
      "Implemented Particle Swarm Optimization (PSO) for hyperparameter tuning",
      "Trained and compared Random Forest and XGBoost classifiers",
      "Validated using precision, recall, F1-score, and accuracy metrics",
      "Demonstrated superiority of ACO-PSO fusion over single optimization algorithms"
    ],
    results: [
      "Random Forest with ACO-PSO achieved best accuracy of 86.68%",
      "Superior performance metrics in precision, recall, and F1-score",
      "ACO-PSO fusion avoided local optima and improved convergence",
      "Model provides reliable tool for early cardiovascular risk assessment",
      "Outperformed traditional single-algorithm optimization approaches"
    ],
    technologies: [
      "Python",
      "Random Forest",
      "XGBoost",
      "Ant Colony Optimization",
      "Particle Swarm Optimization",
      "Scikit-learn",
      "Feature Selection",
      "Hyperparameter Tuning"
    ],
    metrics: {
      "Accuracy": "86.68%",
      "Dataset": "UCI (303 samples)",
      "Features": "13 clinical indicators",
      "Algorithms": "ACO + PSO + RF"
    },
    impact: "This hybrid optimization approach demonstrates significant potential for clinical decision support systems, enabling early detection and intervention for cardiovascular disease.",
    imageUrl: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&q=80"
  },
  "fruit-image-restoration": {
    title: "Fruit Image Restoration using Noise Filtering Techniques",
    category: "Image Digital Processing",
    period: "2025",
    course: "Image Digital Processing Subject",
    description: "Applied classical filtering techniques to restore fruit images degraded by various types of synthetic noise, achieving effective noise reduction while maintaining image structure.",
    challenge: "Image quality degradation from noise is a common problem in computer vision applications. Different noise types (Gaussian, salt-and-pepper, Rayleigh, Erlang) require specific filtering approaches to restore image quality without losing important structural details.",
    approach: [
      "Generated synthetic noise (Gaussian, salt-and-pepper, Rayleigh, Erlang) on fruit images",
      "Implemented multiple classical filters: geometric mean, harmonic mean, contraharmonic mean",
      "Applied median filter for salt-and-pepper noise and Wiener filter for Gaussian noise",
      "Developed pipeline using Python and OpenCV on Google Colaboratory",
      "Evaluated restoration quality using PSNR and SSIM metrics"
    ],
    results: [
      "Achieved average PSNR of 29.57 dB across all noise types",
      "Average SSIM of 0.7033 indicates good structural similarity preservation",
      "Effective noise reduction while maintaining image details",
      "Median filter particularly effective for salt-and-pepper noise",
      "Wiener filter optimal for Gaussian noise restoration",
      "Results confirm value of classical filters for image enhancement tasks"
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Image Processing",
      "Noise Filtering",
      "PSNR/SSIM Metrics",
      "Google Colab",
      "NumPy",
      "Matplotlib"
    ],
    metrics: {
      "Average PSNR": "29.57 dB",
      "Average SSIM": "0.7033",
      "Noise Types": "4 types",
      "Filters": "5 techniques"
    },
    impact: "This project demonstrates the effectiveness of classical filtering techniques for practical image restoration tasks, applicable to computer vision systems in agriculture, quality control, and food processing.",
    imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80"
  },
  "carbon-away": {
    title: "Carbon Away - Carbon Footprint Calculator",
    category: "Database",
    period: "2023",
    course: "Database Subject",
    description: "Environmental platform providing an efficient way for users to calculate their personal carbon footprint with advanced data processing and secure storage using Python and SQL.",
    challenge: "Climate change awareness requires accessible tools for individuals to understand and track their environmental impact. Building a system that accurately calculates carbon emissions from various activities while maintaining data integrity and performance is complex.",
    approach: [
      "Designed relational database schema to store user profiles and activity data",
      "Implemented carbon calculation algorithms based on vehicle usage and activities",
      "Developed backend using Python for data processing and validation",
      "Created SQL queries for efficient data retrieval and aggregation",
      "Built user scoreboard feature to compare and track emissions over time",
      "Designed responsive web interface for intuitive user experience"
    ],
    results: [
      "Accurate carbon footprint calculations based on user activities",
      "Efficient database operations supporting multiple concurrent users",
      "Scoreboard system encourages user engagement and competition",
      "Scalable architecture supporting future feature additions",
      "User-friendly interface making environmental awareness accessible"
    ],
    technologies: [
      "Python",
      "SQL",
      "Database Design",
      "ERD",
      "Web Development",
      "Data Validation",
      "Backend Development",
      "Environmental Tech"
    ],
    metrics: {
      "Database": "Relational SQL",
      "Features": "Calculator + Scoreboard",
      "Data Types": "Vehicle & Activities",
      "Architecture": "Client-Server"
    },
    impact: "Carbon Away empowers individuals to make informed decisions about their environmental impact, contributing to climate change awareness and encouraging sustainable lifestyle choices.",
    imageUrl: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&q=80"
  },
  "clinic-health-management": {
    title: "Clinic Health Management System",
    category: "Data Structure",
    period: "2024",
    course: "Data Structure Subject",
    description: "Healthcare management system implementing vectors, arrays, hash tables, and hashing algorithms for efficient patient data management, retrieval, and security.",
    challenge: "Healthcare facilities require robust systems to manage patient records, treatment schedules, and medical histories efficiently while ensuring data security and quick access. Choosing appropriate data structures is critical for system performance.",
    approach: [
      "Implemented vectors for managing dynamic treatment schedules",
      "Used arrays for efficient medical history storage and retrieval",
      "Deployed hash tables for O(1) patient data lookup performance",
      "Applied hashing algorithms to secure login credentials and sensitive data",
      "Designed intuitive interface for healthcare staff workflow",
      "Optimized data structures for specific medical operations"
    ],
    results: [
      "Fast patient data retrieval with hash table implementation",
      "Secure credential storage using modern hashing algorithms",
      "Efficient treatment schedule management with vector operations",
      "Streamlined medical history access through array structures",
      "Error-free operations with proper data validation",
      "Seamless healthcare delivery support with responsive system"
    ],
    technologies: [
      "Data Structures",
      "Vectors",
      "Arrays",
      "Hash Tables",
      "Hashing Algorithms",
      "Algorithm Design",
      "Security",
      "Healthcare IT"
    ],
    metrics: {
      "Data Structures": "4 types",
      "Lookup Time": "O(1) with hash",
      "Security": "Hashed credentials",
      "Use Case": "Healthcare"
    },
    impact: "This system demonstrates how proper data structure selection significantly improves healthcare IT system performance, enabling faster patient care and maintaining data security.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  "economic-clustering": {
    title: "Global Economic Clustering System Using K-Means",
    category: "Quantitative Method",
    period: "2024",
    course: "Quantitative Method Subject",
    description: "Clustering system categorizing countries based on economic profiles using K-Means algorithm with Silhouette Coefficient and Elbow Method for optimal cluster determination.",
    challenge: "Understanding global economic patterns requires grouping countries with similar economic characteristics. Determining the optimal number of clusters and validating clustering quality are key challenges in unsupervised learning.",
    approach: [
      "Collected and preprocessed GDP and per capita income data for multiple countries",
      "Implemented K-Means clustering algorithm to identify economic groups",
      "Applied Elbow Method to determine optimal number of clusters",
      "Used Silhouette Coefficient to validate cluster quality and separation",
      "Stored and managed cluster data using arrays and basic hashing",
      "Visualized clusters to reveal economic patterns and relationships"
    ],
    results: [
      "Successfully identified distinct groups of countries with similar economic profiles",
      "Optimal cluster number determined through Elbow Method analysis",
      "High Silhouette Coefficient indicating well-separated clusters",
      "Revealed meaningful economic patterns useful for policy analysis",
      "Efficient and secure data handling through proper data structures",
      "Insights support strategic economic policy formulation"
    ],
    technologies: [
      "Python",
      "K-Means Clustering",
      "Scikit-learn",
      "Silhouette Analysis",
      "Elbow Method",
      "Data Visualization",
      "Pandas",
      "Matplotlib"
    ],
    metrics: {
      "Algorithm": "K-Means",
      "Validation": "Silhouette + Elbow",
      "Features": "GDP + Income",
      "Use Case": "Economic Analysis"
    },
    impact: "This clustering system provides valuable insights for policymakers and economists to understand global economic distributions and formulate targeted strategies for economic development.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
  },
  "bike-rental-analysis": {
    title: "Bike Rental Data Analysis - Enhancing Business Strategies",
    category: "Dicoding Project",
    period: "2024",
    course: "Dicoding - Data Analysis with Python",
    description: "Comprehensive Python-based analysis of bike-rental data uncovering insights about usage patterns, seasonal trends, and weather impact to enhance business value and strategies.",
    challenge: "Bike-sharing businesses need to understand usage patterns to optimize operations, fleet distribution, and marketing strategies. Analyzing complex relationships between weather, seasons, and rental patterns requires systematic data exploration.",
    approach: [
      "Performed exploratory data analysis (EDA) on bike rental dataset",
      "Analyzed monthly rental trends to identify seasonal patterns",
      "Compared weekday vs. weekend usage behavior",
      "Investigated impact of weather conditions on rental demand",
      "Examined seasonal variations in bike-sharing usage",
      "Built interactive Streamlit dashboard for insight visualization",
      "Generated actionable business recommendations from findings"
    ],
    results: [
      "Identified peak rental periods and seasonal demand patterns",
      "Discovered significant weather impact on rental behavior",
      "Revealed weekday vs. weekend usage differences",
      "Created interactive dashboard for stakeholder presentations",
      "Generated data-driven recommendations for fleet optimization",
      "Improved understanding of customer behavior and preferences"
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Data Analysis",
      "Data Visualization"
    ],
    metrics: {
      "Platform": "Streamlit Dashboard",
      "Analysis Type": "EDA + Insights",
      "Data Points": "Multiple time periods",
      "Deliverable": "Interactive Dashboard"
    },
    impact: "This analysis provides bike-sharing businesses with actionable insights to optimize operations, improve customer targeting, and refine rental strategies based on environmental and temporal factors.",
    imageUrl: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&q=80"
  },
  "sugar-consumption-monitoring": {
    title: "Sugar Consumption Monitoring - Deep Learning Model",
    category: "Bangkit Project",
    period: "2024",
    course: "Bangkit Academy - Final Capstone Project",
    description: "Sequence-based deep learning model using TensorFlow to identify individuals exceeding daily sugar consumption limits based on user profiles, activities, and food consumption data.",
    challenge: "Excessive sugar consumption is a major health concern worldwide. Developing an automated system to monitor and identify individuals at risk requires analyzing sequential food intake data and understanding complex dietary patterns.",
    approach: [
      "Collected comprehensive dataset including user profiles and daily activities",
      "Gathered detailed food consumption data with sugar content information",
      "Designed sequence-based neural network architecture using TensorFlow",
      "Implemented data preprocessing pipeline for feature engineering",
      "Trained model using Adam optimizer with optimized batch size and epochs",
      "Utilized Dense layers with appropriate activation functions",
      "Validated model performance for dietary analysis applications"
    ],
    results: [
      "Successfully built robust deep learning model for sugar consumption prediction",
      "Model effectively identifies individuals exceeding daily sugar limits",
      "Achieved strong performance in dietary analysis and health monitoring",
      "Sequential architecture captures temporal patterns in food consumption",
      "Practical application for health monitoring and dietary intervention",
      "Scalable solution applicable to broader nutritional analysis"
    ],
    technologies: [
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "Sequential Models",
      "Dense Layers",
      "Adam Optimizer",
      "Feature Engineering",
      "Health Tech"
    ],
    metrics: {
      "Framework": "TensorFlow",
      "Model Type": "Sequential Neural Network",
      "Input Data": "Profile + Activity + Food",
      "Application": "Health Monitoring"
    },
    impact: "This project demonstrates the potential of AI in preventive healthcare, enabling early identification of individuals at risk from excessive sugar consumption and supporting targeted dietary interventions.",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  const project = projectsData[id]

  if (!project) {
    return (
      <div className="min-h-screen py-16 md:py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {project.period}
              </div>
              <div>
                {project.course}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Key Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground mb-1">{key}</p>
                    <p className="text-xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenge */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </CardContent>
          </Card>

          {/* Approach */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Approach & Methodology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.approach.map((item: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Results & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.results.map((item: string, index: number) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 border-primary/20">
            <CardHeader>
              <CardTitle>Impact & Significance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/projects">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                Discuss This Project
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
