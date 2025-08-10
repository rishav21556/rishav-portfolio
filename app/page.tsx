"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Portfolio() {
  const [openProfileDialog, setOpenProfileDialog] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "React", level: 95, icon: Code },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "Next.js", level: 88, icon: Globe },
    { name: "Node.js", level: 85, icon: Code },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Nest.js", level: 90, icon: Code }
  ]

  const projects = [
    {
      title: "Shivadhesh",
      description: "This project aims to create a robust and feature-rich e-commerce website called Shivadhesh.",
      image: "/modern-ecommerce-interface.png",
      tech: ["JavaScript", "Django", "PostgreSQL", "Tailwind"],
      github: "https://github.com/rishav21556/shivadhesh",
      live: "https://shivadhesh.onrender.com/",
    },
    {
      title: "MetroSense",
      description:
        "A web-based personal travel assistant designed to aid visually impaired individuals navigating the Delhi Metro. Integrates real-time image capture, voice input, object detection, and visual question answering to deliver contextual guidance.",
      image: "/task-management-dashboard.png",
      tech: ["Flask", "Roboflow", "OpenRouter API (LLAMA 3.2 Vision)", "YOLOv11", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/rishav21556/MetroSense",
      live: "https://metrosense.onrender.com/",
    },
  ]

  const experiences = [
    {
      title: "Software Engineer",
      company: "Lumio Partners and Private Limited",
      period: "May 2025 - Present",
      description:
        "Designed and developed RESTful APIs using NestJS, created a Selenium-based automation tool, developed a chatbot to handle user queries related to order status, inventory levels, robot movements, and system requirements and developed frontend using Next JS.",
    },
    {
      title: "Undergraduate Researcher",
      company: "Complex Systems Lab",
      period: "Aug 2024 - Nov 2024",
      description:
        "Extended previous work on the Ratatouille Tool for novel recipe generation by fine-tuning large language models to improve recipe quality and generation efficiency. Implemented parameter-efficient fine-tuning techniques (LoRA) to optimise model adaptation with minimal computational requirements.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors cursor-pointer ${
                    activeSection === item ? "text-white" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-white hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <div className="mb-8 relative">
            <Dialog open={openProfileDialog} onOpenChange={setOpenProfileDialog}>
              <DialogTrigger asChild>
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden flex items-center justify-center cursor-pointer">
                  <Image
                    src="/professional-headshot.jpg"
                    alt="Profile"
                    width={256}
                    height={256}
                    className="rounded-full w-full h-full object-cover object-top"
                  />
                </div>
              </DialogTrigger>
              <DialogContent showCloseButton={false} className="flex items-center justify-center bg-transparent border-none shadow-none max-w-xl">
                <div className="w-96 h-96 rounded-full overflow-hidden flex items-center justify-center bg-white">
                  <Image
                    src="/professional-headshot.jpg"
                    alt="Profile Large"
                    width={384}
                    height={384}
                    className="rounded-full w-full h-full object-cover object-top"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Rishav Raj
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">Software Engineer</p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate Software Engineer crafting efficient, scalable, and user-focused solutions. Skilled in building
            robust applications, optimizing performance, and turning ideas into impactful digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 text-white cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Link
              href="https://drive.google.com/file/d/1bRbrjP0jzX5lsZOSmT_ZieT2UnxJAcnZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-transparent border border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/rishav21556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishav-raj-710765262"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:social.rishav.2003@gmail.com"
              className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software engineer, creating digital solutions that make a difference. My journey in
                tech started with a curiosity about how things work, and it has evolved into a career dedicated to
                building exceptional solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community. I believe in continuous learning and staying
                up-to-date with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-gray-300">8</div>
                  <div className="text-gray-400">months Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800/20 to-gray-600/20 rounded-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300"></div>
              <div className="absolute inset-0 w-full h-96 bg-white/5 backdrop-blur-sm rounded-2xl transform -rotate-3 hover:-rotate-6 transition-transform duration-300 flex items-center justify-center">
                <Image src="/developer-workspace.png" alt="Workspace" width={300} height={300} className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={skill.name}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className="text-white mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-400">{skill.level}%</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-800/20 text-gray-300 border-gray-600/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={exp.title}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="border-white text-white w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-400">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="mailto:social.rishav.2003@gmail.com" className="group cursor-pointer">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Mail className="text-white mx-auto mb-4 group-hover:text-gray-300 transition-colors" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">social.rishav.2003@gmail.com</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="tel:+918076568655" className="group cursor-pointer">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Phone className="text-white mx-auto mb-4 group-hover:text-gray-300 transition-colors" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 8076568655</p>
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=Delhi,India"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <MapPin className="text-white mx-auto mb-4 group-hover:text-gray-300 transition-colors" size={32} />
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Delhi, India</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 text-white cursor-pointer"
            asChild
          >
            <Link href="mailto:social.rishav.2003@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Rishav Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
