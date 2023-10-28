import React from 'react';
import "./work.css";
import Works from "./Works.jsx"

const Work = () => {
    return (
        <section className="work section" id='portfolio'>
            <h2 className="section__title">Portofolio</h2>
            <span className="section__subtitle">Most Recenet Works</span>

            <Works />
        </section>
    )
}

export default Work