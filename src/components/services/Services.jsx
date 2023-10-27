import React, {useState} from 'react';
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My past internship experiences</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Machine Learning Engineer, <br /> Chope</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More 
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Machine Learning Engineer</h3>
                            <p className="services__modal-description">Chope</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I built machine learning 
                                    models that contributes to effective business decisions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Fine-tuning Large Language 
                                    Models</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Building advanced computer 
                                    vision models</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Data Scientist, <br />Hogetic Lab</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? 
                        "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab()} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Data Scientist Intern</h3>
                            <p className="services__modal-description">Hogetic Lab</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I build machine learning 
                                    models that contributes to effective business decisions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Fine-tuning Large Language 
                                    Models</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Building advanced computer 
                                    vision models</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services