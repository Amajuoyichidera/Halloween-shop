import './header.module.css'

const Header = ({ small, big }) => {
  return (
    <div>
        <span>{small}</span>
        <h2>{big}</h2>
    </div>
  )
}

export default Header