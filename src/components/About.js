import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg-gap-y-0 h-screen'>
        {/* img  */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1  bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top'></motion.div>
        {/* text  */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-[#ff523b]'>About me.</h2>
          <h3 className='h3 mb-4'>I'm UI/UX Designer with over 3 years of experience. </h3>
          <p className='mb-6'> A professional Figma designer applies their skills to design, create, and manage applications, websites, logos, and any other project related to web design. Figma developers have a firm grasp of UI/UX design.
          </p>
          {/* stats  */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={3} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Years of <br />
                experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={15} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Project <br />
                Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                  inView ?
                    <CountUp start={0} end={20} duration={3} /> : null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>Satisfied<br />
                Clients
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <Link to='contact' activeClass='active' smooth={true} spy={true}><button className='btn btn-lg'>Contact me</button></Link>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default About;
