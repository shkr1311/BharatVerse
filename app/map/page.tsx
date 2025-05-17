"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

// Dynamically import the map component to avoid SSR issues
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-800 animate-pulse flex items-center justify-center">
      <p className="text-gray-400">Loading interactive map...</p>
    </div>
  ),
})

interface Destination {
  id: number
  name: string
  state: string
  description: string
  image: string
  coordinates: [number, number]
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    description: "One of the seven wonders of the world, a symbol of eternal love.",
    image: "/images/taj-mahal.jpg",
    coordinates: [27.1751, 78.0421],
  },
  {
    id: 2,
    name: "Jaipur",
    state: "Rajasthan",
    description: "The Pink City with magnificent palaces and vibrant culture.",
    image: "/images/jaipur.jpg",
    coordinates: [26.9124, 75.7873],
  },
  {
    id: 3,
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "The spiritual capital of India on the banks of the sacred Ganges.",
    image: "/images/varanasi.jpg",
    coordinates: [25.3176, 82.9739],
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    state: "Kerala",
    description: "Serene waterways surrounded by lush greenery and traditional houseboats.",
    image: "/images/kerala.jpg",
    coordinates: [9.4981, 76.3388],
  },
  {
    id: 5,
    name: "Goa Beaches",
    state: "Goa",
    description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage.",
    image: "/images/goa.jpg",
    coordinates: [15.2993, 74.124],
  },
  {
    id: 6,
    name: "Darjeeling",
    state: "West Bengal",
    description: "Famous for its tea plantations and views of the Himalayas.",
    image: "/images/darjeeling.jpg",
    coordinates: [27.041, 88.2663],
  },
]

export default function MapPage() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Interactive Map of India</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore the diverse regions and attractions of India. Click on markers to discover famous places and learn
              more about each destination.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700"
              >
                <MapComponent destinations={destinations} onMarkerClick={setSelectedDestination} />
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {selectedDestination ? (
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${selectedDestination.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-2xl font-bold text-white">{selectedDestination.name}</h3>
                          <p className="text-amber-400">{selectedDestination.state}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-300 mb-4">{selectedDestination.description}</p>
                        <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                          <Link href={`/destinations/${selectedDestination.id}`}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Discover India's Treasures</h3>
                      <p className="text-gray-300 mb-4">
                        Click on any marker on the map to learn about famous destinations across India.
                      </p>
                      <div className="space-y-4">
                        <h4 className="text-amber-400 font-medium">Popular Regions:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• North India - Himalayas, Delhi, Rajasthan</li>
                          <li>• South India - Kerala, Tamil Nadu, Karnataka</li>
                          <li>• East India - West Bengal, Odisha</li>
                          <li>• West India - Gujarat, Maharashtra, Goa</li>
                          <li>• Central India - Madhya Pradesh</li>
                          <li>• Northeast India - Seven Sister States</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
