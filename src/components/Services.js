import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

//  services
const services = [
  {
    name: 'Visual design and design software',
    description: 'Both UX designers , like Figma, Sketch, Photoshop, and Illustrator, you should build your knowledge of visual design best practices for things like typography, color theory, layout and icons .', link: 'https://www.figma.com/proto/hYCrFVPK1e3VC3d9j4jj7C/Dyor?page-id=0%3A1&node-id=1-97&starting-point-node-id=1%3A97',
  },
  {
    name: 'Wireframing, user flows, mockups',
    description: ' Depending on the stage of development, you might do this by creating wireframes, low or high-fidelity prototypes, mockups, or user flows.', link: 'Learn more',
  },
  {
    name: 'User research and usability testing',
    description: 'Proficient in using version control systems such as Git, ensuring code integrity and collaboration with team members.', link: 'Learn more',
  },
  {
    name: 'Project Management and Collaboration:',
    description: 'Conducting the right type of user research for the product or feature you’re designing can empower you to make a product even better. ', link: 'Learn more',
  },
];

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>
        {/* text & image */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}

          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-[#ff523b] mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            I Work on Various technologies like Prototyping, wireframing, user flows, mockups, User research and usability testing. </h3>
          <Link to='work' activeClass='active' smooth={true} spy={true}><button className='btn btn-sm'>See my work</button></Link>
        </motion.div>
        {/* services  */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
          {/* service list  */}
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-gradient text-sm'>Learn more</a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>

  </section>;
};

export default Services;
