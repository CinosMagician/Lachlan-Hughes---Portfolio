import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "./About.css";
import profileImage from '../../assets/newProfile.png';

export default function About() {
  const textBoxRef = useRef(null);

  useEffect(() => {
    // Ensure the text boxes are initially hidden
    if (textBoxRef.current) {
      textBoxRef.current.style.opacity = "0"; // Ensure it's hidden initially
      textBoxRef.current.animate(
        { opacity: [0, 0.4, 0.8, 1] },
        { duration: 2000, easing: "ease-in-out", fill: "forwards" }
      );
    }
  }, []);

  // Function to create wave effect on the second paragraph
  const createWave = (text) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }} // Start from below
        animate={{ opacity: 1, y: 0 }} // Animate to original position
        transition={{
          duration: 0.5,
          delay: index * 0.04 // Stagger the animation
        }}
      >
        {letter}
      </motion.span>
    ));
  };

  return (
    <div className="backgroundImage">
      <div className="pageBox">
        <div className="textBox" ref={textBoxRef}>
          <div className="hello">
            <motion.h3
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#14dee9" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="textColorAnimation"
            >
              Hi there! ✌️ My name is Lachlan
            </motion.h3>
          </div>
          <div className="info">
            <motion.h1
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#f0f0f0" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm an upcoming and aspiring software engineer with a passion for learning and expanding my skills in web and backend development.
            </motion.h1>
          </div>
          <div className="personal">
            <motion.p
              initial={{ opacity: 0, color: "#fff" }}
              animate={{ opacity: 1, color: "#f0f0f0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {createWave("Having spent the majority of my life in front of a computer, and with the drive to always become better, I know that becoming a part of the programming world was something I have always wanted to do.")}
            </motion.p>
          </div>
        </div>

        <div className="spacerBox"></div>

        <motion.div
          className="imageBox"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: [0, 1.2, 1] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
        >
          <div className="image">
            <img
              className="profileImage"
              src={profileImage}
              alt="Profile Image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
