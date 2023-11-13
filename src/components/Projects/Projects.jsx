import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants";
import { useInView } from 'react-intersection-observer';
import img3 from '../../assets/fitnessHub.jpeg'
import img1 from '../../assets/digistore.jpeg'
import img2 from '../../assets/rolex.jpeg'

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // When 20% of the element is in the viewport
    });
    return (
        <div>
            <motion.h3
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewPort={{ once: false, amount: 0.3 }}
                className='text-white text-sm px-4'>Projects</motion.h3>
            <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewPort={{ once: false, amount: 0.3 }}
                className='text-white text-3xl font-bold px-4'>Recents Projects</motion.h1>
                {/*---------------------------------------- projects container ------------------------------------- */}
                <div className='flex justify-center items-stretch flex-wrap w-full gap-5  my-3'>
                    <div className='project  w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 py-5 mx-4'>
                        <div className='imgContiner h-[300px] overflow-hidden'>
                            <img src={img1} className={`w-full relative transition duration-[4000ms] ease-out hover:translate-y-[-80%]`} alt="" />
                        </div>
                        <div className='textContainer text-white'>
                        <h3 className='text-3xl font-bold text-white'>DigiStore</h3>
                        <p>It is an ecommerce website where user can buy digital electronics and 
                            can pay through their debit or credit card .Users can also Compare multiple proudcts on 
                            compare page and they are allowed to give rating to specific products only when they are log in .
                             Local storage are used to store theri cart items and to store recently viewed products so that they can
                              get their cart products back and and can identify their browsing proudcts .Log in and registration stystem
                               are made by custom javascript/nodeJs code .When user register on DigiStore , they need to verify their email
                                address . So when user fill up necessary personal data , they will get an opt in their mail and by this they
                                 can verify their account . Use also can reset their password . In the admin  section of the website admin can
                                  upload images ,delete images, upload products, modify produts information or delete proudcts ,can add features
                                   products, modify them or delete them ,can add features category, modify them or delete them,can add slider
                             images and modify them, can manage orders and can update orders stage and cancel orders .   </p>
                             <div className='flex flex-wrap gap-3 py-4'>
                                <div className=' btn2'>ReactJs</div>
                                <div className='btn2'>Css</div>
                                <div className='btn2'>NodeJs</div>
                                <div className='btn2'>ExpressJs</div>
                                <div className='btn2'>Mongoose</div>
                                <div className='btn2'>Stripe</div>
                               


                             </div>
                             <div className='flex flex-wrap gap-3 py-4'>
                              <a href="https://digi-store.netlify.app/">  <div className='btn3'>Live link</div></a>
                              <a href="https://digistoreadmin.netlify.app/">  <div className='btn3'>Admin Side</div></a>
                                <a href="https://github.com/dipjoydas/digiStoreFrontend/"> <div className='btn3'>Front end code </div></a>
                                <a href="https://github.com/dipjoydas/digiStorebackend/"> <div className='btn3'>Back end code </div></a>
                                <a href="https://github.com/dipjoydas/digiStorebackendUI/"> <div className='btn3'>Front end code(admin) </div></a>

                             </div>

                        </div>
                        
                    </div>
                    <div className='project  w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 py-5 mx-4'>
                        <div className='imgContiner h-[300px] overflow-hidden'>
                            <img src={img2} className={`w-full relative transition duration-[4000ms] ease-out `} alt="" />
                        </div>
                        <div className='textContainer text-white'>
                        <h3 className='text-3xl font-bold text-white'>Rolex Watch customization</h3>
                        <p>This is my very recent project for Rolex watch .
                             This was a group projects and my part was configure
                              page and checkout page . In congure page User can 
                              configure Rolex watch according to their desire .
                               The watch has 3 parts dials  bezels  , straps and 
                               extra rubber straps. Here user can use different kind
                                of these element to configure a watch and can see the
                                 live price while changing any element he can also choose
                                  size of watch .There are two size availabe 36 and 41 .
                                   Lastly user can also choose additional rubber straps and
                                    for each straps they need to pay additonal £500 . In checkout
                                     page users can see the summery of their customized watch and number
                                      of additional rubber straps and total price .   </p>
                             <div className='flex flex-wrap gap-3 py-4'>
                                <div className=' btn2'>ReactJs</div>
                                <div className='btn2'>Css</div>
                                <div className='btn2'>TailwindCss</div>
                                <div className='btn2'>Slick-carousel</div>
                                <div className='btn2'>React-slick</div>
                               


                             </div>
                             <div className='flex flex-wrap gap-3 py-4'>
                              <a href="https://rolexwatchcustomization.netlify.app/">  <div className='btn3'>Live link</div></a>
                                <a href="https://github.com/dipjoydas/rolex-watch-customization"> <div className='btn3'>Full Stack code</div></a>
                                {/* <a href="/"> <div className='btn3'>Back end</div></a> */}

                             </div>

                        </div>
                        
                    </div>
                    <div className='project  w-full md:w-1/2 lg:w-1/3 bg-[#11293D] rounded-md px-3 py-5 mx-4'>
                        <div className='imgContiner h-[300px] overflow-hidden'>
                            <img src={img3} className={`w-full relative transition duration-[4000ms] ease-out hover:translate-y-[-80%]`} alt="" />
                        </div>
                        <div className='textContainer text-white'>
                        <h3 className='text-3xl font-bold text-white'>Fitness Hub</h3>
                        <p>Fitness hub is a gym website where 
                        users can find comprehensive information about our experienced trainers, class schedules, informative blogs, and transparent pricing details, and get to know more about us as a fitness community .
                        With our gym website, users can see our trainers, class time, blog, pricing, and about us. Our gym website is designed to support your fitness goals and help you achieve a healthier, happier lifestyle.
                        Our user-friendly interface allows you to book and manage your class attendance
                             They are also get the answer of  frequently asked quenstions and they can also measures their BMI .This websit also have PWA( Progressive Web APP ) version. </p>
                             <div className='flex flex-wrap gap-3 py-4'>
                                <div className=' btn2'>ReactJs</div>
                                <div className='btn2'>Firebase</div>
                                <div className='btn2'>tailwind</div>
                                <div className='btn2'>DaisyUi</div>
                                {/* <div className='btn2'></div> */}
                               


                             </div>
                             <div className='flex flex-wrap gap-3 py-4'>
                              <a href="https://fitness-hub-6c3d7.web.app/">  <div className='btn3'>Live link</div></a>
                                <a href="https://github.com/dipjoydas/Fitness-Hub"> <div className='btn3'>Full Stack Code</div></a>
                                {/* <a href="/"> <div className='btn3'>Back end</div></a> */}

                             </div>

                        </div>
                        
                    </div>

                </div>


        </div>
    );
};

export default Projects;