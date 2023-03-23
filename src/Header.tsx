import './Header.css';
import logo from './assets/images/logo.svg'
import hamburger from './assets/images/icon-hamburger.svg'

function Header() {
    const displayMenu = () => {
        const menu = document.getElementById('header')?.getElementsByTagName('nav')[0];
        const menuStatus = menu?.getAttribute('style');
        if (menuStatus) {
            menu?.setAttribute('style', '');
        } else {
            menu?.setAttribute('style', 'display: block;');
        }
    }

    return (
        <div id='header'>
            <img src={logo} alt='Logo'></img>
            <img src={hamburger} alt='Menu' onClick={displayMenu}></img>
            <nav>
                <div>About</div>
                <div>Services</div>
                <div>Projects</div>
                <div>Contact</div>
            </nav>
        </div>
    )
}

export default Header;