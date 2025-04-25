import React, { useRef, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start paused
  const [notification, setNotification] = useState("");

  useEffect(() => {
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
    <footer className="bg-[#0a0a0a] border-t border-gray-800 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Soham Ghosh. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col md:flex-row md:space-x-5 text-xl items-center">
          <div className="flex space-x-5 mb-4 md:mb-0">
            <a
              href="https://github.com/Sohamghosh98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/soham-ghosh-97809a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sohamghoshrishi@gmail.com"
              className="hover:text-purple-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Music Section */}
          <div className="flex justify-center items-center space-x-4 text-lg">
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
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </footer>
  );
};

export default Footer;