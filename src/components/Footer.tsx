import Link from "next/link"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sulthan Farras Razin</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Data Science & Machine Learning Professional
            </p>
            <p className="text-sm text-muted-foreground">
              Computer Science graduate passionate about turning complex data into actionable insights.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/academic" className="text-muted-foreground hover:text-primary transition-colors">
                  Academic Background
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:sulthanrazin54131@gmail.com" className="hover:text-primary transition-colors">
                  sulthanrazin54131@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+62 882-1452-2941</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a 
                  href="https://www.linkedin.com/in/sulthan-razin-3993aa244/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/sulthanrazin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sulthan Farras Razin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
