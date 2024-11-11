import "./Footer.scss"


import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";



const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__content container">


                <div>
                    <a href="#!" className="footer__logo">SHOP</a>
                    <ul className="footer__column">
                        <li><a className="footer__column-link" href="#!"> Скидки</a></li>
                        <li><a className="footer__column-link" href="#!"> Блог</a></li>
                        <li><a className="footer__column-link" href="#!"> Частые вопросы</a></li>
                        <li><a className="footer__column-link" href="#!"> Доставка</a></li>
                        <li><a className="footer__column-link" href="#!"> Гарантия</a></li>
                        <li><a className="footer__column-link" href="#!"> Возврат</a></li>

                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">ТОВАРЫ</h3>
                    <ul className="footer__column">
                        <li><a className="footer__column-link" href="#!">Часы</a></li>
                        <li><a className="footer__column-link" href="#!">Кольца</a></li>
                        <li><a className="footer__column-link" href="#!">Серьги</a></li>
                        <li><a className="footer__column-link" href="#!">Браслеты</a></li>
                        <li><a className="footer__column-link" href="#!">Клатчи</a></li>
                        <li><a className="footer__column-link" href="#!">Цепочки</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">КОНТАКТЫ</h3>

                    <ul className="footer__column">
                        <li><p className="footer__column-link">Lorem ipsum dolor sit amet consectetur.</p></li>
                        <li><a className="footer__column-link" href="tel:+7777777777">+7777777777</a></li>
                        <li><a className="footer__column-link" href="mailto:mail@.com">mail@.com</a></li>
                    </ul>



                    <div >
                        <h3 className="footer__title">СОЦИАЛЬНЫЕ СЕТИ</h3>

                        <ul className="footer__column socials">
                            <li><a className="footer__column-link" href="#!"><img src={facebook} alt="facebook" /></a></li>
                            <li><a className="footer__column-link" href="#!"><img src={instagram} alt="instagram" /></a></li>
                            <li><a className="footer__column-link" href="#!"><img src={twitter} alt="twitter" /></a></li>
                        </ul>




                    </div>

                </div>
            </div>





        </footer>

    )
}

export default Footer;
