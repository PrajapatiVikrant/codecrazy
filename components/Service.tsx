// app/services/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Globe, Code, Smartphone } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Website Development',
      icon: Globe,
      desc: 'Modern websites tailored to your brand with SEO and responsiveness in mind.',
    },
    {
      title: 'Web App Development',
      icon: Code,
      desc: 'Scalable full-stack web applications using React, Node.js, and MongoDB.',
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      desc: 'Cross-platform mobile apps with stunning UI/UX and real-time features.',
    },
  ];

  return (
    <div id='services' className=" text-white py-16 px-6 bg-black">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-pink-500">Our Services</h1>
        <p className="mt-4 text-gray-300">Delivering end-to-end solutions with creativity, performance, and scalability.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <service.icon className="h-10 w-10 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
