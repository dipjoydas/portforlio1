

import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import TopBanner from '../TopBanner/TopBanner';
import About from '../about/About';
import Skills from '../skills/Skills';
import './home.css'



const Home = () => {
    
   
    return (
        <div className='bg-black w-screen overflow-x-hidden'>
            {/* <ParticlesBackgound></ParticlesBackgound> */}
            <TopBanner></TopBanner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            {/* <div className='bg-white'style={{minHeight:"100vh"}}>dfkldfj;lkajf;kjf;lkjdf;lkj</div> */}



    
            {/* ------------------------------------------------------------------------------------------- */}



        </div>
    );
};

export default Home;