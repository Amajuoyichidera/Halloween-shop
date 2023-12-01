import React from 'react'
import avatar from '../../images/avatar.jpg'
import { useState, useEffect } from 'react';
import style from './testimonial.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

    const testimonialData = [
        {
          id: 1,
          author: 'Jane Warren',
          text: 'Every item I purchased, from a wickedly <br /> realistic witch"s hat to eerie decorations, <br /> exceeded my expectations.',
          image: avatar,
        },
        {
          id: 2,
          author: 'John Doe',
          text: 'My Halloween celebrations have reached <br /> a whole new level of spooky fun. <br /> I"m already looking forward to next year"s <br /> shopping spree!',
          image: avatar,
        },
      ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the testimonial after 3 seconds
      setCurrentTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [testimonialData.length]);
      
  return (
    <div className={style.testimonialSlider}>
        <span>TESTIMONIALS</span>
      <div  data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className="testimonial">
        <h2 dangerouslySetInnerHTML={{ __html: testimonialData[currentTestimonial].text }} />
        <img src={testimonialData[currentTestimonial].image} alt={testimonialData[currentTestimonial].author} />
        <p className="author">- {testimonialData[currentTestimonial].author}</p>
      </div>
    </div>
  )
}

export default Testimonial