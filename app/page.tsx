"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import ExperienceCard from "@/components/experience-card"
import NewsletterSignup from "@/components/newsletter-signup"

const destinations = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra",
    image: "/images/taj-mahal.jpg",
    description: "One of the seven wonders of the world, a symbol of eternal love.",
  },
  {
    id: 2,
    name: "Jaipur",
    location: "Rajasthan",
    image: "/images/jaipur.jpg",
    description: "The Pink City with magnificent palaces and vibrant culture.",
  },
  {
    id: 3,
    name: "Varanasi",
    location: "Uttar Pradesh",
    image: "/images/varanasi.jpg",
    description: "The spiritual capital of India on the banks of the sacred Ganges.",
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    location: "Kerala",
    image: "/images/kerala.jpg",
    description: "Serene waterways surrounded by lush greenery and traditional houseboats.",
  },
]

const experiences = [
  {
    id: 1,
    title: "Cultural Immersion",
    image: "/images/cultural.jpg",
    description: "Experience the diverse traditions, festivals, and rituals of India.",
  },
  {
    id: 2,
    title: "Culinary Journey",
    image: "/images/food.jpg",
    description: "Taste the rich flavors and spices of authentic Indian cuisine.",
  },
  {
    id: 3,
    title: "Heritage Exploration",
    image: "/images/heritage.jpg",
    description: "Discover ancient monuments, temples, and historical sites.",
  },
]

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image src="/images/india-hero.jpg" alt="India landscape" fill priority className="object-cover" />
        </motion.div>

        <div className="container relative z-20 text-center px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Explore India Like Never Before
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-400 mb-6">
              Explore, Experience, and Immerse!
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Embark on a journey through the mystical lands of India. Experience rich culture, ancient heritage, and
              breathtaking landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                <Link href="/destinations">
                  Start Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-white opacity-80" />
        </motion.div>
      </div>

      {/* Top Destinations Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Destinations</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
              <Link href="/destinations">
                View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Experiences</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
