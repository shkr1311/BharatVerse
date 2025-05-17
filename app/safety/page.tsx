"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, AlertTriangle, ArrowRight, Phone, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

export default function SafetyPage() {
  const [showSOS, setShowSOS] = useState(false)

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Travel Safety in India</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Stay informed and prepared with our comprehensive safety information for travelers in India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <Card className="bg-gray-800 border-gray-700 mb-6">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Navigation</CardTitle>
                    <CardDescription>Jump to specific safety topics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <nav className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-amber-400 hover:text-amber-500 hover:bg-amber-500/10"
                        asChild
                      >
                        <a href="#general">General Safety</a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-amber-400 hover:text-amber-500 hover:bg-amber-500/10"
                        asChild
                      >
                        <a href="#health">Health Advisories</a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-amber-400 hover:text-amber-500 hover:bg-amber-500/10"
                        asChild
                      >
                        <a href="#emergency">Emergency Contacts</a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-amber-400 hover:text-amber-500 hover:bg-amber-500/10"
                        asChild
                      >
                        <a href="#regional">Regional Safety</a>
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-amber-400 hover:text-amber-500 hover:bg-amber-500/10"
                        asChild
                      >
                        <a href="#faq">Safety FAQs</a>
                      </Button>
                    </nav>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="bg-red-500 text-white">
                    <CardTitle className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Emergency Contacts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-white">All-India Emergency</h4>
                        <p className="text-2xl font-bold text-red-500">112</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Police</h4>
                        <p className="text-xl font-bold text-amber-400">100</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Ambulance</h4>
                        <p className="text-xl font-bold text-amber-400">108</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Fire</h4>
                        <p className="text-xl font-bold text-amber-400">101</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Women's Helpline</h4>
                        <p className="text-xl font-bold text-amber-400">1090</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Tourist Police</h4>
                        <p className="text-xl font-bold text-amber-400">1363</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <section id="general" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">General Safety Tips</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Transportation Safety</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-gray-300">
                        <p>• Use registered taxis or ride-sharing services</p>
                        <p>• Avoid overnight bus travel in remote areas</p>
                        <p>• Keep valuables secure when using public transport</p>
                        <p>• Pre-book train tickets through official channels</p>
                        <p>• Be cautious of unauthorized "helpers" at stations</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Personal Safety</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-gray-300">
                        <p>• Keep copies of important documents</p>
                        <p>• Share itinerary with family or friends</p>
                        <p>• Dress modestly, especially at religious sites</p>
                        <p>• Be cautious in crowded areas and markets</p>
                        <p>• Avoid displaying expensive items in public</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="bg-amber-500/20 border-amber-500 mb-6">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <AlertTitle className="text-amber-500">Important</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      Always research the specific regions you plan to visit, as safety conditions can vary
                      significantly across different parts of India.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              </section>

              <section id="health" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Health Advisories</h2>

                  <Tabs defaultValue="vaccinations" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                      <TabsTrigger
                        value="vaccinations"
                        className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        Vaccinations
                      </TabsTrigger>
                      <TabsTrigger
                        value="water"
                        className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        Food & Water
                      </TabsTrigger>
                      <TabsTrigger
                        value="medical"
                        className="data-[state=active]:bg-amber-500 data-[state=active]:text-black"
                      >
                        Medical Facilities
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="vaccinations" className="mt-4">
                      <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-semibold text-white mb-4">Recommended Vaccinations</h3>
                          <div className="space-y-3 text-gray-300">
                            <p>• Hepatitis A and B</p>
                            <p>• Typhoid</p>
                            <p>• Tetanus</p>
                            <p>• Japanese Encephalitis (for rural areas)</p>
                            <p>• Rabies (for extended stays)</p>
                          </div>
                          <div className="mt-6">
                            <p className="text-gray-300 mb-4">
                              Consult with a travel medicine specialist at least 4-6 weeks before your trip to discuss
                              your specific vaccination needs based on your itinerary.
                            </p>
                            <Alert className="bg-gray-700 border-gray-600">
                              <AlertCircle className="h-4 w-4 text-amber-400" />
                              <AlertTitle className="text-white">COVID-19 Information</AlertTitle>
                              <AlertDescription className="text-gray-300">
                                Check the latest COVID-19 requirements and recommendations before traveling.
                              </AlertDescription>
                            </Alert>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="water" className="mt-4">
                      <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-semibold text-white mb-4">Food & Water Safety</h3>
                          <div className="space-y-3 text-gray-300">
                            <p>• Drink only bottled or purified water</p>
                            <p>• Avoid ice in drinks unless made from purified water</p>
                            <p>• Eat thoroughly cooked food served hot</p>
                            <p>• Avoid raw vegetables and fruits unless you can peel them yourself</p>
                            <p>• Be cautious with street food - choose busy stalls with high turnover</p>
                          </div>
                          <div className="mt-6">
                            <Alert className="bg-gray-700 border-gray-600">
                              <AlertCircle className="h-4 w-4 text-amber-400" />
                              <AlertTitle className="text-white">Traveler's Diarrhea</AlertTitle>
                              <AlertDescription className="text-gray-300">
                                Pack an anti-diarrheal medication and oral rehydration salts as a precaution.
                              </AlertDescription>
                            </Alert>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="medical" className="mt-4">
                      <Card className="bg-gray-800 border-gray-700">
                        <CardContent className="pt-6">
                          <h3 className="text-xl font-semibold text-white mb-4">Medical Facilities</h3>
                          <div className="space-y-3 text-gray-300">
                            <p>• Major cities have excellent private hospitals</p>
                            <p>• Rural areas may have limited medical facilities</p>
                            <p>• Carry a basic first aid kit for minor issues</p>
                            <p>• Consider medical evacuation insurance for remote travel</p>
                          </div>
                          <div className="mt-6">
                            <h4 className="font-medium text-white mb-2">Recommended Hospitals in Major Cities:</h4>
                            <div className="space-y-2 text-gray-300">
                              <p>• Delhi: Apollo Hospital, Max Healthcare</p>
                              <p>• Mumbai: Lilavati Hospital, Kokilaben Hospital</p>
                              <p>• Bangalore: Manipal Hospital, Fortis Hospital</p>
                              <p>• Chennai: Apollo Hospital, Fortis Malar</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </section>

              <section id="emergency" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Emergency Procedures</h2>

                  <Card className="bg-gray-800 border-gray-700 mb-6">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-white mb-4">In Case of Emergency</h3>
                      <div className="space-y-4 text-gray-300">
                        <div>
                          <h4 className="font-medium text-amber-400">1. Medical Emergency</h4>
                          <p>
                            Call 108 for ambulance services or visit the nearest hospital. In major cities, private
                            hospitals often provide better care but may require upfront payment or insurance
                            verification.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-400">2. Crime or Safety Threat</h4>
                          <p>
                            Call 100 for police assistance or 112 for the unified emergency number. Contact your
                            country's embassy or consulate if needed.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-400">3. Lost Documents</h4>
                          <p>
                            Report to the local police station to obtain a report, then contact your embassy or
                            consulate for replacement travel documents.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-amber-400">4. Natural Disasters</h4>
                          <p>
                            Follow instructions from local authorities. Monitor news and weather alerts, especially
                            during monsoon season.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Embassy Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-300">
                        <p>• US Embassy: +91-11-2419-8000</p>
                        <p>• UK High Commission: +91-11-2419-2100</p>
                        <p>• Canadian High Commission: +91-11-4178-2000</p>
                        <p>• Australian High Commission: +91-11-4139-9900</p>
                        <p>• EU Delegation: +91-11-6678-1976</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Travel Insurance</CardTitle>
                      </CardHeader>
                      <CardContent className="text-gray-300">
                        <p className="mb-4">
                          Comprehensive travel insurance is strongly recommended. Ensure your policy covers:
                        </p>
                        <div className="space-y-2">
                          <p>• Medical emergencies and evacuation</p>
                          <p>• Trip cancellation and interruption</p>
                          <p>• Lost luggage and documents</p>
                          <p>• Personal liability</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </section>

              <section id="regional" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Regional Safety Information</h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="north" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">North India</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-400">Delhi & NCR</h4>
                            <p>
                              Exercise caution in crowded areas and markets. Use registered taxis or ride-sharing
                              services, especially at night. Women travelers should be particularly cautious when
                              traveling alone.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Rajasthan</h4>
                            <p>
                              Generally safe for tourists. Be cautious of scams targeting tourists in popular
                              destinations like Jaipur and Udaipur.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Jammu & Kashmir</h4>
                            <p>
                              Check current travel advisories before visiting. Some areas have restrictions. Register
                              with your embassy if traveling to this region.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="south" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">South India</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-400">Kerala</h4>
                            <p>
                              Generally safe for tourists. Be cautious during monsoon season (June-September) as
                              flooding can occur. Check weather advisories before visiting hill stations.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Tamil Nadu</h4>
                            <p>
                              Exercise normal precautions. Be respectful when visiting temples and follow local customs
                              regarding dress code.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Goa</h4>
                            <p>
                              Popular tourist destination with generally good safety record. Be cautious on beaches at
                              night and be aware of water safety, especially during monsoon when rip currents can be
                              dangerous.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="east" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        East & Northeast India
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-400">West Bengal</h4>
                            <p>
                              Exercise normal precautions in Kolkata and tourist areas. Be cautious in crowded areas,
                              especially during festivals.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Northeast States</h4>
                            <p>
                              Some areas require special permits for foreign visitors. Check current requirements before
                              traveling. Some border regions have travel restrictions.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="west" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        West & Central India
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-400">Mumbai & Maharashtra</h4>
                            <p>
                              Exercise caution in crowded areas and on public transportation. Be alert for pickpocketing
                              in tourist areas and markets.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Gujarat</h4>
                            <p>
                              Generally safe for tourists. Respect local customs regarding alcohol consumption, which is
                              prohibited in some areas.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-400">Madhya Pradesh</h4>
                            <p>
                              Exercise normal precautions. When visiting wildlife reserves, follow all safety guidelines
                              provided by park authorities.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </section>

              <section id="faq" className="mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Safety FAQs</h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="safe-women" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        Is India safe for solo female travelers?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <p>
                          India can be safe for solo female travelers with proper precautions. Consider joining guided
                          tours in less familiar areas, dress modestly, and be cautious when out after dark. Many women
                          choose to travel in groups or with local guides, especially in more remote areas. Popular
                          tourist destinations generally have better safety infrastructure.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="safe-transport" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        What's the safest way to travel around India?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <p>
                          For long distances, domestic flights are the safest and most efficient option. For shorter
                          distances, pre-booked taxis through hotels or reputable apps like Uber/Ola are recommended.
                          Trains are generally safe for day travel on major routes. In cities, use registered
                          auto-rickshaws or ride-sharing services rather than hailing unknown vehicles.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="scams" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        What are common tourist scams to avoid?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <p>
                          Common scams include taxi overcharging, fake tour guides, gem or carpet scams, and "helpful"
                          locals directing you to specific shops or hotels for commissions. Always book through official
                          channels, agree on prices before services, and be wary of deals that seem too good to be true.
                          Research typical prices beforehand to avoid overpaying.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="monsoon" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        Is it safe to travel during monsoon season?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <p>
                          Traveling during monsoon season (June-September) requires extra planning. Some areas,
                          particularly in Kerala, Mumbai, and parts of Northeast India, can experience flooding. Hill
                          stations may face landslides. However, many destinations remain accessible with proper
                          precautions. Check weather forecasts regularly and be flexible with your itinerary.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="documents" className="border-gray-700">
                      <AccordionTrigger className="text-white hover:text-amber-400">
                        What documents should I keep with me?
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        <p>
                          Always carry a photocopy of your passport, visa, and travel insurance details. Keep digital
                          copies in secure cloud storage as well. It's advisable to leave your original passport in a
                          hotel safe and carry the copy, unless you're changing accommodations. Also carry the contact
                          information for your country's embassy or consulate.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </section>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-black mb-4">Need More Information?</h3>
                <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                  Our travel experts can provide personalized safety advice for your specific itinerary.
                </p>
                <Button asChild className="bg-black text-white hover:bg-black/80">
                  <Link href="/agents">
                    Connect with a Travel Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating SOS Button */}
        <div
          className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
            showSOS ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
          onMouseEnter={() => setShowSOS(true)}
          onMouseLeave={() => setShowSOS(false)}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg"
            >
              <Shield className="h-8 w-8" />
            </Button>
          </motion.div>
          <div
            className={`absolute bottom-full right-0 mb-4 w-64 bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-700 transition-all duration-300 ${
              showSOS ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <h4 className="text-white font-medium mb-2">Emergency Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">All Emergencies:</span>
                <span className="text-red-500 font-bold">112</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Police:</span>
                <span className="text-amber-400 font-bold">100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ambulance:</span>
                <span className="text-amber-400 font-bold">108</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Tourist Helpline:</span>
                <span className="text-amber-400 font-bold">1363</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
