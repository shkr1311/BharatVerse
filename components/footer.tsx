import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-amber-500">Explore</span> India
            </h2>
            <p className="mb-4">
              Discover the beauty, culture, and heritage of India with our immersive travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-amber-500 transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-amber-500 transition-colors">
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-amber-500 transition-colors">
                  Book a Trip
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-amber-500 transition-colors">
                  Travel Agents
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-amber-500 transition-colors">
                  Travel Safety
                </Link>
              </li>
              <li>
                <Link href="/budget" className="hover:text-amber-500 transition-colors">
                  Budget Planner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Taj Mahal, Agra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Jaipur, Rajasthan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Varanasi, Uttar Pradesh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Kerala Backwaters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Goa Beaches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Darjeeling, West Bengal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for travel tips and exclusive offers.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 focus:border-amber-500 text-white"
              />
              <Button className="ml-2 bg-amber-500 hover:bg-amber-600 text-black">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Explore India. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
