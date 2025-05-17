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

export default function AboutPage() {
  return (
    <main id='about' className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="relative px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
      >
        <motion.div variants={fadeUp} className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            About <span className="text-purple-500">CodeCrazy</span>
          </h1>
          <p className="text-lg text-gray-300">
            We are a cutting-edge software startup dedicated to crafting beautiful and scalable digital
            experiences. From web apps to mobile apps and websites, we bring your ideas to life with
            passion and precision.
          </p>
          <p className="text-gray-400 italic">Innovate. Build. Grow.</p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="md:w-1/2 bg-gradient-to-tr from-purple-800 via-pink-800 to-red-800 rounded-3xl p-12 shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
            alt="Team working together"
            className="rounded-2xl w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Mission & Vision Split */}
      <section className="grid  md:grid-cols-2 max-w-6xl mx-auto gap-10 px-6 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          className="bg-gradient-to-tr from-purple-700 to-pink-700 rounded-2xl p-10 shadow-lg flex flex-col items-center text-center"
        >
          <FaRocket className="text-6xl mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-200 text-lg">
            Deliver innovative and scalable digital solutions, focusing on quality and performance, empowering
            businesses to succeed.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-tr from-pink-700 to-red-700 rounded-2xl p-10 shadow-lg flex flex-col items-center text-center"
        >
          <FaLightbulb className="text-6xl mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-200 text-lg">
            Be the preferred partner for startups and businesses seeking reliable and creative software
            development solutions.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-10 text-center"
          >
            What Drives Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
              className="flex flex-col items-center text-center space-y-4"
            >
              <FaHandsHelping className="text-5xl text-purple-400" />
              <h3 className="text-2xl font-semibold">Customer First</h3>
              <p className="text-gray-300">
                We put customers at the center of everything we do, ensuring satisfaction and success.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <FaUsers className="text-5xl text-pink-400" />
              <h3 className="text-2xl font-semibold">Teamwork</h3>
              <p className="text-gray-300">
                Collaboration and open communication fuel our creativity and drive.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <FaStar className="text-5xl text-red-400" />
              <h3 className="text-2xl font-semibold">Innovation</h3>
              <p className="text-gray-300">
                We constantly push boundaries and embrace new technologies to build the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          Meet The Team
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map(({ name, role, img }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
              className="bg-gradient-to-tr from-purple-700 to-pink-700 rounded-xl p-8 flex flex-col items-center text-center cursor-pointer transition-shadow"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mb-6">
                <img src={img} alt={name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-300">{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </main>
  );
}
