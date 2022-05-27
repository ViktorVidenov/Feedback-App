import { Link } from "react-router-dom"

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <p>
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>
            {text}
          </Link>
        </p>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: 'pink'
}

export default Header