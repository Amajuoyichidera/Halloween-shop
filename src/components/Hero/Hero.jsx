import style from './hero.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Hero = ({ item }) => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  
  return (
    <div className={style.heroContainer}>
        <img className={style.hero} src={item.img} alt="hero background" />
        <div className={style.overlay}>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
            <p className={style.new}>{item.p1}</p>
            <h1 className={style.h1}> {item.h1} <br /> {item.h2} </h1>
            <p className={style.pTag}>{item.p2} <br /> {item.p3} </p>
            <button className={style.shop}>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero