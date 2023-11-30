import style from './hero.module.css'


const Hero = ({ item, fontSize }) => {
  const dynamicStyles = {
    fontSize: fontSize || '2rem', // Set a default font size if not provided
  };
  return (
    <div className={style.heroContainer}>
        <img className={style.hero} src={item.img} alt="hero background" />
        <div className={style.overlay}>
            <p className={style.new}>{item.p1}</p>
            <h1 style={dynamicStyles}> {item.h1} <br /> {item.h2} </h1>
            <p className={style.pTag}>{item.p2} <br /> {item.p3} </p>
            <button className={style.shop}>Shop Now</button>
        </div>
    </div>
  )
}

export default Hero