import React, { useRef, useState, useEffect } from "react";
import Footer from "../components/ui/Footer";

export default function About() {
  const audioRef = useRef(null); // No longer needed in About, but kept for reference
  const [isPlaying, setIsPlaying] = useState(false); // No longer used, but kept for reference

  const skills = [
    { name: "ReactJS", level: 50 },
    { name: "MongoDB", level: 55 },
    { name: "C", level: 75 },
    { name: "C++", level: 45 },
    { name: "Java", level: 65 },
    { name: "Python", level: 45 },
    { name: "Next.js", level: 60 },
    { name: "Node.js", level: 65 },
    { name: "SQL", level: 40 },
    { name: "DSA", level: 55 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0120] text-white">
      <header className="flex justify-between items-center p-6 text-white bg-[#150033]">
        <div className="text-xl font-bold">Σ</div>
        <nav className="space-x-6">
          <a href="/" className="hover:text-purple-400">
            Home
          </a>
          <a href="/about" className="hover:text-purple-400">
            About
          </a>
          <a href="#" className="hover:text-purple-400"></a>
        </nav>
      </header>

      {/* Page Content */}
      <div className="flex-grow px-6 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

        {/* Skills Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <label className="block text-sm mb-1">{skill.name}</label>
                <div className="w-full bg-[#2d1b4e] rounded-full h-4">
                  <div
                    className="bg-[#a855f7] h-4 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline flex justify-center items-center space-x-2"
          >
            <span>📄 Download My Resume</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="flex justify-center items-center space-x-2">
            <span className="text-purple-400">📧</span>
            <span>Email: sohamghoshrishi@gmail.com</span>
          </p>
          <p className="flex justify-center items-center space-x-2">
            <span className="text-purple-400">📞</span>
            <span>Phone: +91 98765 43210</span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}