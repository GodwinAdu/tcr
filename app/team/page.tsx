import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamPage() {
  const executiveTeam = [
    {
      name: "Dr. Sarah Chen",
      position: "CEO & Co-Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With a Ph.D. in Environmental Engineering and over 15 years of experience in sustainable technologies, Sarah leads EcoGrow's vision and strategy. She previously led research at the Global Sustainability Institute and has published extensively on circular economy solutions.",
      linkedin: "#",
      twitter: "#",
      email: "sarah.chen@ecogrow.com",
    },
    {
      name: "Michael Rodriguez",
      position: "COO & Co-Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael brings 20 years of operational experience in both recycling and agricultural sectors. Before co-founding EcoGrow, he managed large-scale waste management operations and developed innovative logistics systems for agricultural supply chains.",
      linkedin: "#",
      twitter: "#",
      email: "michael.rodriguez@ecogrow.com",
    },
    {
      name: "Dr. Aisha Patel",
      position: "Chief Science Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Aisha leads our R&D department with her expertise in biochemistry and soil science. Her groundbreaking work on bioconversion technologies has resulted in 7 patents and transformed how we process organic waste into agricultural inputs.",
      linkedin: "#",
      twitter: "#",
      email: "aisha.patel@ecogrow.com",
    },
    {
      name: "James Wilson",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James oversees all technology development at EcoGrow, from AI-powered sorting systems to IoT agricultural solutions. With a background in computer science and environmental engineering, he bridges the gap between sustainability and cutting-edge technology.",
      linkedin: "#",
      twitter: "#",
      email: "james.wilson@ecogrow.com",
    },
  ]

  const recyclingTeam = [
    {
      name: "Elena Gomez",
      position: "Director of Recycling Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Elena manages our recycling facilities across the country, implementing best practices and continuous improvement processes. Her background in industrial engineering has helped optimize our sorting and processing systems.",
      linkedin: "#",
      email: "elena.gomez@ecogrow.com",
    },
    {
      name: "David Kim",
      position: "Head of AI Development",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David leads the team responsible for our AI-powered sorting technology. His expertise in machine learning and computer vision has revolutionized material identification and sorting accuracy.",
      linkedin: "#",
      email: "david.kim@ecogrow.com",
    },
    {
      name: "Olivia Chen",
      position: "Water Systems Engineer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Olivia designs and implements our water recycling systems, working closely with clients to create customized solutions. Her innovations have helped reduce water usage by an average of 40% across client installations.",
      linkedin: "#",
      email: "olivia.chen@ecogrow.com",
    },
    {
      name: "Marcus Johnson",
      position: "Logistics Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Marcus oversees our collection fleet and logistics operations, ensuring efficient and environmentally friendly waste collection. His implementation of route optimization has reduced our carbon footprint by 35%.",
      linkedin: "#",
      email: "marcus.johnson@ecogrow.com",
    },
  ]

  const agricultureTeam = [
    {
      name: "Dr. Fatima Al-Farsi",
      position: "Director of Agricultural Services",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Fatima leads our agricultural consulting and implementation teams. With a doctorate in Sustainable Agriculture, she helps farmers transition to more environmentally friendly and economically viable practices.",
      linkedin: "#",
      twitter: "#",
      email: "fatima.alfarsi@ecogrow.com",
    },
    {
      name: "Robert Tanaka",
      position: "Soil Science Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Robert analyzes soil conditions and develops customized amendment plans for our agricultural clients. His expertise in soil microbiology has been crucial in developing our premium compost formulations.",
      linkedin: "#",
      email: "robert.tanaka@ecogrow.com",
    },
    {
      name: "Priya Sharma",
      position: "Smart Irrigation Lead",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Priya designs and implements our IoT-enabled irrigation systems. Her background in agricultural engineering and software development allows her to create truly intelligent water management solutions.",
      linkedin: "#",
      email: "priya.sharma@ecogrow.com",
    },
    {
      name: "Thomas Okonkwo",
      position: "Renewable Energy Specialist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Thomas integrates solar and biogas energy solutions into agricultural operations. His work has helped numerous farms reduce their energy costs while minimizing their environmental impact.",
      linkedin: "#",
      email: "thomas.okonkwo@ecogrow.com",
    },
  ]

  const researchTeam = [
    {
      name: "Dr. Wei Zhang",
      position: "Senior Research Scientist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Wei leads research on next-generation bioconversion technologies. His work focuses on accelerating decomposition processes while maximizing nutrient retention in organic materials.",
      linkedin: "#",
      twitter: "#",
      email: "wei.zhang@ecogrow.com",
    },
    {
      name: "Dr. Isabella Rossi",
      position: "Materials Scientist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Isabella researches new methods for recycling complex materials and plastics. Her recent breakthrough in bioplastic processing has opened new possibilities for difficult-to-recycle materials.",
      linkedin: "#",
      email: "isabella.rossi@ecogrow.com",
    },
    {
      name: "Dr. Kwame Nkrumah",
      position: "Agricultural Biotechnologist",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Kwame studies the interaction between soil microbiomes and plant health. His research has led to the development of specialized microbial inoculants that enhance crop resilience and yield.",
      linkedin: "#",
      twitter: "#",
      email: "kwame.nkrumah@ecogrow.com",
    },
    {
      name: "Dr. Sophia Martinez",
      position: "Environmental Impact Analyst",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia quantifies the environmental benefits of our solutions through rigorous life-cycle assessments. Her work provides the data that backs our sustainability claims and helps identify areas for improvement.",
      linkedin: "#",
      email: "sophia.martinez@ecogrow.com",
    },
  ]

  return (
  
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-5xl">Meet Our Team</h1>
                <p className="max-w-[900px] text-blue-800 md:text-xl/relaxed">
                  The passionate experts behind EcoGrow's innovative sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Leadership</div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Executive Team</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Our visionary leaders who guide EcoGrow's mission and strategy.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {executiveTeam.map((member, index) => (
                <Card key={index} className="overflow-hidden border-blue-200">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                    <p className="text-blue-700 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.linkedin && (
                        <Link
                          href={member.linkedin}
                          className="text-blue-600 hover:text-blue-800"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {member.twitter && (
                        <Link
                          href={member.twitter}
                          className="text-blue-600 hover:text-blue-800"
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                      )}
                      {member.email && (
                        <Link
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:text-blue-800"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Departments</div>
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Department Leaders</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  Meet the experts who lead our specialized teams across different areas of expertise.
                </p>
              </div>
            </div>

            <Tabs defaultValue="recycling" className="w-full max-w-6xl mx-auto">
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
                  value="research"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg py-3"
                >
                  Research & Development
                </TabsTrigger>
              </TabsList>

              <TabsContent value="recycling" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {recyclingTeam.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-200">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                        <p className="text-blue-700 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s LinkedIn profile`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s Twitter profile`}
                            >
                              <Twitter className="h-5 w-5" />
                            </Link>
                          )}
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="agriculture" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {agricultureTeam.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-200">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                        <p className="text-blue-700 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s LinkedIn profile`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s Twitter profile`}
                            >
                              <Twitter className="h-5 w-5" />
                            </Link>
                          )}
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="research" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {researchTeam.map((member, index) => (
                    <Card key={index} className="overflow-hidden border-blue-200">
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                        <p className="text-blue-700 text-sm mb-4">{member.bio}</p>
                        <div className="flex space-x-3">
                          {member.linkedin && (
                            <Link
                              href={member.linkedin}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s LinkedIn profile`}
                            >
                              <Linkedin className="h-5 w-5" />
                            </Link>
                          )}
                          {member.twitter && (
                            <Link
                              href={member.twitter}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`${member.name}'s Twitter profile`}
                            >
                              <Twitter className="h-5 w-5" />
                            </Link>
                          )}
                          {member.email && (
                            <Link
                              href={`mailto:${member.email}`}
                              className="text-blue-600 hover:text-blue-800"
                              aria-label={`Email ${member.name}`}
                            >
                              <Mail className="h-5 w-5" />
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-950 sm:text-4xl">Join Our Team</h2>
                <p className="max-w-[900px] text-blue-700 md:text-xl/relaxed">
                  We're always looking for talented individuals who are passionate about sustainability and innovation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/careers">
                  <Button className="bg-blue-600 hover:bg-blue-700">View Open Positions</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Contact HR
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mx-auto max-w-4xl rounded-lg border border-blue-200 bg-blue-50 p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Why Work With Us?</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Meaningful Work</h4>
                    <p className="text-blue-700 text-sm">
                      Make a real difference in creating a more sustainable future for our planet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Innovation Culture</h4>
                    <p className="text-blue-700 text-sm">
                      Work with cutting-edge technologies and contribute to groundbreaking solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Growth Opportunities</h4>
                    <p className="text-blue-700 text-sm">
                      Continuous learning and development in a rapidly growing industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-blue-100 p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Inclusive Environment</h4>
                    <p className="text-blue-700 text-sm">
                      A diverse and supportive workplace where all perspectives are valued.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

