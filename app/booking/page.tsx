"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { format } from "date-fns"
import { CalendarIcon, Check, ChevronsUpDown, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import PageTransition from "@/components/page-transition"
import Link from "next/link"

const destinations = [
  { label: "Taj Mahal, Agra", value: "taj-mahal" },
  { label: "Jaipur, Rajasthan", value: "jaipur" },
  { label: "Varanasi, Uttar Pradesh", value: "varanasi" },
  { label: "Kerala Backwaters", value: "kerala" },
  { label: "Goa Beaches", value: "goa" },
  { label: "Darjeeling, West Bengal", value: "darjeeling" },
  { label: "Ladakh", value: "ladakh" },
  { label: "Hampi, Karnataka", value: "hampi" },
  { label: "Rishikesh, Uttarakhand", value: "rishikesh" },
  { label: "Andaman Islands", value: "andaman" },
]

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  destination: z.string({
    required_error: "Please select a destination.",
  }),
  startDate: z.date({
    required_error: "Please select a start date.",
  }),
  endDate: z.date({
    required_error: "Please select an end date.",
  }),
  travelers: z.number().min(1).max(20),
  accommodationType: z.enum(["budget", "standard", "luxury"], {
    required_error: "Please select an accommodation type.",
  }),
  specialRequests: z.string().optional(),
})

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      travelers: 2,
      specialRequests: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (step < 3) {
      setStep(step + 1)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log(values)
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Book Your Indian Adventure</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Plan your perfect trip to India with our easy booking process. Fill out the form below to get started.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {!isSuccess ? (
              <>
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                            step === i
                              ? "bg-amber-500 text-black"
                              : step > i
                                ? "bg-green-500 text-white"
                                : "bg-gray-700 text-gray-300",
                          )}
                        >
                          {step > i ? <Check className="h-5 w-5" /> : i}
                        </div>
                        <span className={cn("text-sm mt-2", step === i ? "text-amber-500" : "text-gray-400")}>
                          {i === 1 ? "Personal Details" : i === 2 ? "Trip Details" : "Confirmation"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
                      <div
                        className="h-full bg-amber-500 transition-all duration-300"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {step === 1 && (
                          <>
                            <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>

                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input placeholder="john.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                      <Input placeholder="+1 (555) 123-4567" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </>
                        )}

                        {step === 2 && (
                          <>
                            <h2 className="text-2xl font-semibold text-white mb-6">Trip Details</h2>

                            <FormField
                              control={form.control}
                              name="destination"
                              render={({ field }) => (
                                <FormItem className="flex flex-col">
                                  <FormLabel>Destination</FormLabel>
                                  <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant="outline"
                                          role="combobox"
                                          className={cn("justify-between", !field.value && "text-muted-foreground")}
                                        >
                                          {field.value
                                            ? destinations.find((destination) => destination.value === field.value)
                                                ?.label
                                            : "Select destination"}
                                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="p-0">
                                      <Command>
                                        <CommandInput placeholder="Search destination..." />
                                        <CommandList>
                                          <CommandEmpty>No destination found.</CommandEmpty>
                                          <CommandGroup>
                                            {destinations.map((destination) => (
                                              <CommandItem
                                                key={destination.value}
                                                value={destination.value}
                                                onSelect={() => {
                                                  form.setValue("destination", destination.value)
                                                }}
                                              >
                                                <Check
                                                  className={cn(
                                                    "mr-2 h-4 w-4",
                                                    destination.value === field.value ? "opacity-100" : "opacity-0",
                                                  )}
                                                />
                                                {destination.label}
                                              </CommandItem>
                                            ))}
                                          </CommandGroup>
                                        </CommandList>
                                      </Command>
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col">
                                    <FormLabel>Start Date</FormLabel>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <FormControl>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "pl-3 text-left font-normal",
                                              !field.value && "text-muted-foreground",
                                            )}
                                          >
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                          </Button>
                                        </FormControl>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          disabled={(date) => date < new Date()}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="endDate"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col">
                                    <FormLabel>End Date</FormLabel>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <FormControl>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "pl-3 text-left font-normal",
                                              !field.value && "text-muted-foreground",
                                            )}
                                          >
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                          </Button>
                                        </FormControl>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                          mode="single"
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          disabled={(date) =>
                                            date < new Date() ||
                                            (form.getValues("startDate") && date < form.getValues("startDate"))
                                          }
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="travelers"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Number of Travelers: {field.value}</FormLabel>
                                  <FormControl>
                                    <Slider
                                      defaultValue={[field.value]}
                                      min={1}
                                      max={20}
                                      step={1}
                                      onValueChange={(vals) => {
                                        field.onChange(vals[0])
                                      }}
                                      className="py-4"
                                    />
                                  </FormControl>
                                  <FormDescription>Select between 1 and 20 travelers</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="accommodationType"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel>Accommodation Type</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      onValueChange={field.onChange}
                                      defaultValue={field.value}
                                      className="flex flex-col space-y-1"
                                    >
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="budget" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Budget - Affordable accommodations with basic amenities
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="standard" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Standard - Comfortable accommodations with good amenities
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="luxury" />
                                        </FormControl>
                                        <FormLabel className="font-normal">
                                          Luxury - Premium accommodations with excellent amenities and services
                                        </FormLabel>
                                      </FormItem>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </>
                        )}

                        {step === 3 && (
                          <>
                            <h2 className="text-2xl font-semibold text-white mb-6">Special Requests & Confirmation</h2>

                            <FormField
                              control={form.control}
                              name="specialRequests"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Special Requests (Optional)</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Any dietary requirements, accessibility needs, or special occasions?"
                                      className="resize-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="mt-8 p-6 bg-gray-700/50 rounded-lg">
                              <h3 className="text-lg font-medium text-white mb-4">Booking Summary</h3>
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Full Name:</span>
                                  <span className="text-white font-medium">{form.getValues("fullName")}</span>
                                </div>
                                <Separator className="bg-gray-600" />
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Email:</span>
                                  <span className="text-white font-medium">{form.getValues("email")}</span>
                                </div>
                                <Separator className="bg-gray-600" />
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Destination:</span>
                                  <span className="text-white font-medium">
                                    {destinations.find((d) => d.value === form.getValues("destination"))?.label ||
                                      "Not selected"}
                                  </span>
                                </div>
                                <Separator className="bg-gray-600" />
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Travel Dates:</span>
                                  <span className="text-white font-medium">
                                    {form.getValues("startDate") && form.getValues("endDate")
                                      ? `${format(form.getValues("startDate"), "MMM d, yyyy")} - ${format(form.getValues("endDate"), "MMM d, yyyy")}`
                                      : "Not selected"}
                                  </span>
                                </div>
                                <Separator className="bg-gray-600" />
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Travelers:</span>
                                  <span className="text-white font-medium">{form.getValues("travelers")}</span>
                                </div>
                                <Separator className="bg-gray-600" />
                                <div className="flex justify-between">
                                  <span className="text-gray-300">Accommodation:</span>
                                  <span className="text-white font-medium capitalize">
                                    {form.getValues("accommodationType") || "Not selected"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex justify-between mt-8">
                          {step > 1 ? (
                            <Button
                              type="button"
                              variant="outline"
                              onClick={goToPreviousStep}
                              className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                            >
                              Back
                            </Button>
                          ) : (
                            <div></div>
                          )}

                          <Button
                            type="submit"
                            className="bg-amber-500 hover:bg-amber-600 text-black"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing
                              </>
                            ) : step < 3 ? (
                              "Continue"
                            ) : (
                              "Complete Booking"
                            )}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 text-center"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Booking Confirmed!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for booking with Explore India. We've sent a confirmation email to {form.getValues("email")}{" "}
                  with all the details of your trip.
                </p>
                <p className="text-gray-300 mb-8">
                  One of our travel experts will contact you within 24 hours to discuss your itinerary and answer any
                  questions you may have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black">
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                    <Link href="/tours">Explore Virtual Tours</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
