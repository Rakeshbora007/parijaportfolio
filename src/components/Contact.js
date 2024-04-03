import React, { useRef, useState } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const [done, setDone]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zmqy4rh', 'template_xo80vz5', form.current, 'PJdbdOoEmC7oltwFh')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          form.current.reset(); 
      }, (error) => {
          console.log(error.text);
      });
  };
  return <section className='section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text  */}
        <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
        
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-[#ff523b] font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together</h2>
          </div>
        </motion.div>
        {/* form  */}
        <motion.form ref={form} onSubmit={sendEmail} 
          variants={fadeIn('left', 0.3)} 
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
        
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input name="user_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all user' type='text'
            placeholder='Your name' />
          <input name="user_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all user' type='email'
            placeholder='Your email' />
          <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 user' placeholder='Your message'></textarea>
          <button type="submit" value="Send" className='btn btn-lg'>Send message</button>
          <span>{done && "Thanks for Contacting me"}</span>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
