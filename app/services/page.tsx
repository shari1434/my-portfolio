'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Bespoke web applications tailored to your needs using React, Next.js, and .NET Core.",
    },
    {
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces with React, Redux, and modern CSS techniques.",
    },
    {
      title: "Backend Development",
      description: "Scalable and efficient server-side solutions with .NET Core and SQL databases.",
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end application development combining frontend and backend expertise.",
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration with your systems.",
    },
    {
      title: "Performance Optimization",
      description: "Enhance the speed and efficiency of your existing web applications.",
    },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <motion.h1 className="text-4xl mb-8 text-center relative z-10" {...fadeIn}>
        Services Offered
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div key={index} {...fadeIn} transition={{ delay: 0.1 * index }}>
            <Card className="vintage-card h-full group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-primary group-hover:text-primary/80 transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

