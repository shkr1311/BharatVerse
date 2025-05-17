"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Loader2, MessageCircle, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import PageTransition from "@/components/page-transition"

interface Agent {
  id: number
  name: string
  photo: string
  location: string
  experience: number
  languages: string[]
  specialties: string[]
  rating: number
  bio: string
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Raj Sharma",
    photo: "/images/agent-1.jpg",
    location: "Delhi",
    experience: 8,
    languages: ["English", "Hindi", "French"],
    specialties: ["North India", "Cultural Tours", "Adventure"],
    rating: 4.9,
    bio: "Raj has been guiding travelers through the diverse landscapes of North India for 8 years. His deep knowledge of local history and culture makes every journey memorable.",
  },
  {
    id: 2,
    name: "Priya Patel",
    photo: "/images/agent-2.jpg",
    location: "Mumbai",
    experience: 6,
    languages: ["English", "Hindi", "Gujarati"],
    specialties: ["West India", "Food Tours", "Heritage"],
    rating: 4.8,
    bio: "Priya specializes in culinary and heritage tours across Western India. Her passion for local cuisine and traditions creates authentic experiences for travelers.",
  },
  {
    id: 3,
    name: "Arun Kumar",
    photo: "/images/agent-3.jpg",
    location: "Jaipur",
    experience: 10,
    languages: ["English", "Hindi", "German"],
    specialties: ["Rajasthan", "Luxury Travel", "Photography"],
    rating: 4.9,
    bio: "With a decade of experience, Arun is an expert in crafting luxury experiences across Rajasthan. His photography tips help travelers capture the perfect memories.",
  },
  {
    id: 4,
    name: "Maya Reddy",
    photo: "/images/agent-4.jpg",
    location: "Bangalore",
    experience: 7,
    languages: ["English", "Hindi", "Kannada", "Tamil"],
    specialties: ["South India", "Wellness", "Nature"],
    rating: 4.7,
    bio: "Maya's expertise in South Indian culture, wellness retreats, and natural landscapes ensures a rejuvenating and enriching travel experience.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    photo: "/images/agent-5.jpg",
    location: "Shimla",
    experience: 9,
    languages: ["English", "Hindi", "Punjabi"],
    specialties: ["Himalayas", "Trekking", "Wildlife"],
    rating: 4.8,
    bio: "Vikram is your guide to the majestic Himalayas. His knowledge of trekking routes and wildlife sanctuaries makes for unforgettable mountain adventures.",
  },
  {
    id: 6,
    name: "Lakshmi Nair",
    photo: "/images/agent-6.jpg",
    location: "Kochi",
    experience: 5,
    languages: ["English", "Hindi", "Malayalam"],
    specialties: ["Kerala", "Backwaters", "Ayurveda"],
    rating: 4.9,
    bio: "Lakshmi's intimate knowledge of Kerala's backwaters and Ayurvedic traditions provides travelers with authentic and relaxing experiences in God's Own Country.",
  },
]

export default function AgentsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)
  const [contactType, setContactType] = useState<"chat" | "call">("chat")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Connect with Travel Experts</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our verified travel agents are experts in creating personalized Indian adventures. Connect with them to
              plan your perfect trip.
            </p>
          </motion.div>

          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800">
                <TabsTrigger value="all" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                  All Regions
                </TabsTrigger>
                <TabsTrigger value="north" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                  North India
                </TabsTrigger>
                <TabsTrigger value="south" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black">
                  South India
                </TabsTrigger>
                <TabsTrigger
                  value="specialty"
                  className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                >
                  Specialty Tours
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image src={agent.photo || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-500 text-black">{agent.rating} ★</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">{agent.name}</h3>
                      <p className="text-amber-400 mb-3">
                        {agent.location} • {agent.experience} years experience
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {agent.languages.map((language) => (
                            <Badge key={language} variant="outline" className="bg-gray-700 text-gray-300">
                              {language}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {agent.specialties.map((specialty) => (
                            <Badge
                              key={specialty}
                              variant="outline"
                              className="bg-amber-500/20 text-amber-400 border-amber-500"
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-6">{agent.bio}</p>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                            onClick={() => setSelectedAgent(agent)}
                          >
                            Connect with {agent.name.split(" ")[0]}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-gray-800 border-gray-700">
                          <DialogHeader>
                            <DialogTitle className="text-white">Schedule with {selectedAgent?.name}</DialogTitle>
                            <DialogDescription>
                              Choose how you'd like to connect with your travel expert.
                            </DialogDescription>
                          </DialogHeader>

                          {!isSuccess ? (
                            <form onSubmit={handleSubmit}>
                              <div className="grid gap-4 py-4">
                                <div className="flex flex-col gap-2">
                                  <Label htmlFor="name">Your Name</Label>
                                  <Input id="name" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" required />
                                </div>

                                <div className="flex flex-col gap-2">
                                  <Label>Preferred Contact Method</Label>
                                  <div className="flex gap-4">
                                    <Button
                                      type="button"
                                      variant={contactType === "chat" ? "default" : "outline"}
                                      className={contactType === "chat" ? "bg-amber-500 text-black" : ""}
                                      onClick={() => setContactType("chat")}
                                    >
                                      <MessageCircle className="mr-2 h-4 w-4" />
                                      Chat
                                    </Button>
                                    <Button
                                      type="button"
                                      variant={contactType === "call" ? "default" : "outline"}
                                      className={contactType === "call" ? "bg-amber-500 text-black" : ""}
                                      onClick={() => setContactType("call")}
                                    >
                                      <Phone className="mr-2 h-4 w-4" />
                                      Call
                                    </Button>
                                  </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                  <Label>Preferred Date</Label>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full justify-start text-left font-normal",
                                          !selectedDate && "text-muted-foreground",
                                        )}
                                      >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                      </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={setSelectedDate}
                                        disabled={(date) => date < new Date()}
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                </div>

                                <div className="flex flex-col gap-2">
                                  <Label htmlFor="message">Message</Label>
                                  <Textarea
                                    id="message"
                                    placeholder="Tell us about your travel plans and questions..."
                                    className="resize-none"
                                    rows={4}
                                  />
                                </div>
                              </div>
                              <DialogFooter>
                                <Button
                                  type="submit"
                                  className="bg-amber-500 hover:bg-amber-600 text-black"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting ? (
                                    <>
                                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                      Scheduling...
                                    </>
                                  ) : (
                                    "Schedule"
                                  )}
                                </Button>
                              </DialogFooter>
                            </form>
                          ) : (
                            <div className="py-6 text-center">
                              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Check className="h-8 w-8 text-white" />
                              </div>
                              <h3 className="text-xl font-semibold text-white mb-2">Request Sent!</h3>
                              <p className="text-gray-300">
                                {selectedAgent?.name} will contact you soon to discuss your travel plans.
                              </p>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
