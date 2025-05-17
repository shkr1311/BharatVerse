"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Calculator, Calendar, MapPin, Users } from "lucide-react"
import PageTransition from "@/components/page-transition"

interface BudgetData {
  accommodation: number
  food: number
  transportation: number
  activities: number
  shopping: number
  miscellaneous: number
}

interface Destination {
  id: string
  name: string
  region: string
  costLevel: "budget" | "moderate" | "luxury"
  baseCosts: {
    accommodation: { budget: number; moderate: number; luxury: number }
    food: { budget: number; moderate: number; luxury: number }
    transportation: { budget: number; moderate: number; luxury: number }
    activities: { budget: number; moderate: number; luxury: number }
  }
}

const destinations: Destination[] = [
  {
    id: "delhi",
    name: "Delhi",
    region: "North India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 20, moderate: 60, luxury: 150 },
      food: { budget: 10, moderate: 25, luxury: 60 },
      transportation: { budget: 5, moderate: 15, luxury: 40 },
      activities: { budget: 10, moderate: 25, luxury: 50 },
    },
  },
  {
    id: "jaipur",
    name: "Jaipur",
    region: "North India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 15, moderate: 50, luxury: 130 },
      food: { budget: 8, moderate: 20, luxury: 50 },
      transportation: { budget: 5, moderate: 15, luxury: 35 },
      activities: { budget: 10, moderate: 20, luxury: 45 },
    },
  },
  {
    id: "mumbai",
    name: "Mumbai",
    region: "West India",
    costLevel: "luxury",
    baseCosts: {
      accommodation: { budget: 25, moderate: 80, luxury: 200 },
      food: { budget: 12, moderate: 30, luxury: 70 },
      transportation: { budget: 6, moderate: 20, luxury: 50 },
      activities: { budget: 15, moderate: 30, luxury: 60 },
    },
  },
  {
    id: "goa",
    name: "Goa",
    region: "West India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 20, moderate: 70, luxury: 180 },
      food: { budget: 10, moderate: 25, luxury: 60 },
      transportation: { budget: 8, moderate: 20, luxury: 45 },
      activities: { budget: 15, moderate: 35, luxury: 70 },
    },
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 18, moderate: 60, luxury: 150 },
      food: { budget: 8, moderate: 20, luxury: 50 },
      transportation: { budget: 6, moderate: 18, luxury: 40 },
      activities: { budget: 12, moderate: 30, luxury: 60 },
    },
  },
  {
    id: "varanasi",
    name: "Varanasi",
    region: "North India",
    costLevel: "budget",
    baseCosts: {
      accommodation: { budget: 12, moderate: 40, luxury: 100 },
      food: { budget: 6, moderate: 15, luxury: 40 },
      transportation: { budget: 4, moderate: 12, luxury: 30 },
      activities: { budget: 8, moderate: 20, luxury: 40 },
    },
  },
  {
    id: "darjeeling",
    name: "Darjeeling",
    region: "East India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 15, moderate: 50, luxury: 120 },
      food: { budget: 7, moderate: 18, luxury: 45 },
      transportation: { budget: 5, moderate: 15, luxury: 35 },
      activities: { budget: 10, moderate: 25, luxury: 50 },
    },
  },
  {
    id: "agra",
    name: "Agra",
    region: "North India",
    costLevel: "moderate",
    baseCosts: {
      accommodation: { budget: 15, moderate: 45, luxury: 120 },
      food: { budget: 7, moderate: 18, luxury: 45 },
      transportation: { budget: 5, moderate: 15, luxury: 35 },
      activities: { budget: 15, moderate: 25, luxury: 50 },
    },
  },
]

const COLORS = ["#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899", "#6B7280"]

export default function BudgetPage() {
  const [days, setDays] = useState(7)
  const [travelers, setTravelers] = useState(2)
  const [travelStyle, setTravelStyle] = useState<"budget" | "moderate" | "luxury">("moderate")
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(["delhi", "jaipur", "agra"])
  const [totalBudget, setTotalBudget] = useState(0)
  const [budgetBreakdown, setBudgetBreakdown] = useState<BudgetData>({
    accommodation: 0,
    food: 0,
    transportation: 0,
    activities: 0,
    shopping: 0,
    miscellaneous: 0,
  })

  const [pieData, setPieData] = useState<any[]>([])
  const [barData, setBarData] = useState<any[]>([])

  useEffect(() => {
    calculateBudget()
  }, [days, travelers, travelStyle, selectedDestinations])

  const calculateBudget = () => {
    let totalAccommodation = 0
    let totalFood = 0
    let totalTransportation = 0
    let totalActivities = 0

    // Calculate base costs from selected destinations
    selectedDestinations.forEach((destId) => {
      const destination = destinations.find((d) => d.id === destId)
      if (destination) {
        // Divide days evenly among destinations
        const daysInDestination = Math.ceil(days / selectedDestinations.length)

        totalAccommodation += destination.baseCosts.accommodation[travelStyle] * daysInDestination
        totalFood += destination.baseCosts.food[travelStyle] * daysInDestination * 3 // 3 meals per day
        totalTransportation += destination.baseCosts.transportation[travelStyle] * daysInDestination
        totalActivities += destination.baseCosts.activities[travelStyle] * daysInDestination
      }
    })

    // Multiply by number of travelers where appropriate
    totalAccommodation = totalAccommodation * Math.ceil(travelers / 2) // Assuming 2 people per room
    totalFood = totalFood * travelers

    // Add inter-city transportation costs
    const interCityTransport =
      selectedDestinations.length > 1
        ? (selectedDestinations.length - 1) *
          30 *
          travelers *
          (travelStyle === "luxury" ? 3 : travelStyle === "moderate" ? 1.5 : 1)
        : 0

    totalTransportation += interCityTransport

    // Estimate shopping and miscellaneous costs
    const shopping = days * travelers * (travelStyle === "luxury" ? 30 : travelStyle === "moderate" ? 15 : 5)
    const miscellaneous = days * travelers * (travelStyle === "luxury" ? 20 : travelStyle === "moderate" ? 10 : 5)

    // Set total budget and breakdown
    const total = totalAccommodation + totalFood + totalTransportation + totalActivities + shopping + miscellaneous

    setTotalBudget(Math.round(total))
    setBudgetBreakdown({
      accommodation: Math.round(totalAccommodation),
      food: Math.round(totalFood),
      transportation: Math.round(totalTransportation),
      activities: Math.round(totalActivities),
      shopping: Math.round(shopping),
      miscellaneous: Math.round(miscellaneous),
    })

    // Update chart data
    setPieData([
      { name: "Accommodation", value: Math.round(totalAccommodation) },
      { name: "Food", value: Math.round(totalFood) },
      { name: "Transportation", value: Math.round(totalTransportation) },
      { name: "Activities", value: Math.round(totalActivities) },
      { name: "Shopping", value: Math.round(shopping) },
      { name: "Miscellaneous", value: Math.round(miscellaneous) },
    ])

    setBarData([
      { name: "Accommodation", value: Math.round(totalAccommodation / days) },
      { name: "Food", value: Math.round(totalFood / days) },
      { name: "Transportation", value: Math.round(totalTransportation / days) },
      { name: "Activities", value: Math.round(totalActivities / days) },
      { name: "Shopping", value: Math.round(shopping / days) },
      { name: "Miscellaneous", value: Math.round(miscellaneous / days) },
    ])
  }

  const handleDestinationToggle = (destId: string) => {
    if (selectedDestinations.includes(destId)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((id) => id !== destId))
      }
    } else {
      setSelectedDestinations([...selectedDestinations, destId])
    }
  }

  const formatCurrency = (value: number) => {
    return `$${value.toLocaleString()}`
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Budget Planner</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Plan your perfect Indian adventure with our interactive budget calculator. Adjust your preferences to see
              real-time cost estimates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gray-800 border-gray-700 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="mr-2 h-5 w-5 text-amber-500" />
                      Budget Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="days" className="flex justify-between">
                        <span>Duration (Days): {days}</span>
                      </Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Calendar className="h-5 w-5 text-amber-500" />
                        <Slider
                          id="days"
                          defaultValue={[7]}
                          min={1}
                          max={30}
                          step={1}
                          onValueChange={(vals) => setDays(vals[0])}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="travelers" className="flex justify-between">
                        <span>Number of Travelers: {travelers}</span>
                      </Label>
                      <div className="flex items-center gap-4 mt-2">
                        <Users className="h-5 w-5 text-amber-500" />
                        <Slider
                          id="travelers"
                          defaultValue={[2]}
                          min={1}
                          max={10}
                          step={1}
                          onValueChange={(vals) => setTravelers(vals[0])}
                          className="flex-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="mb-2 block">Travel Style</Label>
                      <RadioGroup
                        defaultValue="moderate"
                        onValueChange={(value) => setTravelStyle(value as "budget" | "moderate" | "luxury")}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="budget" id="budget" />
                          <Label htmlFor="budget" className="font-normal">
                            Budget
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="moderate" id="moderate" />
                          <Label htmlFor="moderate" className="font-normal">
                            Moderate
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="luxury" id="luxury" />
                          <Label htmlFor="luxury" className="font-normal">
                            Luxury
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="mb-2 block">Select Destinations</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {destinations.map((dest) => (
                          <Button
                            key={dest.id}
                            variant={selectedDestinations.includes(dest.id) ? "default" : "outline"}
                            className={
                              selectedDestinations.includes(dest.id)
                                ? "bg-amber-500 hover:bg-amber-600 text-black"
                                : "border-amber-500 text-amber-500 hover:bg-amber-500/10"
                            }
                            onClick={() => handleDestinationToggle(dest.id)}
                            size="sm"
                          >
                            {dest.name}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="bg-gray-700/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300">Total Budget:</span>
                          <span className="text-2xl font-bold text-amber-500">{formatCurrency(totalBudget)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Per Person:</span>
                          <span className="text-white">{formatCurrency(Math.round(totalBudget / travelers))}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Per Day:</span>
                          <span className="text-white">{formatCurrency(Math.round(totalBudget / days))}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-gray-800 border-gray-700 mb-8">
                  <CardHeader>
                    <CardTitle className="text-white">Budget Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="chart" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 bg-gray-700">
                        <TabsTrigger
                          value="chart"
                          className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                        >
                          Chart View
                        </TabsTrigger>
                        <TabsTrigger
                          value="details"
                          className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                        >
                          Detailed View
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="chart" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="h-[300px]">
                            <h3 className="text-lg font-medium text-white mb-4 text-center">
                              Total Budget Distribution
                            </h3>
                            <ChartContainer>
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                  >
                                    {pieData.map((entry, index) => (
                                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                  </Pie>
                                  <Tooltip
                                    content={({ active, payload }) => {
                                      if (active && payload && payload.length) {
                                        return (
                                          <ChartTooltip>
                                            <ChartTooltipContent>
                                              <div className="flex flex-col gap-0.5">
                                                <span className="text-sm font-bold">{payload[0].name}</span>
                                                <span className="text-xs">{formatCurrency(payload[0].value)}</span>
                                              </div>
                                            </ChartTooltipContent>
                                          </ChartTooltip>
                                        )
                                      }
                                      return null
                                    }}
                                  />
                                </PieChart>
                              </ResponsiveContainer>
                            </ChartContainer>
                          </div>
                          <div className="h-[300px]">
                            <h3 className="text-lg font-medium text-white mb-4 text-center">Daily Expenses</h3>
                            <ChartContainer>
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={barData}>
                                  <XAxis dataKey="name" tick={{ fill: "#9CA3AF" }} />
                                  <YAxis tick={{ fill: "#9CA3AF" }} />
                                  <Tooltip
                                    content={({ active, payload }) => {
                                      if (active && payload && payload.length) {
                                        return (
                                          <ChartTooltip>
                                            <ChartTooltipContent>
                                              <div className="flex flex-col gap-0.5">
                                                <span className="text-sm font-bold">{payload[0].name}</span>
                                                <span className="text-xs">
                                                  {formatCurrency(payload[0].value)} per day
                                                </span>
                                              </div>
                                            </ChartTooltipContent>
                                          </ChartTooltip>
                                        )
                                      }
                                      return null
                                    }}
                                  />
                                  <Bar dataKey="value" fill="#F59E0B" />
                                </BarChart>
                              </ResponsiveContainer>
                            </ChartContainer>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="details" className="mt-4">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Accommodation</span>
                            <span className="text-amber-500 font-bold">
                              {formatCurrency(budgetBreakdown.accommodation)}
                            </span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Food</span>
                            <span className="text-amber-500 font-bold">{formatCurrency(budgetBreakdown.food)}</span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Transportation</span>
                            <span className="text-amber-500 font-bold">
                              {formatCurrency(budgetBreakdown.transportation)}
                            </span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Activities & Sightseeing</span>
                            <span className="text-amber-500 font-bold">
                              {formatCurrency(budgetBreakdown.activities)}
                            </span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Shopping</span>
                            <span className="text-amber-500 font-bold">{formatCurrency(budgetBreakdown.shopping)}</span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">Miscellaneous</span>
                            <span className="text-amber-500 font-bold">
                              {formatCurrency(budgetBreakdown.miscellaneous)}
                            </span>
                          </div>
                          <Separator className="bg-gray-700" />
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-white font-semibold">Total</span>
                            <span className="text-xl font-bold text-amber-500">{formatCurrency(totalBudget)}</span>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Suggested Itinerary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedDestinations.slice(0, 3).map((destId, index) => {
                          const destination = destinations.find((d) => d.id === destId)
                          if (!destination) return null

                          return (
                            <Card key={destId} className="bg-gray-700 border-gray-600">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <MapPin className="h-4 w-4 text-amber-500" />
                                  <h3 className="font-medium text-white">{destination.name}</h3>
                                </div>
                                <div className="text-sm text-gray-300 mb-3">
                                  <p>{destination.region}</p>
                                  <p className="capitalize">{destination.costLevel} cost level</p>
                                </div>
                                <div className="text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Accommodation:</span>
                                    <span className="text-white">
                                      ${destination.baseCosts.accommodation[travelStyle]}/night
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Food:</span>
                                    <span className="text-white">${destination.baseCosts.food[travelStyle]}/meal</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Transportation:</span>
                                    <span className="text-white">
                                      ${destination.baseCosts.transportation[travelStyle]}/day
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Activities:</span>
                                    <span className="text-white">
                                      ${destination.baseCosts.activities[travelStyle]}/day
                                    </span>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          )
                        })}
                      </div>

                      <div className="bg-gray-700/50 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-white mb-4">Travel Tips for Your Budget</h3>
                        <div className="space-y-3 text-gray-300">
                          <p>• Book accommodations in advance for better rates</p>
                          <p>• Consider homestays for authentic experiences at lower costs</p>
                          <p>• Use local transportation for significant savings</p>
                          <p>• Visit free attractions like temples, markets, and public gardens</p>
                          <p>• Travel during shoulder season (Feb-Mar, Sep-Oct) for better deals</p>
                          <p>• Eat at local restaurants instead of tourist-focused establishments</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
