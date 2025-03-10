import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-orange-500 rounded-sm"></div>
                <div className="h-6 w-6 bg-orange-400 rounded-sm -ml-3"></div>
                <div className="h-6 w-6 bg-orange-300 rounded-sm -ml-3"></div>
              </div>
              <span className="font-bold text-xl text-white ml-2">Nasser Alotaibi</span>
            </div>
            <p className="mb-4">
              Providing professional manpower and equipment solutions for construction and industrial projects.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Skilled Manpower
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Technical Experts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Light Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Heavy Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                  <span className="w-0 h-0.5 bg-orange-500 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex group">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">
                  123 Business Avenue, Industrial District, City, Country
                </span>
              </li>
              <li className="flex group">
                <Phone className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">+1 (234) 567-8900</span>
              </li>
              <li className="flex group">
                <Mail className="h-5 w-5 mr-3 text-orange-500 flex-shrink-0 group-hover:text-orange-400 transition-colors" />
                <span className="group-hover:text-orange-100 transition-colors">info@nasseralotaibi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nasser Alotaibi Contracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

