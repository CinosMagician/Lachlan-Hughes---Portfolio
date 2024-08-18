import { useAnimate } from "framer-motion";
import { useEffect } from "react";

import profileImage from '../../assets/newProfile.png';

export default function About() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      // First animation: Move the "about" div
      animate(
        scope.current,
        {
          x: [-1000, 100, 0],
        },
        {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }
      ).then(() => {
        // Second animation: Profile image grows and pops, starting from hidden
        animate(
          ".profileImage",
          {
            opacity: [0, 1], // Start hidden, then become visible
            scale: [0, 1.2, 1], // Start from 0, grow beyond 1, then settle at 1
          },
          {
            duration: 0.6, // Duration of the pop animation
            ease: "easeOut",
          }
        );
      });
    }
  }, [scope, animate]);

  return (
    <div className="about-box">
      <div className="about" ref={scope}>
        <img className="profileImage" src={profileImage} alt="Profile Image" style={{ opacity: 0 }} /> {/* Start hidden */}
        <h1 className="text-center">About Me</h1>
        <p>
          My name is Lachlan, an upcoming and aspiring software engineer who has
          a passion for learning and expanding my skills within web and backend
          development.
        </p>
        <p>
          Having spent the majority of my life in front of a computer, and with
          the drive to always become better, I know that becoming a part of the
          programming world was something I have always wanted to do.
        </p>
      </div>
    </div>
  );
}
