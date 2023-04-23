import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { HiCode } from "react-icons/hi";


const Skills = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="Skills">
      <h2>Skills</h2>
      <section>
        <motion.div
          className="SkillsBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <FaPython />
          <span>Python</span>

        </motion.div>
        <motion.div
          className="SkillsBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="SkillsBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <HiCode />
          <span>C/C++</span>
        </motion.div>
        <motion.div
          className="SkillsBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <GrMysql />
          <span>MySQL</span>

        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
