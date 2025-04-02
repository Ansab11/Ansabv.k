import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import avatarImg from "../assets/WhatsApp_Image_2024-10-26_at_17.55.36_f3d628a2-removebg-preview (1).png";

const text = "I’m Ansab, a Full Stack Web Developer";
const words = text.split(" ");

const Home = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-start p-5 md:p-10">
      <div className="bg-black/40 backdrop-blur-lg rounded-lg shadow-lg p-5 md:p-10 text-white w-full max-w-xl ml-0 md:ml-8">
        <h1 className="text-2xl md:text-5xl font-bold flex flex-wrap leading-tight tracking-tighter">
          <motion.span
            key={key}
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordAnimation}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <motion.p className="text-sm md:text-lg mt-3 font-semibold tracking-tight">
          Building modern, interactive websites and apps to empower users.
        </motion.p>
        <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ansabvk122@gmail.com" // Replace with your email
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 py-2 px-5 md:py-3 md:px-8 font-semibold rounded-full text-white text-sm md:text-lg shadow-lg bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 transition duration-300 hover:from-blue-500 hover:to-teal-400 hover:scale-105 text-center inline-block"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Contact Me
</motion.a>

      </div>
      <div className="md:mt-0 flex-shrink-0 md:ml-52">
  <img
    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white" // Add border classes here
    src={avatarImg}
    alt="Ansab VK"
  />
</div>

    </div>
  );
};

export default Home;
