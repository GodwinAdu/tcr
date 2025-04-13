import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Users, Award, Clock, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">About EcoGrow</h1>
              <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                We're on a mission to revolutionize the way we think about waste and agriculture, creating sustainable
                solutions for a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Our Story</h2>
              <div className="space-y-4 text-blue-700">
                <p>
                  EcoGrow was founded in 2015 by a team of environmental scientists and agricultural experts who
                  shared a common vision: to create a world where waste is minimized, resources are conserved, and
                  agriculture works in harmony with nature.
                </p>
                <p>
                  What began as a small research project to convert food waste into organic fertilizer has grown into
                  a comprehensive ecosystem of sustainable solutions spanning both recycling and agriculture sectors.
                </p>
                <p>
                  Our journey hasn't been without challenges. In the early days, we faced skepticism about the
                  scalability and effectiveness of our approaches. But through persistence, innovation, and a
                  commitment to measurable results, we've proven that sustainability and profitability can go hand in
                  hand.
                </p>
                <p>
                  Today, EcoGrow operates in 12 countries, employs over 250 people, and has helped thousands of
                  businesses and farms reduce their environmental footprint while improving their bottom line.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <Image
                src="/placeholder.svg?height=600&width=600"
                width={600}
                height={600}
                alt="EcoGrow team working on sustainable solutions"
                className="relative z-10 rounded-xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">What Drives Us</h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                Our core values guide everything we do, from how we develop our solutions to how we interact with our
                clients and communities.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Environmental Stewardship</h3>
              <p className="text-blue-700">
                We believe in protecting and enhancing the natural environment through responsible practices and
                innovative solutions.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Community Impact</h3>
              <p className="text-blue-700">
                We're committed to creating positive change in the communities where we operate, supporting local
                economies and improving quality of life.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Excellence & Innovation</h3>
              <p className="text-blue-700">
                We strive for excellence in everything we do and continuously innovate to develop better, more
                effective solutions.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Long-term Thinking</h3>
              <p className="text-blue-700">
                We make decisions with the future in mind, considering the long-term impact of our actions on the
                planet and future generations.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Global Perspective</h3>
              <p className="text-blue-700">
                We recognize that environmental challenges are global in nature and require collaborative,
                cross-border solutions.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <div className="rounded-full bg-blue-100 p-3">
                <Recycle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Circular Economy</h3>
              <p className="text-blue-700">
                We embrace the principles of a circular economy, where waste is minimized and resources are kept in
                use for as long as possible.
              </p>
            </div>
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
              alt="EcoGrow leadership team"
              className="rounded-xl object-cover w-full h-auto shadow-lg order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Our Leadership</h2>
              <div className="space-y-4 text-blue-700">
                <p>
                  Our leadership team brings together diverse expertise from environmental science, agriculture,
                  technology, and business management. This multidisciplinary approach allows us to develop holistic
                  solutions that address complex sustainability challenges.
                </p>
                <p>
                  Led by our CEO and co-founder, Dr. Sarah Chen, our executive team is committed to driving innovation
                  while maintaining a strong focus on our core mission and values.
                </p>
                <p>
                  We believe in leading by example, which is why our headquarters is powered by 100% renewable energy,
                  our vehicle fleet is fully electric, and we maintain a zero-waste policy across all our facilities.
                </p>
              </div>
              <div className="mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">Meet Our Team</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Making a Difference</h2>
              <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                We measure our success not just by financial metrics, but by the positive impact we create for the
                environment and communities.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">10K+</p>
              <h3 className="text-xl font-bold text-blue-900">Tons of Waste Recycled</h3>
              <p className="text-blue-700">Annually diverted from landfills and converted into valuable resources.</p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <h3 className="text-xl font-bold text-blue-900">Farms Supported</h3>
              <p className="text-blue-700">
                Helping farmers transition to more sustainable and profitable practices.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">30%</p>
              <h3 className="text-xl font-bold text-blue-900">Water Saved</h3>
              <p className="text-blue-700">Average reduction in water usage for farms implementing our solutions.</p>
            </div>

            <div className="flex flex-col items-center space-y-2 rounded-lg border border-blue-200 bg-white p-6 text-center">
              <p className="text-4xl font-bold text-blue-600">45K</p>
              <h3 className="text-xl font-bold text-blue-900">CO₂ Tons Reduced</h3>
              <p className="text-blue-700">Total carbon emissions reduced through our integrated approach.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

