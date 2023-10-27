import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={
                        toggleState === 1 ? 
                        "qualification__button qualification__active button--flex" : 
                        "qualification__button button--flex"} 
                        onClick={() => toggleTab(1)} >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleState === 2 ? 
                        "qualification__button qualification__active button--flex" : 
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                    className={
                        toggleState === 1 ?
                        "qualification__content qualification__content-active":
                        "qualification__content"
                    }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">National Univesity of Singapore</h3>
                                <span className="qualification__subtitle">Singapore</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2025 
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">ACS (International)</h3>
                                <span className="qualification__subtitle">Singapore</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2020
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                    className={
                        toggleState === 2 ?
                        "qualification__content qualification__content-active":
                        "qualification__content"
                    }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AI Research Engineer Intern</h3>
                                <span className="qualification__subtitle">Bosch</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Dec 2023 - May 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Machine Learning Engineer Intern</h3>
                                <span className="qualification__subtitle">Chope</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    May 2023 - Aug 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Scientist Intern</h3>
                                <span className="qualification__subtitle">Hogetic Lab</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Apr 2022 - May 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Market Resaearcher</h3>
                                <span className="qualification__subtitle">Ensemblau Event and Marketing</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;