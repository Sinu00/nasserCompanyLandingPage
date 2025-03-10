"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Nasser Alotaibi Contracting provided exceptional manpower for our construction project. Their team was professional, skilled, and completed the work ahead of schedule.",
    author: "Ahmed Al-Farsi",
    position: "Project Manager, ABC Construction",
  },
  {
    id: 2,
    content:
      "We've been working with Nasser Alotaibi for over 5 years now. Their equipment rental service is reliable and their maintenance team is always responsive.",
    author: "Sarah Johnson",
    position: "Operations Director, XYZ Industries",
  },
  {
    id: 3,
    content:
      "The technical experts from Nasser Alotaibi Contracting helped us solve complex engineering challenges on our latest project. Highly recommended!",
    author: "Mohammed Al-Qahtani",
    position: "Chief Engineer, Global Development",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg bg-gray-50 p-8 md:p-12 shadow-lg">
        <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Quote className="h-6 w-6 text-orange-500" />
            </div>
          </div>
          <blockquote className="text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-700 italic">"{testimonials[current].content}"</p>
          </blockquote>
          <div className="text-center">
            <p className="font-bold text-lg">{testimonials[current].author}</p>
            <p className="text-gray-500">{testimonials[current].position}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true)
              setCurrent(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-orange-500" : "bg-gray-300 hover:bg-orange-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-lg md:flex hidden"
        onClick={prev}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-lg md:flex hidden"
        onClick={next}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}

