import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ui</h1>

                <u1 className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#porfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>
                </u1>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/ui-ogino/" 
                    className="footer__social-icon" 
                    target={"_blank"}>
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/ui-fankfurt" 
                    className="footer__social-icon" 
                    target={"_blank"}>
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer