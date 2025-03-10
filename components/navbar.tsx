"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/80"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-orange-500 rounded-sm transform transition-transform hover:rotate-12 duration-300"></div>
                <div className="h-8 w-8 bg-orange-400 rounded-sm -ml-4 transform transition-transform hover:rotate-12 duration-300"></div>
                <div className="h-8 w-8 bg-orange-300 rounded-sm -ml-4 transform transition-transform hover:rotate-12 duration-300"></div>
              </div>
              <span className="font-bold text-xl">Nasser Alotaibi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-orange-500 relative ${
                isActive("/") ? "text-orange-500" : ""
              }`}
            >
              {isActive("/") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>}
              Home
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-orange-500 relative ${
                isActive("/services") ? "text-orange-500" : ""
              }`}
            >
              {isActive("/services") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>}
              Services
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-orange-500 relative ${
                isActive("/contact") ? "text-orange-500" : ""
              }`}
            >
              {isActive("/contact") && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500"></span>}
              Contact
            </Link>
            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105 shadow-md">
                <Phone className="mr-2 h-4 w-4" /> Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-orange-500 text-orange-500">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                    isActive("/") ? "text-orange-500" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                    isActive("/services") ? "text-orange-500" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium transition-colors hover:text-orange-500 ${
                    isActive("/contact") ? "text-orange-500" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4 transition-transform hover:scale-105 shadow-md">
                    <Phone className="mr-2 h-4 w-4" /> Get a Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

