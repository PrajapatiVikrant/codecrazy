'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandsHelping, FaUsers, FaStar } from 'react-icons/fa';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

const team = [
  {
    name: 'Vikrant Prajapati',
    role: 'Founder & Backend Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Anita Sharma',
    role: 'Frontend Developer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rohit Singh',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
];

const projects = [
  {
    title: 'Watch Store',
    description: 'An e-commerce site offering categorized watches for men, women, and kids. Features authentication, product filtering, Razorpay integration, and more.',
    link: 'https://vikrant-watchstore-frontend.vercel.app',
    img: '/images/watch-store.png'
  },
  {
    title: 'Education System',
    description: 'A system for managing students, teachers, and classes, including profile pictures with Cloudinary integration.',
    link: 'https://github.com/PrajapatiVikrant/SchoolSystemBackend',
    img: '/images/education-system.png'
  }
];

export default function ProductPage() {
  return (
    <main id='project' className="bg-gray-900 min-h-screen text-white">
      {/* Project Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          Our Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map(({ title, description, link, img }) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={img} alt={title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-24"></div>
    </main>
  );
}
