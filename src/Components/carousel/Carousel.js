import React from 'react';
import './Carousel.css';

export default function Carosel(){
    return(
        <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
            </ul>
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="images/bb1.jpg" alt="jewellries"/>
                </div>
                <div className="carousel-item">
                <img src="images/bb1.jpg" alt="jewellries"/>
                </div>                              
            </div>
            
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}