// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black w-full text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-pink-500 tracking-wide">CodeCrazy</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#home" className="hover:text-pink-500 transition">Home</Link>
          <Link href="#about" className="hover:text-pink-500 transition">About</Link>
          <Link href="#services" className="hover:text-pink-500 transition">Services</Link>
          <Link href="#technology" className="hover:text-pink-500 transition">Technology</Link>
          <Link href="#project" className="hover:text-pink-500 transition">Projects</Link>
          <Link href="#contact" className="hover:text-pink-500 transition">Contact</Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 px-6">
          <Link href="#home" className="hover:text-pink-500 transition" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#about" className="hover:text-pink-500 transition" onClick={() => setOpen(false)}>About</Link>
          <Link href="#services" className="hover:text-pink-500 transition" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#contact" className="hover:text-pink-500 transition" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
