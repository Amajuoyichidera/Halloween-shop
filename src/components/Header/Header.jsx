import style from './header.module.css'

const Header = ({ small, big }) => {
  return (
    <div>
        <div className={style.header}>
        <span>{small}</span>
        <h2>{big}</h2>
    </div>
        <div className={style.line}></div>
    </div>
  )
}

export default Header