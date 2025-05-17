import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceCardProps {
  experience: {
    id: number
    title: string
    image: string
    description: string
  }
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 h-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
      <div className="relative h-48">
        <Image
          src={experience.image || "/placeholder.svg?height=400&width=600"}
          alt={experience.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-gray-300">{experience.description}</p>
      </CardContent>
    </Card>
  )
}
