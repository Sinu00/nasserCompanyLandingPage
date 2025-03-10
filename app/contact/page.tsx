"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import BackToTop from "@/components/back-to-top"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", formData)
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We will get back to you soon!",
        duration: 5000,
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-gray-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">Contact Us</h1>
            <p className="text-xl text-gray-200 animate-slideUp animation-delay-200">
              Get in touch with our team for any inquiries or to discuss your project needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-gray-600">123 Business Avenue, Industrial District, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Phone className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Number</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                    <p className="text-gray-600">+1 (234) 567-8901</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Mail className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-600">info@nasseralotaibi.com</p>
                    <p className="text-gray-600">support@nasseralotaibi.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Clock className="h-5 w-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow-lg transform transition-transform hover:shadow-xl duration-300">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Message subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="transition-all focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="transition-all focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105 w-full md:w-auto shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 h-[400px] rounded-lg w-full flex items-center justify-center overflow-hidden shadow-lg transform transition-transform hover:shadow-xl duration-300">
            <p className="text-gray-600">Map would be embedded here</p>
            {/* In a real implementation, you would embed a Google Map or other map service here */}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}

