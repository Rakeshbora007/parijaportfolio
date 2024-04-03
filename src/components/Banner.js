import React from 'react';
// images
import Image from '../assets/parija.png';
// icons
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left '>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>Parija Walia</motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4 mt-4 text-[30px]'>I am a</span>
            <TypeAnimation sequence={[
              'Figma Designer',
              2000,
              'UI/UX Designer',
              2000,
            ]}
              speed={50}
              className='text-[#ff523b] text-[30px]'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
            A professional Figma designer applies their skills to design, create, and manage applications, websites, logos, and any other project related to web design. Figma developers have a firm grasp of UI/UX design and should be able to use their skills efficiently.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' activeClass='active' smooth={true} spy={true}><button className='btn btn-lg'>Contact me</button></Link>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* socials */}
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.instagram.com/atulsharmaa88/'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com/in/atul-sharma-49046096/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <FaLinkedin />
            </a>
            <a href='#'>
              <FaGithub />
            </a>
          </motion.div>
        </div>
        {/* image  */}
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <div className='heroImage'>
            <img src={Image} alt='' />
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
