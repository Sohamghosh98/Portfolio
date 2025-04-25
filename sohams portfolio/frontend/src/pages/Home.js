import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles } from "lucide-react";
import React from "react";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[300px] h-[200px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[index]}
        alt="Education"
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    document.title = "Portfolio - Software Engineer";
  }, []);

  const workExperiences = [
    {
      title: "Library Management System",
      description:
        "Simplifying library operations through an efficient management system.",
      link: "https://github.com/Sohamghosh98/LMS",
    },
    {
      title: "SheCurity Project",
      description:
        "A web portal to track and manage safety check-ins and activity logs for women in real time.",
      link: "https://github.com/Sohamghosh98/shecurityfinal",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a responsive personal website to showcase skills and projects.",
      link: "https://github.com/Sohamghosh98/Portfolio",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a responsive e-commerce platform featuring product listings, a shopping cart, and secure checkout functionality using modern web technologies.",
      link: "https://github.com/Sohamghosh98/E-Commerce",
    },
  ];

  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false); // Start paused
  const [notification, setNotification] = React.useState("");
  const [rotationSpeed, setRotationSpeed] = React.useState(30); // Default duration in seconds

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => {});
      setNotification("🎵 Music is playing!");
      const timer = setTimeout(() => setNotification(""), 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    } else {
      audioRef.current?.pause();
      if (audioRef.current) audioRef.current.currentTime = 0; // Reset on pause
      setNotification("🔇 Music is off!");
      const timer = setTimeout(() => setNotification(""), 2000); // Hide after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <div className="bg-[#0e001f] text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 text-white bg-[#150033]">
        <div className="text-xl font-bold">Σ</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-purple-400">
            Home
          </a>
          <a href="/about" className="hover:text-purple-400">
            About
          </a>
          <a href="#" className="hover:text-purple-400"></a>
        </nav>
      </header>

      <main className="p-10 pt-20 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-10"
        >
          <div className="flex justify-center">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-28 h-28 rounded-full shadow-lg"
            />
          </div>
          <p className="text-purple-300 mt-4">Hello! I am Soham Ghosh</p>
          <h2 className="text-3xl font-semibold mt-2">
            A designer who{" "}
            <span className="underline decoration-purple-500">
              Judges a book by its{" "}
              <span className="text-purple-400">cover</span>.
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <h1 className="text-4xl font-bold mb-4">I'm a Software Engineer.|</h1>
          <p className="text-gray-300">
            Currently, I'm a third-year Software Engineering student at{" "}
            <span className="text-blue-400">Techno India University</span>.
          </p>
          <p className="mt-4 text-gray-400">
            I'm a third-year Software Engineering student passionate about
            building intuitive and impactful digital experiences. I enjoy
            solving real-world problems with clean, efficient code and a strong
            focus on user-centric design. I'm constantly learning and
            experimenting to grow as a developer and creator.
          </p>
        </motion.div>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workExperiences.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#2e005e] to-[#100024] rounded-2xl p-6 shadow-xl"
              >
                <Card>
                  <CardContent className="text-left">
                    <div className="flex items-center mb-4">
                      <Sparkles className="text-purple-400 mr-2" />
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" className="mt-4 text-purple-300">
                        Learn More
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Glowing Σ Skills Extension with Mouse Speed Control */}
        <section className="mt-20 flex flex-col items-center text-center px-6">
          <div
            className="relative w-full max-w-4xl h-[400px] md:h-[500px]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const mouseX = e.clientX - rect.left - centerX;
              const mouseY = e.clientY - rect.top - centerY;

              // Calculate distance from center to adjust speed
              const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
              const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
              const speedFactor = 1 - distance / maxDistance; // Closer to center = faster
              const newSpeed = 30 - speedFactor * 25; // Range: 5s (fast) to 30s (default)
              setRotationSpeed(Math.max(5, Math.min(30, newSpeed)));
            }}
            onMouseLeave={() => setRotationSpeed(30)} // Reset to default speed on mouse leave
          >
            {/* Central glowing Σ logo */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-purple-800 w-40 h-40 rounded-full flex items-center justify-center shadow-[0_0_80px_40px_rgba(168,85,247,0.6)]">
                <span className="text-6xl text-white">Σ</span>
              </div>
            </div>

            {/* Orbit SVG lines */}
            <div className="absolute inset-0 flex justify-center items-center">
              <svg className="w-full h-full" viewBox="0 0 500 500">
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  stroke="#a855f7"
                  strokeWidth="0.3"
                  fill="none"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="140"
                  stroke="#a855f7"
                  strokeWidth="0.3"
                  fill="none"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="100"
                  stroke="#a855f7"
                  strokeWidth="0.3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Rotating orbit container with dynamic speed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-[500px] h-[500px]"
                animate={{ rotate: 360 }}
               

 transition={{
                  repeat: Infinity,
                  duration: rotationSpeed, // Dynamic duration based on mouse
                  ease: "linear",
                }}
              >
                {[
                  { icon: "/icons/react.png", style: "top-[7%] left-[50%]" },
                  { icon: "/icons/C.png", style: "top-[10%] left-[20%]" },
                  {
                    icon: "/icons/node-js.png",
                    style: "top-[25%] right-[10%]",
                  },
                  { icon: "/icons/js.png", style: "bottom-[20%] left-[15%]" },
                  { icon: "/icons/css.png", style: "bottom-[20%] right-[10%]" },
                  { icon: "/icons/mongodb.png", style: "top-[50%] right-[0%]" },
                  { icon: "/icons/iot.png", style: "top-[45%] left-[0%]" },
                  {
                    icon: "/icons/nextjs.png",
                    style: "bottom-[5%] left-[40%]",
                  },
                  { icon: "/icons/C++.png", style: "top-[10%] right-[20%]" },
                ].map(({ icon, style }, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-8 h-8 ${style}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 * i }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 10 + i * 1.5,
                        ease: "linear",
                      }}
                      className="w-full h-full"
                    >
                      <img src={icon} alt="tech" className="w-full h-full" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* === EDUCATION SECTION WITH IMAGE SLIDERS === */}
        <section className="mt-32 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-16 text-center">
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Schooling */}
            <div className="flex flex-col justify-center text-left space-y-4">
              <p className="text-purple-400 font-medium">Schooling</p>
              <h3 className="text-white text-2xl font-bold">
                Sri Aurobindo Institute Of Education
              </h3>
              <div className="bg-gradient-to-r from-[#2e005e] to-[#100024] p-6 rounded-xl shadow-xl max-w-md">
                <p className="text-gray-300 text-sm">
                  Focused on conceptual learning and creative problem-solving.
                  Built strong foundational skills in mathematics, science, and
                  computer basics.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <ImageSlider
                images={["/images/school3.jpg", "/images/school2.jpeg"]}
              />
            </div>

            {/* College */}
            <div className="flex justify-center items-center order-2 md:order-1">
              <ImageSlider
                images={["/images/collage1.png", "/images/collage2.png"]}
              />
            </div>
            <div className="flex flex-col justify-center text-left space-y-4 order-1 md:order-2">
              <p className="text-purple-400 font-medium">University</p>
              <h3 className="text-white text-2xl font-bold">
                Techno India University
              </h3>
              <div className="bg-gradient-to-r from-[#2e005e] to-[#100024] p-6 rounded-xl shadow-xl max-w-md">
                <p className="text-gray-300 text-sm">
                  Currently pursuing B.Tech in Software Engineering. Projects
                  involve IoT, full-stack development, and deep dives into
                  real-world software problem-solving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 px-6 max-w-4xl mx-auto text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Contact</h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let’s connect.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ibrahimmemon930@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 text-sm md:text-base mb-8 block hover:underline"
          >
            sohamghoshrishi@gmail.com
          </a>

          <div className="flex justify-center space-x-6 mt-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/Sohamghosh98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.53 1.031 1.53 1.031.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.986 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.547 1.376.202 2.393.1 2.646.64.697 1.028 1.591 1.028 2.683 0 3.842-2.339 4.688-4.566 4.937.36.309.679.919.679 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.481A10.005 10.005 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Dribbble Icon */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.25a9.75 9.75 0 109.75 9.75A9.76 9.76 0 0012 2.25zm6.86 6.22a8.28 8.28 0 01-4.93.35 23.94 23.94 0 00-2.2-3.93 8.27 8.27 0 017.13 3.58zM12 3.75a8.22 8.22 0 014.94 1.61 25.33 25.33 0 00-5.25 1.55 22.55 22.55 0 00-2.19-3.19A8.25 8.25 0 0112 3.75zM7.64 4.86a21.1 21.1 0 012.4 3.35A24.56 24.56 0 005 9.56a8.3 8.3 0 012.64-4.7zM3.75 12a8.25 8.25 0 01.19-1.76 23.42 23.42 0 016.23-1.26 24.2 24.2 0 012.64 5.63 23.17 23.17 0 00-8.75 1.5A8.17 8.17 0 013.75 12zm8.25 8.25a8.2 8.2 0 01-6.63-3.4 21.76 21.76 0 017.52-1.23 23.73 23.73 0 011.97 5.25 8.22 8.22 0 01-2.86-.62zm4.18-1.63a25.14 25.14 0 00-1.92-5.07 8.8 8.8 0 014.83-.16 8.27 8.27 0 01-2.91 5.23z" />
              </svg>
            </a>

            {/* Google (Gmail) Icon */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=sohamghoshrishi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 4.5l-8 5-8-5V6l8 5 8-5v2.5z" />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/soham-ghosh-97809a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.6v2.3h.05c.5-.94 1.72-1.9 3.55-1.9 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.6h-4V8z" />
              </svg>
            </a>

            {/* Music Section */}
            <div className="flex items-center space-x-4 text-lg">
              <button
                onClick={() => setIsPlaying(true)}
                className="hover:text-purple-400"
                aria-label="Play"
              >
                🎵
              </button>
              <button
                onClick={() => setIsPlaying(false)}
                className="hover:text-purple-400"
                aria-label="Pause"
              >
                ⏸️
              </button>
              <button
                onClick={() => {
                  audioRef.current?.pause();
                  if (audioRef.current) audioRef.current.currentTime = 0; // Reset to start
                  setIsPlaying(false);
                }}
                className="hover:text-purple-400"
                aria-label="Stop"
              >
                ⏻
              </button>
            </div>
          </div>

          {/* Notification */}
          {notification && (
            <div className="mt-4 text-center text-sm bg-gray-800 p-2 rounded">
              {notification}
            </div>
          )}

          {/* Audio element */}
          <audio ref={audioRef} loop>
            <source src="/audio/background.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </section>
      </main>
    </div>
  );
}
