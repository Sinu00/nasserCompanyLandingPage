import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Building2, Briefcase, Truck, HardHat, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import BackToTop from "@/components/back-to-top"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Construction site"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slideUp">Our Services</h1>
            <p className="text-xl text-gray-200 animate-slideUp animation-delay-200">
              Comprehensive manpower and equipment solutions for your projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-medium mb-2">WHAT WE OFFER</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Manpower Solutions</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We provide a wide range of services to meet the diverse needs of our clients in the construction and
              industrial sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Users className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Skilled Labor</h4>
              <p className="text-gray-600 mb-6">
                We provide highly trained professionals for various roles including masons, carpenters, electricians,
                plumbers, and more.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <HardHat className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Technical Experts</h4>
              <p className="text-gray-600 mb-6">
                Our team includes engineers, project managers, supervisors, and technical consultants to oversee and
                manage your projects.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Building2 className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Light Equipment</h4>
              <p className="text-gray-600 mb-6">
                Access to a wide range of light equipment including power tools, generators, compressors, and more for
                your construction needs.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Truck className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Heavy Equipment</h4>
              <p className="text-gray-600 mb-6">
                We offer heavy machinery including excavators, bulldozers, cranes, and loaders for large-scale
                construction projects.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Briefcase className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Project Management</h4>
              <p className="text-gray-600 mb-6">
                Comprehensive project management services to ensure your projects are completed on time, within budget,
                and to your specifications.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:shadow-xl hover:-translate-y-2 duration-300 group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Wrench className="h-7 w-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-4">Maintenance Services</h4>
              <p className="text-gray-600 mb-6">
                Regular maintenance and repair services for both equipment and facilities to ensure optimal performance
                and longevity.
              </p>
              <Link href="#" className="text-orange-500 font-medium flex items-center group-hover:text-orange-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-medium mb-2">OUR PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">How We Work</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures that we understand your requirements and deliver solutions that meet your
              specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transform transition-transform group-hover:scale-110 duration-300">
                1
              </div>
              <h4 className="text-xl font-bold mb-4">Consultation</h4>
              <p className="text-gray-600">We begin by understanding your project requirements and specific needs.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transform transition-transform group-hover:scale-110 duration-300">
                2
              </div>
              <h4 className="text-xl font-bold mb-4">Planning</h4>
              <p className="text-gray-600">
                Our team develops a comprehensive plan tailored to your project specifications.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transform transition-transform group-hover:scale-110 duration-300">
                3
              </div>
              <h4 className="text-xl font-bold mb-4">Execution</h4>
              <p className="text-gray-600">
                We deploy our skilled workforce and equipment according to the agreed plan.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 transform transition-transform group-hover:scale-110 duration-300">
                4
              </div>
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <p className="text-gray-600">We provide ongoing support and monitoring to ensure project success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can provide the manpower and equipment solutions for your next project.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 transition-transform hover:scale-105"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}

