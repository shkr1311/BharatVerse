"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Compass, Headphones, Smartphone } from "lucide-react"
import PageTransition from "@/components/page-transition"

interface Tour {
  id: string
  name: string
  location: string
  description: string
  image: string
  videoUrl: string
  type: "360" | "VR" | "AR"
}

const tours: Tour[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description:
      "Experience the majestic beauty of the Taj Mahal, one of the seven wonders of the world and a symbol of eternal love.",
    image: "/images/taj-mahal.jpg",
    videoUrl: "https://www.youtube.com/embed/HrO_ZKl1eHc",
    type: "360",
  },
  {
    id: "jaipur",
    name: "Jaipur City Palace",
    location: "Jaipur, Rajasthan",
    description:
      "Explore the magnificent City Palace of Jaipur, a stunning blend of Rajasthani and Mughal architecture.",
    image: "/images/jaipur.jpg",
    videoUrl: "https://www.youtube.com/embed/F5Wh6Q7Fzdc",
    type: "360",
  },
  {
    id: "varanasi",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    description: "Witness the spiritual rituals along the sacred Ganges River at the ancient ghats of Varanasi.",
    image: "/images/varanasi.jpg",
    videoUrl: "https://www.youtube.com/embed/Gg8VpbqKbSo",
    type: "VR",
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    location: "Kerala",
    description:
      "Float through the serene backwaters of Kerala on a traditional houseboat, surrounded by lush greenery.",
    image: "/images/kerala.jpg",
    videoUrl: "https://www.youtube.com/embed/D-v6Lo-RLWk",
    type: "360",
  },
  {
    id: "hampi",
    name: "Hampi Ruins",
    location: "Karnataka",
    description: "Discover the ancient ruins of Hampi, a UNESCO World Heritage site with stunning temple complexes.",
    image: "/images/hampi.jpg",
    videoUrl: "https://www.youtube.com/embed/RQhAJzjEBpk",
    type: "AR",
  },
  {
    id: "ladakh",
    name: "Ladakh Landscapes",
    location: "Ladakh",
    description:
      "Experience the breathtaking landscapes of Ladakh, with its high-altitude deserts and majestic mountains.",
    image: "/images/ladakh.jpg",
    videoUrl: "https://www.youtube.com/embed/d_DJAZ-ByV0",
    type: "VR",
  },
]

export default function ToursPage() {
  const [selectedTour, setSelectedTour] = useState<Tour>(tours[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % tours.length
    setCurrentIndex(nextIndex)
    setSelectedTour(tours[nextIndex])
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + tours.length) % tours.length
    setCurrentIndex(prevIndex)
    setSelectedTour(tours[prevIndex])
  }

  const handleTabChange = (type: "360" | "VR" | "AR") => {
    const filteredTours = tours.filter((tour) => tour.type === type)
    if (filteredTours.length > 0) {
      setSelectedTour(filteredTours[0])
      setCurrentIndex(tours.findIndex((tour) => tour.id === filteredTours[0].id))
    }
  }

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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Virtual Tours</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the wonders of India from anywhere in the world with our immersive virtual tours.
            </p>
          </motion.div>

          <div className="mb-8">
            <Tabs defaultValue="360" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger
                  value="360"
                  onClick={() => handleTabChange("360")}
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                >
                  <Compass className="mr-2 h-4 w-4" />
                  360° Tours
                </TabsTrigger>
                <TabsTrigger
                  value="VR"
                  onClick={() => handleTabChange("VR")}
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                >
                  <Headphones className="mr-2 h-4 w-4" />
                  VR Experiences
                </TabsTrigger>
                <TabsTrigger
                  value="AR"
                  onClick={() => handleTabChange("AR")}
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  AR Features
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTour.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700"
                >
                  <div className="aspect-video relative">
                    <iframe
                      src={selectedTour.videoUrl}
                      title={selectedTour.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{selectedTour.name}</h2>
                        <p className="text-amber-400">{selectedTour.location}</p>
                      </div>
                      <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-amber-500">
                        {selectedTour.type === "360"
                          ? "360° Tour"
                          : selectedTour.type === "VR"
                            ? "VR Experience"
                            : "AR Feature"}
                      </Badge>
                    </div>
                    <p className="text-gray-300">{selectedTour.description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-6">
                <Button
                  onClick={handlePrev}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                >
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">More Destinations</h3>
              <div className="space-y-4">
                {tours.map((tour, index) => (
                  <Card
                    key={tour.id}
                    className={`bg-gray-800 border-gray-700 cursor-pointer transition-all duration-300 ${
                      selectedTour.id === tour.id ? "ring-2 ring-amber-500" : "hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setSelectedTour(tour)
                      setCurrentIndex(index)
                    }}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="relative w-24 h-24">
                          <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium text-white">{tour.name}</h4>
                          <p className="text-sm text-gray-400">{tour.location}</p>
                          <Badge
                            variant="outline"
                            className="mt-2 text-xs bg-amber-500/10 text-amber-400 border-amber-500"
                          >
                            {tour.type}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-4">Experience India in Virtual Reality</h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Download our mobile app to access exclusive AR/VR content and experience India like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-black/80">Download for iOS</Button>
              <Button className="bg-black text-white hover:bg-black/80">Download for Android</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
