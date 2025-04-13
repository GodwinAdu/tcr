import React from 'react'
import { Button } from './ui/button'
import { Recycle } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full border-t bg-blue-950 text-white">
            <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Recycle className="h-6 w-6 text-blue-300" />
                            <span className="text-xl font-bold">TCR</span>
                        </div>
                        <p className="text-blue-300">
                            Pioneering sustainable solutions at the intersection of recycling and agriculture.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-blue-300 hover:text-white">
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
                            <Link href="#" className="text-blue-300 hover:text-white">
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
                            <Link href="#" className="text-blue-300 hover:text-white">
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
                            <Link href="#" className="text-blue-300 hover:text-white">
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

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-blue-300 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-blue-300 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-blue-300 hover:text-white">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-blue-300 hover:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-blue-300 hover:text-white">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="text-blue-300 hover:text-white">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-blue-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-blue-300 hover:text-white">
                                    Waste Collection
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-300 hover:text-white">
                                    Water Recycling
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-300 hover:text-white">
                                    Sustainable Farming
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-300 hover:text-white">
                                    Organic Inputs
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-blue-300 hover:text-white">
                                    Renewable Energy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Newsletter</h3>
                        <p className="text-blue-300">
                            Subscribe to our newsletter for the latest updates on sustainable practices and innovations.
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                className="w-full rounded-md border border-blue-800 bg-blue-900 px-3 py-2 text-sm text-white placeholder:text-blue-400"
                                placeholder="Your email address"
                            />
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-blue-800 pt-8 text-center">
                    <p className="text-blue-300">&copy; {new Date().getFullYear()} TCR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
