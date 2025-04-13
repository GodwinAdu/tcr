"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Recycle, X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    title: string
    description: string
  } | null>(null)

  const recyclingImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Advanced recycling facility with AI sorting technology",
      title: "AI-Powered Sorting Facility",
      description:
        "Our state-of-the-art recycling facility in Green Valley, CA featuring advanced AI-powered sorting technology that achieves 99.8% accuracy.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Water recycling system installation",
      title: "Water Recycling Installation",
      description:
        "Installation of a comprehensive water recycling system at Harvest Valley Foods, reducing their water consumption by 45% and saving over 2 million gallons annually.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Organic waste processing facility",
      title: "Organic Waste Processing",
      description:
        "Our organic waste processing facility that converts food waste and agricultural residues into high-quality compost and soil amendments.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Recycling collection trucks",
      title: "Waste Collection Fleet",
      description:
        "Our electric waste collection fleet that operates with zero emissions while efficiently collecting recyclable materials from businesses and communities.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Recycled materials ready for reuse",
      title: "Processed Recyclables",
      description:
        "Sorted and processed recyclable materials ready to be transformed into new products, demonstrating our commitment to the circular economy.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Team sorting recyclables",
      title: "Quality Control Team",
      description:
        "Our dedicated quality control team ensuring that all processed materials meet the highest standards before being sent to manufacturers.",
    },
  ]

  const agricultureImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Sustainable farm using EcoGrow solutions",
      title: "Sustainable Farming",
      description:
        "Sunfield Farms implementing our sustainable farming practices, resulting in a 75% reduction in chemical inputs while maintaining high yields.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Smart irrigation system in action",
      title: "Smart Irrigation System",
      description:
        "Our IoT-enabled smart irrigation system in action, precisely delivering water based on real-time soil moisture data and weather forecasts.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Organic inputs being applied to crops",
      title: "Organic Inputs Application",
      description:
        "Application of our organic fertilizers and soil amendments, which are produced from recycled organic waste and optimized for maximum crop benefit.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Solar panels integrated with agriculture",
      title: "Solar Integration",
      description:
        "Innovative solar panel installation that allows for dual use of land for both energy generation and crop production, maximizing land efficiency.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Precision agriculture using drones",
      title: "Precision Agriculture",
      description:
        "Drone-based monitoring system providing detailed crop health data to farmers, enabling targeted interventions and resource optimization.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Bioconversion technology in action",
      title: "Bioconversion Process",
      description:
        "Our proprietary bioconversion technology transforming organic waste into high-quality agricultural inputs through an accelerated, controlled process.",
    },
  ]

  const impactImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Before and after of restored land",
      title: "Land Restoration",
      description:
        "Before and after images of land restored through our sustainable agriculture practices, showing dramatic improvement in soil health and biodiversity.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Community garden supported by EcoGrow",
      title: "Community Impact",
      description:
        "Community garden in an urban food desert, supported by EcoGrow's donation of organic inputs and technical expertise.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Educational workshop for farmers",
      title: "Farmer Education",
      description:
        "Educational workshop for local farmers learning about sustainable practices and how to implement them in their operations.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Waste diverted from landfill",
      title: "Waste Diversion",
      description:
        "Visual representation of the 10,000+ tons of waste we've diverted from landfills annually, shown next to the equivalent of 1,000 elephants for scale.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Carbon sequestration measurement",
      title: "Carbon Sequestration",
      description:
        "Our team measuring carbon sequestration in soil at a partner farm, documenting the climate benefits of our agricultural practices.",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Awards and recognition",
      title: "Recognition",
      description:
        "EcoGrow team receiving the National Sustainability Award for our innovative approach to creating a circular economy in agriculture and recycling.",
    },
  ]

  return (
   

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">Our Work in Action</h1>
                <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                  Explore our gallery to see how our sustainable solutions are making a difference in recycling and
                  agriculture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="recycling" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-100 p-1 mb-12">
                <TabsTrigger
                  value="recycling"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg py-3"
                >
                  Recycling
                </TabsTrigger>
                <TabsTrigger
                  value="agriculture"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg py-3"
                >
                  Agriculture
                </TabsTrigger>
                <TabsTrigger
                  value="impact"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg py-3"
                >
                  Impact
                </TabsTrigger>
              </TabsList>

              <TabsContent value="recycling" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recyclingImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          width={800}
                          height={600}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-blue-900">{image.title}</h3>
                        <p className="text-sm text-blue-700 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="agriculture" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agricultureImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          width={800}
                          height={600}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-blue-900">{image.title}</h3>
                        <p className="text-sm text-blue-700 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="impact" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {impactImages.map((image, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-blue-200 bg-white shadow-sm transition-all hover:shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          width={800}
                          height={600}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-blue-900">{image.title}</h3>
                        <p className="text-sm text-blue-700 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl text-blue-900">{selectedImage.title}</DialogTitle>
                <DialogDescription className="text-blue-700">{selectedImage.description}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  fill
                  alt={selectedImage.alt}
                  className="object-cover"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 rounded-full bg-white/80 p-1 text-blue-950 backdrop-blur-sm transition-colors hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogContent>
          </Dialog>
        )}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Want to See More?</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Schedule a visit to one of our facilities or partner farms to experience our sustainable solutions in
                  person.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">Schedule a Visit</Button>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

