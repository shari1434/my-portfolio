'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // EmailJS Configuration
    const serviceID = 'service_nmnsqdh'
    const templateID = 'template_ttnbfcg'
    const publicKey = 'E_vlJnJXP20dnEV4z'

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. I'll get back to you soon!",
        })
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        toast({
          title: "Error Sending Message",
          description: "Oops! Something went wrong. Please try again later.",
          variant: "destructive"
        })
      })
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <motion.h1 className="text-4xl mb-8 text-center relative z-10" {...fadeIn}>
        Get in Touch
      </motion.h1>
      <motion.form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10 vintage-card p-8" {...fadeIn} transition={{ delay: 0.2 }}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-input rounded-none vintage-border focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-input rounded-none vintage-border focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border-input rounded-none vintage-border focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={5}
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-4 rounded-none vintage-border transition-all duration-300 transform hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg">
          Send Message
        </Button>
      </motion.form>
    </div>
  )
}

