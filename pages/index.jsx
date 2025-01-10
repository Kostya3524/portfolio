import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="w-[80%] text-left flex flex-col xl:justify-center md:pl-32 pt-22 xl:pt-40 h-full container mx-auto">
          {/* title */}
          <motion.h3
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 mb-0"
          >
            <span className="text-neutral-300" style={{ fontSize: 34 }}></span><br />
            <h3 className="text-white" style={{ fontSize: 32 }}>MAKSYM HAYOVETS</h3>
            <span className="text-accent" style={{ fontSize: 24 }}>MERN | CMS | blockchain | PHP developer</span>
          </motion.h3>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:max-w-full xl:max-w-[40vw] h-[100vh - 200px] md:h-full mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hi, I’m a senior full-stack developer with over 5 years of experience building cutting-edge web and mobile applications. I specialize in creating clean, efficient, and scalable solutions using modern technologies like React, Vue, Next.js, Laravel, Node.js, and TailwindCSS.

            With expertise in frameworks like Django and tools like Three.js, I’ve delivered innovative projects across industries, including Web3, CMS development, and custom chatbot solutions. My approach focuses on problem-solving, adaptability, and delivering results that exceed expectations.

            Let’s collaborate and turn your ideas into reality! 🚀
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[300px] max-h-[300px] absolute top-[30%] lg:right-[10%] -translate-x-[50%] -translate-y-[50%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
