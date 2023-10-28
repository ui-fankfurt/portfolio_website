import React from 'react';

const WorksItems = ({ item }) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <span className="services__button">
                        View More
                    <i className="uil uil-arrow-right services__button-icon"></i></span>
        </div>
    );
};

export default WorksItems;
