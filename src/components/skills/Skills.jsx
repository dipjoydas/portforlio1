import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import { useInView } from 'react-intersection-observer';


const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // When 20% of the element is in the viewport
  });

  const progressBarVariants = {
    hidden: { width: '0%' },
    visible: {
      width: inView ? '100%' : '0%',
      transition: { duration: 2, ease: 'easeInOut' },
    },
  };

  return (
    <div className='skillsContainer py-4 overflow-hidden'>
        <motion.h3 
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className='text-white text-sm px-4'>Skills</motion.h3>
        <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
         className='text-white text-3xl font-bold px-4'>Highlighted Skills</motion.h1>
         <div className='skillsContainer flex justify-center items-stretch flex-wrap w-full gap-5  my-3 '>
            <motion.div
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewPort={{ once: false, amount: 0.3 }}
             className='fontend w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 mx-4'>
                 <h3 className='text-3xl font-bold text-white'>Front-end</h3>
                <ul className='px-4 list-disc text-white p-3'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Tailwind CSS</li>
                    <li>Javascript(ES6+)</li>
                    <li>DAISYUI</li>
                    <li>MaterialUi</li>
                    <li>Firebase</li>
                    <li>Axios</li>
                    <li>GSAP</li>
                    <li>Framer Motion</li>
                </ul>
            
            </motion.div>
            <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
             className='fontend w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 mx-4'>
                <h3 className='text-3xl font-bold text-white'>Back-end</h3>
                <ul className='px-4 list-disc text-white p-3'>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Socket.io</li>
                    <li>Nginx</li>
                    <li>PM2</li>
                   
                </ul>
            
            </motion.div>
            <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
             className='fontend w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 mx-4'>
                <h3 className='text-3xl font-bold text-white'>Tools</h3>
                
                <ul className='px-4 list-disc text-white p-3'>
                    <li>Git</li>
                    <li>Github</li>
                    <li>Npm</li>
                    <li>Yarn</li>
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>Chrome devTools</li>
                    <li>Figma</li>
                    <li>Postman</li>
                   
                </ul>
            
            </motion.div>
            
         </div>
         {/* <div style={{minHeight:'100vh'}}></div> */}

    </div>
    // <div className="progress-bar-container bg-white" ref={ref} >
    //   <motion.div
    //     className="progress-bar"
    //     initial="hidden"
    //     animate="visible"
    //     variants={progressBarVariants}
    //   />
    
      
    // </div>
  );
};

export default Skills;