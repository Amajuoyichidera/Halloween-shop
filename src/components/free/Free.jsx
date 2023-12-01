import React from 'react'
import { FaShuttleVan, FaMapMarkerAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import style from './free.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const MyFree = ({ item }) => {
    return (
        <div className={style.myfree}>
            {item.icon}
            <h2>{item.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
        </div>
    )
}


const Free = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    

    const item1 = {
        icon: <FaShuttleVan className={style.icon} />,
        name: 'FREE SHIPPING',
        body: 'Enjoy the treat of free shipping on all your <br /> Halloween must-haves',
    }

    const item2 = {
        icon: <FaLock className={style.icon} />,
        name: 'SECURE PAYMENTS',
        body: 'Shop with confidence knowing that your <br /> payments are securely processed for a <br /> worry-free Halloween experience',
    }

    const item3 = {
        icon: <FaMapMarkerAlt className={style.icon} />,
        name: 'ORDER TRACKING',
        body: 'Stay in the know with real-time order <br /> tracking to ensure your Halloween treasures <br /> arrive right on time',
    }

  return (
    <div  data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.free}>
        <MyFree item={item1} />
        <MyFree item={item2} />
        <MyFree item={item3} />
    </div>
  )
}

export default Free