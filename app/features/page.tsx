import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Sun, Wind, Sprout, ArrowRight, CheckCircle, BarChart, Smartphone, Database } from "lucide-react"

export default function FeaturesPage() {
  return (
    

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">
                  Cutting-Edge Technology
                </h1>
                <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                  Our solutions leverage the latest technologies to maximize efficiency and sustainability in recycling
                  and agriculture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                  Recycling Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">AI-Powered Sorting</h2>
                <div className="space-y-4 text-blue-700">
                  <p>
                    Our recycling facilities utilize advanced artificial intelligence and machine learning algorithms to
                    identify and sort materials with unprecedented accuracy. This technology can distinguish between
                    different types of plastics, metals, paper, and organic materials, even when they're mixed or
                    contaminated.
                  </p>
                  <p>
                    The AI system continuously learns and improves, adapting to new packaging materials and waste
                    streams as they enter the recycling system. This ensures that we maintain our industry-leading 99.8%
                    sorting accuracy even as waste composition changes over time.
                  </p>

                  <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Capabilities:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Multi-spectral imaging that can "see" beyond human vision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Real-time processing of thousands of items per minute</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Self-learning algorithms that improve over time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Integration with robotic sorting systems for automated processing</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">See It In Action</Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="AI-powered recycling sorting system"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Smart irrigation system in action"
                className="rounded-xl object-cover w-full h-auto shadow-lg order-2 lg:order-1"
              />
              <div className="order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                  Agricultural Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Smart Irrigation</h2>
                <div className="space-y-4 text-blue-700">
                  <p>
                    Our IoT-enabled smart irrigation systems revolutionize water management in agriculture. By combining
                    soil moisture sensors, weather data, crop-specific algorithms, and automated controls, we create
                    precision irrigation solutions that deliver the right amount of water at the right time.
                  </p>
                  <p>
                    These systems not only conserve water—typically reducing usage by 30-50%—but also improve crop
                    health and yields by preventing both under and over-watering. The result is more efficient resource
                    use, lower costs, and better agricultural outcomes.
                  </p>

                  <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Capabilities:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Real-time soil moisture monitoring at multiple depths</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Integration with local weather forecasts to optimize watering schedules</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Mobile app control and monitoring for farmers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Zone-specific watering based on crop type and growth stage</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                  Proprietary Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Bioconversion Technology</h2>
                <div className="space-y-4 text-blue-700">
                  <p>
                    Our proprietary bioconversion technology transforms organic waste into high-quality agricultural
                    inputs through an accelerated, controlled process. Unlike traditional composting, which can take
                    months, our system produces finished products in just weeks while capturing more nutrients and
                    eliminating pathogens.
                  </p>
                  <p>
                    The process combines specific microbial cultures, precise environmental controls, and continuous
                    monitoring to optimize decomposition and nutrient preservation. The result is consistent,
                    high-performance soil amendments and organic fertilizers that outperform conventional alternatives.
                  </p>

                  <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Capabilities:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Processing time reduced by up to 75% compared to traditional methods</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Higher nutrient retention and bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Pathogen-free outputs that meet the strictest safety standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>Customizable formulations for specific crop needs</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">Explore Products</Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Bioconversion technology facility"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Additional Technologies
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">
                  More Innovative Features
                </h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Our comprehensive technology ecosystem includes many more innovations that drive sustainability and
                  efficiency.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <Sun className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Solar Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Seamless integration of solar power into agricultural operations, with specialized mounting systems
                    that allow dual use of land for both energy generation and crop production.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <Wind className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Carbon Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Advanced monitoring systems that track carbon sequestration and emissions reduction in real-time,
                    providing verifiable data for carbon credit programs and sustainability reporting.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <Sprout className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Precision Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Data-driven farming techniques that optimize resource use and maximize crop yields sustainably,
                    including drone monitoring, soil mapping, and variable-rate application technologies.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <BarChart className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Analytics Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Comprehensive data visualization and analysis tools that help clients track their sustainability
                    metrics, resource usage, and cost savings across all our solutions.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <Smartphone className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Mobile Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    User-friendly mobile applications that allow clients to monitor and control their systems remotely,
                    receive alerts, and access support when needed.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader className="pb-2">
                  <Database className="h-12 w-12 text-blue-600 mb-2" />
                  <CardTitle className="text-blue-900">Blockchain Traceability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700">
                    Secure, transparent tracking of materials from waste collection through processing to end products,
                    ensuring accountability and enabling circular economy verification.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="Research and development lab"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
              <div>
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                  Innovation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Research & Development</h2>
                <div className="space-y-4 text-blue-700">
                  <p>
                    At EcoGrow, innovation is at the core of everything we do. Our dedicated R&D team works continuously
                    to develop new technologies and improve existing ones, ensuring we stay at the forefront of
                    sustainable solutions for recycling and agriculture.
                  </p>
                  <p>
                    We invest over 15% of our annual revenue in research and development, collaborating with leading
                    universities, research institutions, and industry partners to push the boundaries of what's possible
                    in sustainability technology.
                  </p>
                  <p>
                    Our current research focuses include advanced bioplastic recycling, carbon-negative agricultural
                    practices, and AI-optimized resource management systems. These innovations will help our clients
                    achieve even greater environmental and economic benefits in the future.
                  </p>
                </div>
                <div className="mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">Explore Our Research</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Experience Our Technology?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed">
                  Schedule a demonstration to see our innovative solutions in action and discuss how they can benefit
                  your organization.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">Schedule a Demo</Button>
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    
  )
}

