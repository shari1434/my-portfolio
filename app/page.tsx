'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
      link: "#",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with real-time updates.",
      link: "#",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing web development projects.",
      link: "#",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  const expertise = ['React', 'Next.js', 'Redux', 'TypeScript', 'HTML/CSS', '.NET Core', 'SQL']

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section className="text-center mb-16 relative" {...fadeIn}>
        <h1 className="text-5xl mb-4 relative z-10 inline-block">
          Muhammad Shaheer
        </h1>
        <p className="text-xl mb-8 relative z-10 text-muted-foreground font-serif italic">
          Professional Web Developer
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-none vintage-border transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg">
          <Link href="/contact">
            Get in Touch
          </Link>
        </Button>
      </motion.section>

      <motion.section className="mb-16 relative" {...fadeIn} transition={{ delay: 0.2 }}>
        <h2 className="text-3xl mb-4 text-center">About Me</h2>
        <Card className="vintage-card p-6">
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Greetings! I am Muhammad Shaheer, a seasoned web developer with over a years of experience crafting 
              bespoke, responsive, and user-centric websites and applications. My expertise encompasses front-end 
              development utilizing React, Next.js, and Redux, complemented by proficient back-end development with .NET Core.
            </p>
            <p className="text-muted-foreground">
              I take pride in writing clean, efficient code and staying abreast of the latest web technologies. 
              Beyond my professional endeavors, I immerse myself in exploring emerging tech trends, contributing to 
              open-source initiatives, and sharing insights through technical writing and community engagements.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section className="mb-16 relative" {...fadeIn} transition={{ delay: 0.4 }}>
        <h2 className="text-3xl mb-4 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} {...fadeIn} transition={{ delay: 0.2 * (index + 1) }}>
              <Card className="vintage-card overflow-hidden group">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-none vintage-border">
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <h2 className="text-3xl mb-6 text-center">Expertise</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {expertise.map((skill, index) => (
            <motion.span
              key={skill}
              className="bg-accent text-accent-foreground px-4 py-2 rounded-none vintage-border text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

