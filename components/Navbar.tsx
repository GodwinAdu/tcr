'use client'

import { Recycle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Features', href: '/features' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky pl-5 top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Recycle className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-800">TCR</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium text-blue-900 hover:text-blue-700 ${
                pathname === href ? 'border-b-2 border-blue-600' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
      </div>
    </header>
  );
};

export default Navbar;

