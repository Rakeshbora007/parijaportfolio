import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/funes.png';
import Img2 from '../assets/clown.png';
import Img3 from '../assets/santo.png';
import { useNavigate } from 'react-router-dom';
const Work = () => {
  const navigate = useNavigate()
  const handleroute = () => {
    window.scrollTo(0, 0)
    navigate("/allprojects")
  }
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}

          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-[#ff523b]'>My Latest <br />Work.</h2>
            <p className='max-w-sm mb-16'>These Projects leverages modern technologies like ReactJS, Node.js, and MongoDB to deliver a responsive and intuitive platform. Users can expect fast loading times, efficient data handling, and an elegant UI that adapts to different devices.</p>
            <button className='btn btn-sm' onClick={handleroute}>View all project</button>
          </div>
          {/* image */}
          <a href="https://www.sergiofunes.com/">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Worpdress </span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Sergio Funes</span>
              </div>
            </div>
          </a>
          {/* <div>image</div> */}
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}

          className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <a href="https://clowndaddypresents.com/">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>WordPress/php</span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Clown Daddy</span>
              </div>
            </div>
          </a>
          {/* image */}
          <a href="https://santostilo.com/">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>MERN</span></div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Santo Stilo</span>
              </div>
            </div></a>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Work;
