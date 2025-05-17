// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import AboutPage from '@/components/About';
import ServicesPage from '@/components/Service';
import TechnologyPage from '@/components/Technology';
import { Contact } from 'lucide-react';
import ContactPage from '@/components/Contact';
import Footer from '@/components/Footer';
import ProjectPage from '@/components/Project';

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById('home-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 2 + 1
    }));

    function drawLines() {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
      }
      drawLines();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <div className='bg-black flex justify-center items-center flex-col'>
      <Header/>
    <main id='home' className="relative min-h-screen bg-black text-white overflow-hidden">
      <canvas id="home-bg" className="absolute inset-0 w-full h-full z-0"></canvas>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col justify-center items-center h-[calc(100vh-4rem)] px-4 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 bg-clip-text text-transparent mb-6">
          Welcome to CodeCrazy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          We build stunning websites, web applications, and mobile apps to empower your ideas and drive innovation.
        </p>

        <Link href="/about" className="mt-8 inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Learn More
        </Link>
      </motion.div>
        
    </main>
    <AboutPage/>
        <ServicesPage/>
        <TechnologyPage/>
        <ProjectPage/>
       <ContactPage/>
    <Footer/>
    </div>
  );
}