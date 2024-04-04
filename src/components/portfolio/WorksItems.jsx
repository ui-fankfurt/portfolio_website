import React, { useState } from 'react';

const WorksItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <div className="work__content">
                <h3 className="work__title">{item.title}</h3>
                <span className="work__button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right work__button-icon"></i>
                </span>
            </div>
            <div className={toggleState === 3 ? "work__modal active-modal" : "work__modal"}>
                <div className="work__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times work__modal-close"></i>
                    <h3 className="work__modal-title">{item.title}</h3>
                    <p className="work__modal-description">Ensemblau Event and Marketing</p>
                    <ul className="work__modal-services grid">
                        <li className="work__modal-service">
                            <i className="uil uil-check-circle work__modal-icon"></i>
                            <p className="work__modal-info">I build machine learning models that contribute to effective business decisions.</p>
                        </li>
                        <li className="work__modal-service">
                            <i className="uil uil-check-circle work__modal-icon"></i>
                            <p className="work__modal-info">Fine-tuning Large Language Models</p>
                        </li>
                        <li className="work__modal-service">
                            <i className="uil uil-check-circle work__modal-icon"></i>
                            <p className="work__modal-info">Building advanced computer vision models</p>
                        </li>
                    </ul>
                    <a href={item.git_url} target="_blank" rel="noopener noreferrer" className="work__modal-button">
                        Visit GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorksItems;