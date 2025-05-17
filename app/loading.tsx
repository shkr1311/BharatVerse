import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Loader2 className="h-16 w-16 text-amber-500 animate-spin mb-4" />
        <h2 className="text-2xl font-semibold text-white">Loading...</h2>
        <p className="text-gray-300 mt-2">Preparing your Indian adventure</p>
      </div>
    </div>
  )
}
