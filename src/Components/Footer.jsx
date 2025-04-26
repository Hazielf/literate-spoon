import '../css/Components/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__row">
                    <div className="footer__col">
                        <h2 className="footer__heading">
                            <i className="fa-solid fa-circle-info"></i> Información
                        </h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <span className="footer__info">
                                    CiberStore. - RUC: 11111111111
                                </span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__info">
                                    Copyright © CiberStore 2025. Todos los
                                    derechos reservados
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <h2 className="footer__heading">
                            <i className="fa-solid fa-headset"></i> Contáctanos
                        </h2>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a
                                    className="footer__link"
                                    href="tel:983404936"
                                >
                                    <i className="footer__icon fa-solid fa-phone"></i>
                                    983404936
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    className="footer__link"
                                    href="mailto:CiberStore@gmail.com"
                                >
                                    <i className="footer__icon fa-solid fa-envelope"></i>
                                    CiberStore@gmail.com
                                </a>
                            </li>
                            <li className="footer__item">
                                <a
                                    className="footer__link"
                                    href="https://www.google.com/maps"
                                >
                                    <i className="footer__icon fa-solid fa-location-dot"></i>
                                    Av. Ciberte Maz 24
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer