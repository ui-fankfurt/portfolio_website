import React, { useState, useEffect } from 'react';
import "./header.css";


const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header) {
                if (window.scrollY >= 80) {
                    header.classList.add("scroll-header");
                } else {
                    header.classList.remove("scroll-header");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    /*=============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Ui</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase nav__icon"></i> Experience
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#qualification" className="nav__link">
                                <i className="uil uil-graduation-cap nav__icon"></i> Qualification
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;