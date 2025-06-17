import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, MessageSquare, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold">Publink Interest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Connect, Engage, and Create Impact Together
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Publink Interest is a communication and engagement platform designed to support organizations,
                  initiatives, and networks working for the common good.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/demo">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Connect with Pi Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/learn-more">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  alt="Publink Interest Platform"
                  className="rounded-lg object-cover aspect-video overflow-hidden"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Platform Features</h2>
              <p className="text-gray-500 md:text-xl/relaxed mt-2">
                Tools designed to help your organization create meaningful impact
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-emerald-100">
                    <MessageSquare className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold">Community Engagement</h3>
                  <p className="text-gray-500">
                    Foster meaningful discussions and connections within your community through forums, polls, and
                    interactive events.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Collaborative Workspaces</h3>
                  <p className="text-gray-500">
                    Create shared spaces for your team and partners to collaborate on projects, share resources, and
                    track progress.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-teal-100">
                    <Globe className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold">Impact Tracking</h3>
                  <p className="text-gray-500">
                    Measure and visualize your organization's impact with customizable metrics and beautiful reporting
                    tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <img
                  alt="About Publink Interest"
                  className="rounded-lg object-cover mx-auto"
                  height="400"
                  src="/placeholder.svg?height=400&width=500"
                  width="500"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  At Publink Interest, we believe in the power of connection to drive positive change. Our platform is
                  built to empower organizations working for the common good by providing them with the tools they need
                  to communicate effectively, engage meaningfully, and collaborate seamlessly.
                </p>
                <p className="text-gray-500">
                  Founded by a team of social impact enthusiasts, we're committed to supporting initiatives that make
                  our world a better place. Our platform is designed with the unique needs of nonprofits, community
                  organizations, and social enterprises in mind.
                </p>
                <Link href="/about-us">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">What Our Users Say</h2>
              <p className="text-gray-500 md:text-xl/relaxed mt-2">
                Hear from organizations that have transformed their impact with Publink Interest
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="italic text-gray-500">
                    "Publink Interest has revolutionized how we engage with our community. The platform's intuitive
                    design and powerful features have helped us increase participation by 45%."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 w-12 h-12"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Community Outreach Director, EcoAlliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="italic text-gray-500">
                    "The collaborative tools have transformed how our distributed team works together. We're more
                    efficient, more connected, and making a bigger impact than ever before."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 w-12 h-12"></div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-gray-500">Executive Director, Global Education Fund</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p className="italic text-gray-500">
                    "The impact tracking features have been invaluable for our grant reporting. We can now clearly
                    demonstrate our outcomes to funders with just a few clicks."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-100 w-12 h-12"></div>
                    <div>
                      <p className="font-medium">Aisha Patel</p>
                      <p className="text-sm text-gray-500">Program Manager, Community Health Initiative</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Ready to make a bigger impact?</h2>
            <p className="md:text-xl/relaxed mb-6 max-w-2xl mx-auto">
              Join thousands of organizations using Publink Interest to connect, engage, and create change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" variant="secondary">
                  Try the Demo
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-emerald-600"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-emerald-600" />
                <span className="font-bold">Publink Interest</span>
              </div>
              <p className="text-sm text-gray-500">
                Empowering organizations to create positive change through better communication and engagement.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="text-gray-500 hover:text-emerald-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-500 hover:text-emerald-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-gray-500 hover:text-emerald-600">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-gray-500 hover:text-emerald-600">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-emerald-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-emerald-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-500 hover:text-emerald-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-emerald-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-emerald-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-emerald-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-500 hover:text-emerald-600">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
            <p>© 2025 Publink Interest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
