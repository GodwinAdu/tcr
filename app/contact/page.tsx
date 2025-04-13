import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">Get In Touch</h1>
                <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                  Have questions or ready to start your sustainability journey? Our team is here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Visit Us</h3>
                      <address className="not-italic text-blue-700">
                        <p>EcoGrow Headquarters</p>
                        <p>123 Eco Street</p>
                        <p>Green Valley, CA 94123</p>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Email Us</h3>
                      <p className="text-blue-700">
                        <a href="mailto:info@ecogrow.com" className="hover:underline">
                          info@ecogrow.com
                        </a>
                      </p>
                      <p className="text-blue-700">
                        <a href="mailto:support@ecogrow.com" className="hover:underline">
                          support@ecogrow.com
                        </a>{" "}
                        (Existing Clients)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Call Us</h3>
                      <p className="text-blue-700">
                        <a href="tel:+15551234567" className="hover:underline">
                          (555) 123-4567
                        </a>{" "}
                        (Main Office)
                      </p>
                      <p className="text-blue-700">
                        <a href="tel:+15559876543" className="hover:underline">
                          (555) 987-6543
                        </a>{" "}
                        (Support Hotline)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-blue-100 p-3">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900">Business Hours</h3>
                      <div className="space-y-1 text-blue-700">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Regional Offices</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-blue-900">East Coast Office</h4>
                        <address className="not-italic text-blue-700 text-sm">
                          <p>456 Sustainable Ave</p>
                          <p>Boston, MA 02110</p>
                          <p>
                            <a href="tel:+16175551234" className="hover:underline">
                              (617) 555-1234
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardContent className="p-4">
                        <h4 className="font-bold text-blue-900">Midwest Office</h4>
                        <address className="not-italic text-blue-700 text-sm">
                          <p>789 Harvest Lane</p>
                          <p>Chicago, IL 60601</p>
                          <p>
                            <a href="tel:+13125559876" className="hover:underline">
                              (312) 555-9876
                            </a>
                          </p>
                        </address>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="rounded-full bg-blue-100 p-3 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-blue-100 p-3 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-blue-100 p-3 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="rounded-full bg-blue-100 p-3 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-blue-200 bg-white p-6 shadow-sm">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900">Send Us a Message</h3>
                </div>
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
                    <label htmlFor="phone" className="text-sm font-medium text-blue-900">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-blue-900">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm"
                    >
                      <option value="" disabled selected>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="recycling">Recycling Solutions</option>
                      <option value="agriculture">Agricultural Services</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-sm min-h-[150px]"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" id="consent" className="mt-1 rounded border-blue-200" />
                    <label htmlFor="consent" className="ml-2 text-sm text-blue-700">
                      I consent to EcoGrow collecting and storing my data for the purpose of responding to my inquiry.
                      See our{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Find Us</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Visit our headquarters or one of our regional offices to learn more about our sustainable solutions.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-blue-200 shadow-sm">
              <div className="aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  width={1200}
                  height={600}
                  alt="Map showing EcoGrow headquarters location"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Directions</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Find answers to common questions about our services and solutions.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl space-y-6">
              <div className="rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  How quickly can you implement your recycling solutions?
                </h3>
                <p className="text-blue-700">
                  Implementation timelines vary based on the scale and complexity of your needs. Typically, our basic
                  recycling programs can be set up within 2-4 weeks, while more comprehensive solutions involving custom
                  equipment may take 2-3 months. We'll provide a detailed timeline during your consultation.
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Do you offer services for small farms or only large agricultural operations?
                </h3>
                <p className="text-blue-700">
                  We work with agricultural operations of all sizes, from small family farms to large commercial
                  enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budget of
                  your operation, regardless of its size.
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  What makes your organic inputs different from other products on the market?
                </h3>
                <p className="text-blue-700">
                  Our organic inputs are produced using our proprietary bioconversion technology, which results in
                  higher nutrient content, better bioavailability, and more consistent performance compared to
                  traditional alternatives. Additionally, they're made from recycled organic waste, creating a true
                  circular economy solution.
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Can you help with regulatory compliance for waste management?
                </h3>
                <p className="text-blue-700">
                  Yes, we have extensive experience navigating the regulatory landscape for waste management and
                  recycling. Our team can help ensure your operations comply with local, state, and federal regulations,
                  and we provide all necessary documentation and reporting.
                </p>
              </div>

              <div className="rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Do you offer financing options for your solutions?
                </h3>
                <p className="text-blue-700">
                  Yes, we offer various financing options including leasing, payment plans, and in some cases,
                  performance-based pricing models. We also help clients identify and apply for relevant grants and
                  incentives that can offset the cost of implementing sustainable solutions.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-blue-700 mb-4">Don't see your question here?</p>
              <Button className="bg-blue-600 hover:bg-blue-700">Contact Our Support Team</Button>
            </div>
          </div>
        </section>
      </main>

     
  )
}

