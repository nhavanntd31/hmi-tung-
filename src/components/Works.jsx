import Tilt from "react-tilt";
import { styles } from "../styles";
import { github, carrent } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import demoVideo from "../assets/demo.webm";
import { lowPrototypes, midPrototypes } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SmartWatch from "../assets/smartW.jpg";
import SmartWatch2 from "../assets/smartwatch.jpg";
import TV from "../assets/smartTV.jpg";
import TV1 from "../assets/smartTV2.jpg";
import mobilePhone from "../assets/mobile_1.jpg";
import mobilePhone2 from "../assets/mobile_2.jpg";

const ProjectCard = ({ index, name, description, image }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked); // Toggle card click state
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="cursor-pointer" // Make card clickable
      onClick={handleCardClick} // Handle card click
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full aspect-[9/16]"> {/* Mobile-friendly aspect ratio */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5 flex flex-col justify-between h-[250px]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[200px] overflow-hidden">
            {isClicked ? description : `${description.substring(0, 100)}...`} {/* Show more on click */}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};



const Works = () => {
    const images = [
    TV,
    TV1, // Replace with the actual paths to your images
    SmartWatch,
    SmartWatch2,
    mobilePhone,
    mobilePhone2,
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>Low-Fidelity</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our first prototype is a low-fidelity prototype. It is a simple and rough design that helps us to visualize the layout of the website. We sketch this on <strong>Goodnotes</strong>  (Ipad)
        </motion.p>
      </div>
  <div className="mt-5 flex flex-wrap gap-5">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Low-Fidelity Prototype ${index + 1}`}
            className="w-80 h-auto object-cover rounded-2xl"
            onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-path.jpg'; }} // Add a fallback image path
          />
        ))}
      </div>

      <motion.div variants={textVariant()} className="mt-10">
        <p className={ `${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>Medium-Fidelity</h2>
      </motion.div>
            <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our second prototype is a medium-fidelity prototype. It is a more detailed and well-researched design that enables us to programming the layout of the website. We design this on <strong>Figma</strong>
        </motion.p>
        </div>
        <div className='mt-20 flex flex-wrap gap-7'>
        {lowPrototypes.map((prototype, index) => (
          <ProjectCard key={`low-prototype-${index}`} index={index} {...prototype} />
        ))}
      </div>
        <motion.div variants={textVariant()} className="mt-10">
        <p className={ `${styles.sectionSubText} `}>Prototype</p>
        <h2 className={`${styles.sectionHeadText}`}>High-Fidelity</h2>
        </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Our third prototype is a high-fidelity prototype. Video <strong>DEMO</strong>
        </motion.p>
        <div className='mt-5 w-full flex justify-center'>
        <video className='w-96 max-w-full rounded-lg shadow-lg' controls>
        <source src={demoVideo} type="video/webm" />
        Your browser does not support the video tag.
         </video>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "prototype");
