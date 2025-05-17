'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer'


export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! 🚀'); // Replace with backend logic or email API
    };

    return (
        <>
           
            <div id='contact' className='mt-20 w-[80%] bg-black'>
                <motion.div
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold mb-6 text-center text-pink-500">Contact Us</h1>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-xl shadow-lg">
                        <div>
                            <label className="block mb-1 font-semibold">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder='Enter your Full Name'
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email id'
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Message</label>
                            <textarea
                                placeholder='Write your message here....'
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>

            </div>
           
        </>
    );
}
