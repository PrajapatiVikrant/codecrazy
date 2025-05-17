
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function TechnologyPage() {
  useEffect(() => {
    const canvas = document.getElementById('tech-bg') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      for (let dot of dots) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
        ctx.fill();
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      }
      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  const technologies = [
    {
      title: 'Frontend',
      stack: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Backend',
      stack: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma', 'Firebase'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Mobile Apps',
      stack: ['React Native', 'Expo', 'Flutter (optional)'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Dev Tools',
      stack: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker (optional)'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Deployment',
      stack: ['Vercel', 'Netlify', 'Render', 'Railway', 'AWS (optional)'],
      color: 'from-cyan-500 to-sky-500'
    }
  ];

  return (
    <main id='technology' className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      <canvas id="tech-bg" className="absolute inset-0 w-full h-full z-0"></canvas>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-4">
          Our Tech Arsenal
        </h1>
        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          At CodeCrazy, we utilize cutting-edge technologies to deliver sleek, fast, and scalable digital experiences. Here’s what we master:
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((section, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-2xl p-6 shadow-xl bg-gradient-to-br ${section.color} text-white transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.stack.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-white" /> {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}