
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticlesBackgound from '../Particles/ParticlesBackgound';
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import heroImg from '../../assets/heroImg.jpg'
import resume from '../../assets/dipjoy.pdf'
gsap.registerPlugin(ScrollTrigger);
import img1 from '../../assets/logos/bootstrap.png'
import img2 from '../../assets/logos/canva.png'
import img3 from '../../assets/logos/css.png'
import img4 from '../../assets/logos/daisyUi.jpeg'
import img5 from '../../assets/logos/express.png'
import img6 from '../../assets/logos/figma.png'
import img7 from '../../assets/logos/firebase.png'
import img8 from '../../assets/logos/framermotion.png'
import img9 from '../../assets/logos/git.png'
import img10 from '../../assets/logos/gitlab.png'
import img11 from '../../assets/logos/html-.png'
import img12 from '../../assets/logos/js.png'
import img13 from '../../assets/logos/meterialui.png'
import img14 from '../../assets/logos/mongodb.png'
import img15 from '../../assets/logos/nodejs.png'
import img16 from '../../assets/logos/npm.png'
import img17 from '../../assets/logos/photoshop.png'
import img18 from '../../assets/logos/react.png'
import img19 from '../../assets/logos/swiperjs.png'
import img20 from '../../assets/logos/tailwind.png'
import img21 from '../../assets/logos/vite.png'
import img22 from '../../assets/logos/vscode.png'

// import ScrollTrigger from "gsap/ScrollTrigger"
const imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22]


const TopBanner = () => {
    const main = useRef()

    useLayoutEffect(() => {







        let ctx = gsap.context(() => {


            gsap.to('.wrapper', {

                top: "100%",

                ease: "ease",



                scrollTrigger: {
                    trigger: '.topBannerContainer',
                    scrub: 1,
                    start: "top top",
                    end: "bottom bottom",
                    pin: '.topBanner',
                    // pin:".wrapper",

                    // markers: true,
                    //   toggleActions:"restart none resume complete"
                }
            })
            gsap.fromTo('.logoImg', {
                z: 500,
                rotation: 0,
              
                // scaleY: 1

            }, {

                z: 0,
                rotation: 20,
                // scaleY: 1,
                // scaleX: 1.4,
                duration: 1,
                stagger:index=> Math.random(),
                ease: Power3.easeOut,
                delay:1

            })

        }, main)
     
        return () => ctx.revert();
    }, [])
    useEffect(()=>{
        const images = document.getElementsByClassName('logoImg')
        let index = 0
        for(let img of images){
            let value = (index*20)+'deg'
            img.style.rotate = value
            index++
        }
    },[])
    return (
        <div ref={main}>


            <div className='topBannerContainer mb-3'style={{minHeight:"200vh"}} >





                <div className='wrapper   z-[999] fixed top-0 bg-[#11293D] w-full overflow-hidden' style={{ height: "100vh",width:'100vw' }}>
                    <div className='imgContinerBanner flex flex-wrap  shrink w-full overflow-hidden h-full' style={{ perspective: "500px", transformStyle: "preserve-3d", overflow: "hidden" }}>
                        {
                            imgArray.map((img,index)=><img key={index} src={img} className={`logoImg w-1/3 md:w-1/4 xl:w-[14%] h-[16%] md:h-[18%] xl:h-[30%] p-1 relative  rotate-[{${index*100}+ deg}]  `} ></img>)
                        }
       
                    </div>
                    <h1 className='text-[50px] font-bold leading-[1.4] lg:text-[110px] background-clip-text absolute top-[50%]  translate-y-[-50%] left-[50%] translate-x-[-50%] z-[999] text-center'>Welcome to my Portfolio</h1>
           
                </div>







                {/* ------------------------------------------------------------------------main banner part -------------------------------------------------------` */}
                <section className='topBanner w-full h-screen text-white ' >
                    <div className='flex justify-center items-center flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 min-h-screen p-2 ' >
                        {/* -------------------------------------------------------------text container----------------------------------------------------------- */}
                        <div className='flex-1 text-center font-secondary lg:text-left grow-0 '>
                            <motion.h1
                                variants={fadeIn("up", 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewPort={{ once: false, amount: 0.7 }}
                                className="text-[50px] font-bold leading-[0.8] lg:text-[110px]"
                            >
                                Dipjoy Kumar <span>Das</span>
                            </motion.h1>
                            <motion.div
                                variants={fadeIn("up", 0.4)}
                                initial="hidden"
                                whileInView={"show"}
                                viewPort={{ once: false, amount: 0.7 }}
                                className="my-6  text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
                            >
                                <span className="text-white mr-4">I am a</span>
                                <TypeAnimation
                                    sequence={[
                                        "Web Developer",
                                        2000,
                                        "React Developer",
                                        2000,
                                        "Frontend Developer",
                                        2000,
                                        "Backend Developer",
                                        2000,
                                        "MERN Stack Developer",
                                        2000,
                                    ]}
                                    speed={50}
                                    className="text-orange-200"
                                    wrapper="span"
                                    repeat={Infinity}
                                />
                            </motion.div>
                            <motion.p
                                variants={fadeIn("up", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewPort={{ once: false, amount: 0.7 }}
                                className="mb-8 max-w-lg text-[20px] mx-auto lg:mx-0 "
                            >
                                A Passionate Front Stack  Developer and MERN Stack Developer
                                {/* based in Dhaka, Bangladesh📍 */}
                            </motion.p>
                            <motion.div
                                variants={fadeIn("up", 0.6)}
                                initial="hidden"
                                whileInView={"show"}
                                viewPort={{ once: false, amount: 0.7 }}
                                className="flex max-w-max items-center mb-12 mx-auto lg:mx-0"
                            >
                                <Link to="contact">
                                <button className="btn btn-lg text-white px-4 py-3 rounded-full">Contact Me</button>
                                </Link>

                                {/* <a href={resume} download="Resume"> */}
                                <a href={resume} download="Resume">
                                    <button className="btn ml-5 btn-lg text-white px-4 py-3 rounded-full">My Resume</button>
                                </a>
                            </motion.div>


                        </div>
                        {/*-------------------------------------------------------------------------- img container --------------------------------------------- */}
                        <motion.div
                            variants={fadeIn("down", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            className="hidden md:flex flex-1 max-w-[320px]  lg:max-w-[482px] max-h-[320px]  lg:max-h-[482px] rounded-full overflow-hidden"
                           
                        >
                            <img src={heroImg} alt="" />
                        </motion.div>
                    </div>
                    <ParticlesBackgound></ParticlesBackgound>

                </section>

            </div>
            {/* <div style={{ minHeight: "100vh" }}>


            </div> */}

        </div>
    );
};

export default TopBanner;