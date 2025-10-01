import React from "react";
import { motion } from "framer-motion";
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero container flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 relative overflow-hidden bg-gradient-to-b from-[#F2E9E4] to-[#F7F3F2]"
      style={{ paddingTop: '100px' }} // offset for navbar
    >
      {/* Decorative Circles */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 bg-[#6F5F7F] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-[#4A4E69] opacity-15 rounded-full animate-pulse"></div>

      {/* Left Section */}
      <motion.div
        className="hero-left max-w-xl space-y-6 z-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold leading-tight text-[#22223B]">
          Hi, I'm <span className="text-[#6F5F7F]">Abhishek Zatakiya</span>
        </h1>
        <p className="text-lg md:text-xl text-[#4A4E69] leading-relaxed">
          I'm a Results-Driven <span className="text-[#6F5F7F]">Full-Stack Developer</span> specializing in <span className="text-[#6F5F7F]">MERN stack</span>, <span className="text-[#6F5F7F]">React.js</span> and <span className="text-[#6F5F7F]">.NET technologies</span>.
          I build scalable, secure and user-friendly web applications, passionate about solving real-world problems.
          Experienced in developing full-stack platforms, <span className="text-[#6F5F7F]">machine learning-based applications</span> and responsive UI solutions.
        </p>


        {/* CTA Buttons */}
        <div className="cta-group flex flex-wrap gap-4 pt-4">
          <a
            href="#work"
            className="px-6 py-3 font-semibold rounded-lg border-2 border-[#6F5F7F] text-[#6F5F7F] hover:bg-[#6F5F7F] hover:text-[#F2E9E4] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 font-semibold rounded-lg bg-[#6F5F7F] text-[#F2E9E4] border-2 border-[#6F5F7F] hover:bg-transparent hover:text-[#6F5F7F] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="hero-right mt-10 md:mt-0 z-10 relative"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        {/* Floating Blobs */}
        <div className="absolute -top-8 -right-8 w-20 h-20 bg-[#E07C7C] opacity-30 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-6 left-10 w-24 h-24 bg-[#6FAF7F] opacity-20 rounded-full animate-bounce"></div>
      </motion.div>
    </section>
  );
}
