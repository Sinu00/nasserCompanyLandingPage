import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Users, Briefcase, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialSlider from "@/components/testimonial-slider"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/nasserimage2.png"
            alt="Corporate buildings"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
              Professional Manpower Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slideUp animation-delay-200">
              Providing skilled workforce and equipment for your construction and industrial projects
            </p>
            <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-300">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105"
                >
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white hover:bg-white/20 transition-transform hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-orange-500 font-medium mb-2">WHAT WE DO</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">We Develop Comprehensive Solutions</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Skilled Manpower</h4>
              <p className="text-gray-600">
                We provide highly trained professionals for construction, industrial, and technical projects.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600 group"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Equipment Rental</h4>
              <p className="text-gray-600">
                Access to top-quality light and heavy equipment for construction and industrial needs.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600 group"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Project Management</h4>
              <p className="text-gray-600">
                Comprehensive project management services to ensure timely and efficient completion.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center mt-4 text-orange-500 font-medium hover:text-orange-600 group"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-orange-500 font-medium mb-2">ABOUT US</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner in Manpower Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                With years of experience in the industry, Nasser Alotaibi Contracting has established itself as a
                leading provider of manpower and equipment solutions. We pride ourselves on delivering reliable,
                efficient, and cost-effective services to our clients.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of professionals is committed to understanding your unique requirements and providing tailored
                solutions that meet your specific needs.
              </p>
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-transform hover:scale-105">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <Image
                src="/nasserimage3.png"
                alt="Construction workers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-orange-500 font-medium mb-2">TESTIMONIALS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h3>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can provide the manpower and equipment solutions for your next project.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 transition-transform hover:scale-105"
            >
              Contact Us <Phone className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}

