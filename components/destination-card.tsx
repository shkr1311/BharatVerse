import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface DestinationCardProps {
  destination: {
    id: number
    name: string
    location: string
    image: string
    description: string
  }
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48">
        <Image
          src={destination.image || "/placeholder.svg?height=400&width=600"}
          alt={destination.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-semibold text-white mb-1">{destination.name}</h3>
        <p className="text-amber-400 text-sm mb-3">{destination.location}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{destination.description}</p>
        <Button asChild variant="outline" className="w-full border-amber-500 text-amber-500 hover:bg-amber-500/10">
          <Link href={`/destinations/${destination.id}`}>
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
