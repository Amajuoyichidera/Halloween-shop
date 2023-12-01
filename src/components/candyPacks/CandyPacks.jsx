import React from 'react'
import Header from '../Header/Header'
import candy from '../../images/candy.jpg'
import style from './candyPacks.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CandyPacks = () => {
  
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className={style.container}>
        <Header small='SWEETS' big='Halloween Candy Packs' />
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.section}>
        <div className={style.text}>
            <h2>a sprinkle of magic to every trick- <br /> or-treat adventure</h2>
            <p>From the classic to the creatively creepy, Halloween candies <br /> remind us that the true essence of this holiday lies in <br /> the delightful experience of indulging in sweet surprises with <br /> friends and family.</p>
            <button>Shop Now</button>
        </div>
        <div>
            <img src={candy} alt="candy" />
        </div>
        </div>
    </div>
  )
}

export default CandyPacks