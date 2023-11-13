import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import image from "../../assets/heroImg.jpg";
import { Link } from "react-scroll";
import resume from '../../assets/dipjoy.pdf'
// import resume from "../../assets/Web Developer Resume (Rehad).pdf";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section lg:mb-20" id="about" ref={ref} >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain  mix-blend-lighten p-4"
          >
            <img src={image} alt="" srcset="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1 p-4"
          >
            <h2 className="h2 text-orange-200">About me.</h2>

            <p className="mb-6 text-xl text-white">
            Hi, I am Dipjoy. I am a passionate full-stack developer strongly focused on the MERN stack(MongoDB, ExpressJs, ReactJs, NodeJs, Mongoose). Proficient in developing robust and highly scalable applications with a pixel-perfect design and eye-catching animation. I have been learning web development since 2020, during the pandemic, and still updating myself with trends and technologies.
            </p>
            <div className="grid grid-cols-1 text-center mb-12">
              <div>
                <div className="text-[40px] text-center font-tertiary text-orange-200 mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-white text-center text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                {/* <div className="text-[40px] text-center font-tertiary text-orange-200 mb-2">
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div> */}
                {/* <div className="font-primary text-white text-center text-sm tracking-[2px]">
                  Projects <br />
                  Complete
                </div> */}
              </div>
            </div>
            <div className="grid grid-cols-2 text-center ">
              <Link to="contact">
                <button className="btn btn-lg text-white px-4 py-3 rounded-full">Contact me</button>
              </Link>
              <a href={resume} download="Resume">
                <button className="btn ml-5 btn-lg  text-white px-4 py-3 rounded-full">My Resume</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;