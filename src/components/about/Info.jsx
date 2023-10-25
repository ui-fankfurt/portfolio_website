import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2 Years Working</span>
            </div>

            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>

                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10 projects</span>
            </div>
            <div className="about__box">
            <i class="uil uil-graduation-cap about__icon"></i>
                <h3 className="about__title">Graduation Year</h3>
                <span className="about__subtitle">2025</span>
            </div>
            <br />
        </div>
    );
};

export default Info;