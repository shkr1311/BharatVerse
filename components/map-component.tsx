"use client"

import { useEffect, useState } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { cn } from "@/lib/utils"

// Fix Leaflet icon issue
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

interface Destination {
  id: number
  name: string
  state: string
  description: string
  image: string
  coordinates: [number, number]
}

interface MapComponentProps {
  destinations: Destination[]
  onMarkerClick?: (destination: Destination) => void
}

export default function MapComponent({ destinations, onMarkerClick }: MapComponentProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    fixLeafletIcon()
  }, [])

  if (!isMounted) {
    return (
      <div className="w-full h-[600px] bg-gray-800 animate-pulse flex items-center justify-center">
        <p className="text-gray-400">Loading map...</p>
      </div>
    )
  }

  // Center of India approximately
  const center: [number, number] = [20.5937, 78.9629]

  return (
    <div className={cn("w-full h-[600px] z-0")}>
      <MapContainer center={center} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={destination.coordinates}
            eventHandlers={{
              click: () => {
                if (onMarkerClick) {
                  onMarkerClick(destination)
                }
              },
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-gray-900">{destination.name}</h3>
                <p className="text-sm text-gray-600">{destination.state}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
