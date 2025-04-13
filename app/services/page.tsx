import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
   
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                  Comprehensive solutions for sustainable recycling and agriculture that drive environmental and
                  economic benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 space-y-12">
           
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                  <div>
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                      Core Service
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">
                      Waste Collection & Sorting
                    </h2>
                    <div className="space-y-4 text-blue-700">
                      <p>
                        Our state-of-the-art waste collection and sorting facilities process various waste streams with
                        industry-leading efficiency and accuracy. Using advanced technologies including AI-powered
                        sorting systems, we ensure maximum resource recovery and minimal environmental impact.
                      </p>
                      <p>
                        We handle municipal solid waste, commercial waste, industrial byproducts, and specialized waste
                        streams, providing tailored solutions for each client's unique needs.
                      </p>

                      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>AI-powered sorting technology with 99.8% accuracy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Customized collection schedules and container options</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Real-time tracking and reporting of waste diversion rates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Zero-landfill options for environmentally conscious clients</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-blue-600 hover:bg-blue-700">Request a Quote</Button>
                    </div>
                  </div>
                  <Image
                    src="/images/1.jpeg"
                    width={600}
                    height={600}
                    alt="Advanced waste sorting facility"
                    className="rounded-xl object-cover w-full h-auto shadow-lg"
                  />
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                  <Image
                    src="/images/2.jpeg"
                    width={600}
                    height={600}
                    alt="Water recycling system"
                    className="rounded-xl object-cover w-full h-auto shadow-lg order-2 lg:order-1"
                  />
                  <div className="order-1 lg:order-2">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                      Specialized Service
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Water Recycling</h2>
                    <div className="space-y-4 text-blue-700">
                      <p>
                        Our advanced water treatment and recycling systems help businesses and agricultural operations
                        conserve this precious resource while reducing costs. We design, install, and maintain custom
                        water recycling solutions that address specific water quality and quantity requirements.
                      </p>
                      <p>
                        From greywater recycling for irrigation to industrial process water reclamation, our systems
                        employ cutting-edge filtration, biological treatment, and purification technologies.
                      </p>

                      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Modular systems that can scale with your needs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Remote monitoring and automated maintenance alerts</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Water quality testing and compliance reporting</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Average water usage reduction of 30-50%</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                    </div>
                  </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                  <div>
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                      Integrated Solution
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Organic Waste Processing</h2>
                    <div className="space-y-4 text-blue-700">
                      <p>
                        Our organic waste processing service transforms food waste, agricultural residues, and other
                        organic materials into valuable resources. Using a combination of composting, anaerobic
                        digestion, and our proprietary bioconversion technology, we create high-quality soil amendments,
                        organic fertilizers, and biogas.
                      </p>
                      <p>
                        This closed-loop approach not only diverts waste from landfills but also produces sustainable
                        inputs for agriculture, creating a true circular economy.
                      </p>

                      <h3 className="text-xl font-bold text-blue-900 mt-6 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Odor-controlled processing facilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Multiple processing options based on waste type and volume</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Option to purchase back finished compost or fertilizer products</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <span>Carbon credits for qualifying participants</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Button className="bg-blue-600 hover:bg-blue-700">Schedule a Consultation</Button>
                    </div>
                  </div>
                  <Image
                    src="/images/3.jpeg"
                    width={600}
                    height={600}
                    alt="Organic waste processing facility"
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
                  Client Success
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Case Studies</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  See how our services have helped clients achieve their sustainability goals while improving their
                  bottom line.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-blue-200">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Urban farm using EcoGrow solutions"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-800 mb-3">
                    Urban Agriculture
                  </div>
                  <CardTitle className="text-blue-900 mb-2">City Greens Urban Farm</CardTitle>
                  <CardDescription className="text-blue-700">
                    How a 2-acre urban farm increased yields by 40% while reducing water usage by 60% through our
                    integrated water recycling and organic inputs program.
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Food processing facility"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-800 mb-3">
                    Food Processing
                  </div>
                  <CardTitle className="text-blue-900 mb-2">Harvest Valley Foods</CardTitle>
                  <CardDescription className="text-blue-700">
                    How our organic waste processing solution helped a food manufacturer achieve zero-waste status and
                    generate $200,000 in annual savings.
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Large scale farm"
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-xs text-blue-800 mb-3">
                    Commercial Agriculture
                  </div>
                  <CardTitle className="text-blue-900 mb-2">Sunfield Farms</CardTitle>
                  <CardDescription className="text-blue-700">
                    How a 500-acre commercial farm reduced chemical inputs by 75% and increased soil carbon
                    sequestration through our sustainable farming program.
                  </CardDescription>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>

  )
}

