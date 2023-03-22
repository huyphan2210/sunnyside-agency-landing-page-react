import './Header.css';
import logo from './assets/images/logo.svg'
function Header() {
    return (
        <div id='header'>
            <img src={logo} alt='Logo'></img>
            <nav>
                <a>About</a>
                <a>Services</a>
                <a>Projects</a>
                <a>Contact</a>
            </nav>
        </div>
    )
}

export default Header;