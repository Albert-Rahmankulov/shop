import "./NavBar.scss";
import { Link } from 'react-router-dom';
import basket from "../../assets/images/basket.svg";
import heart from "../../assets/images/heart.svg";
import search from "../../assets/images/search.svg";
import user from "../../assets/images/user.svg";

const NavBar = () => {



    return (

        <nav className="nav container">
            
            <Link to="/" className="nav__logo">SHOP</Link>


            <ul className="nav__buttons">
                <li><button className="nav__buttons-button">RU</button></li>
                <li><button className="nav__buttons-button"><img src={heart} alt="heart" /></button></li>
                <li><button className="nav__buttons-button"><img src={basket} alt="basket" /></button></li>
                <li><button className="nav__buttons-button"><img src={user} alt="user" /></button></li>
                <li><button className="nav__buttons-button"><img src={search} alt="search" /></button></li>
            </ul>



        </nav>

    )
}

export default NavBar;