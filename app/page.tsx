
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Recycle, Droplets, Sun, Wind, Sprout, ChevronRight, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function Home() {
  return (

    <main className="flex-1">
      <section className="w-full py-12 md:py-24  bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl xl:text-6xl/none">
                  Sustainable Solutions for a Greener Tomorrow
                </h1>
                <p className="max-w-[600px] text-blue-800 md:text-xl">
                  We&#39;re pioneering innovative approaches to recycling and agriculture, creating a sustainable
                  ecosystem that benefits both people and planet.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore Our Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
            <Image
              src="/images/hero.jpeg"
              width={550}
              height={550}
              alt="Sustainable farming and recycling"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Mission</div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">
                Bridging Recycling and Agriculture
              </h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At EcoGrow, we believe in creating a circular economy where waste becomes a resource and agriculture
                becomes sustainable. Our innovative approach combines cutting-edge recycling technologies with modern
                agricultural practices.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="Our story"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-blue-900">Our Story</h3>
                    <p className="text-blue-700">
                      Founded in 2015, EcoGrow started with a simple idea: what if we could transform waste into
                      valuable agricultural inputs? Today, we&#39;re leading the industry in sustainable solutions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-blue-900">Our Vision</h3>
                    <p className="text-blue-700">
                      We envision a world where waste is minimized, resources are conserved, and agriculture works in
                      harmony with nature to feed communities sustainably.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-blue-900">Our Impact</h3>
                    <p className="text-blue-700">
                      To date, we&#39;ve diverted over 10,000 tons of waste from landfills and helped 500+ farms
                      transition to more sustainable practices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">
                Comprehensive Eco Solutions
              </h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of services designed to promote sustainability in both recycling and agriculture
                sectors.
              </p>
            </div>
          </div>

          <Tabs defaultValue="recycling" className="mt-12 w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-blue-100">
              <TabsTrigger
                value="recycling"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Recycling Solutions
              </TabsTrigger>
              <TabsTrigger
                value="agriculture"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Agricultural Services
              </TabsTrigger>
            </TabsList>
            <TabsContent value="recycling" className="p-4 bg-white rounded-b-lg shadow-sm">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-blue-200">
                  <CardHeader className="pb-2">
                    <Recycle className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Waste Collection & Sorting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      State-of-the-art collection and sorting facilities that process various waste streams
                      efficiently.
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
                    <Droplets className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Water Recycling</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      Advanced water treatment and recycling systems for industrial and agricultural use.
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
                    <CardTitle className="text-blue-900">Organic Waste Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      Converting organic waste into valuable compost and soil amendments for agricultural use.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="agriculture" className="p-4 bg-white rounded-b-lg shadow-sm">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-blue-200">
                  <CardHeader className="pb-2">
                    <Sprout className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Sustainable Farming</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      Consultation and implementation of sustainable farming practices that reduce environmental
                      impact.
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
                    <Leaf className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Organic Inputs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      Production and supply of organic fertilizers, soil amendments, and pest control solutions.
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
                    <Sun className="h-12 w-12 text-blue-600 mb-2" />
                    <CardTitle className="text-blue-900">Renewable Energy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-blue-700">
                      Integration of solar and biogas energy solutions for agricultural operations.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Advanced Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">
                Cutting-Edge Technology
              </h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our solutions leverage the latest technologies to maximize efficiency and sustainability.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Recycle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">AI-Powered Sorting</h3>
              <p className="text-blue-700">
                Our recycling facilities use artificial intelligence to identify and sort materials with 99.8%
                accuracy.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Droplets className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Smart Irrigation</h3>
              <p className="text-blue-700">
                IoT-enabled irrigation systems that optimize water usage based on soil conditions and weather
                forecasts.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Bioconversion</h3>
              <p className="text-blue-700">
                Proprietary bioconversion technology that transforms organic waste into high-quality agricultural
                inputs.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Sun className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Solar Integration</h3>
              <p className="text-blue-700">
                Seamless integration of solar power into agricultural operations, reducing carbon footprint.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Wind className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Carbon Tracking</h3>
              <p className="text-blue-700">
                Advanced monitoring systems that track carbon sequestration and emissions reduction in real-time.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Sprout className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Precision Agriculture</h3>
              <p className="text-blue-700">
                Data-driven farming techniques that optimize resource use and maximize crop yields sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Sustainable Revolution
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you&#39;re a farmer looking to adopt sustainable practices, a business aiming to improve your
                  recycling efforts, or a community seeking environmental solutions, we&#39;re here to help.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">Schedule a Consultation</Button>
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-400 opacity-50 animate-pulse"></div>
                <div className="z-10 text-center p-8">
                  <Leaf className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold">10K+</p>
                      <p className="text-sm">Tons of Waste Recycled</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-sm">Farms Supported</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">30%</p>
                      <p className="text-sm">Water Saved</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">45K</p>
                      <p className="text-sm">CO₂ Tons Reduced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Get In Touch</div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">Contact Us</h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or ready to start your sustainability journey? Reach out to our team.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Visit Us</h3>
                  <p className="text-blue-700">123 Eco Street, Green Valley, CA 94123</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Email Us</h3>
                  <p className="text-blue-700">info@ecogrow.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Call Us</h3>
                  <p className="text-blue-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-white p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Monday - Friday:</span>
                    <span className="text-blue-900 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Saturday:</span>
                    <span className="text-blue-900 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Sunday:</span>
                    <span className="text-blue-900 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-blue-200 bg-white p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-blue-900">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-blue-900">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-blue-900">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-blue-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm min-h-[120px]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

