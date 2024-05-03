import React from 'react';
import './about.css';
import rasm from './img.jpg';

const About = () => {

    


    return (
        <div className='About'>

            <div className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar" href="#">React-developer</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="navbar" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="navbar" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="section container">

                <div className="detail">
                    <h1><span>Hi, It's Me</span><br /> I'm <span>Temur</span></h1>
                    <p>My fullname is <span class="span">Fozilov Temur</span> <br />I'm a front-end developer</p>
                    <div className="social">
                        <a href="https://t.me/Temur_Fozilov"><i className="fa-brands fa-telegram"></i></a>
                        <a href="https://github.com/bikashdev01/"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.instagram.com/temur_fozilov"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/temur_fozilov"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <button className='btn btn-danger btn-lg'>Download CV</button>
                </div>

                <div className="images">
                    <img src={rasm} />
                </div>


            </div>
        </div>
    )
}

export default About