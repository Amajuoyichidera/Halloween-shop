import heroBg from '../../images/hero-01.jpg'
import style from './hero.module.css'


const Hero = () => {
  return (
    <div className={style.heroContainer}>
        <img className={style.hero} src={heroBg} alt="hero background" />
        <div className={style.overlay}>
            <p className={style.new}>NEW COLLECTION</p>
            <h1>Halloween <br /> Decorations</h1>
            <p className={style.pTag}>Whether you prefer the charm of classic Halloween decor or the thrill of modern and innovative designs, <br /> these decorations invite you to join in the celebration of all things eerie, enigmatic, and enchanting.</p>
            <button className={style.shop}>Shop Now</button>
        </div>
    </div>
  )
}

export default Hero