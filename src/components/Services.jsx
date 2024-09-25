import React from 'react';
import serviceImage1 from '../assets/img/24.png'; 
import serviceImage2 from '../assets/img/custom.png';
import serviceImage3 from '../assets/img/31.png';
import './Services.css';
import vector from '../assets/img/vector 1.png';
const Services = () => {
    return (
        <div className="services-container">
            <div className='softwares'>
            <h1 className="services-title">CUSTOM <span className="highlight">SOFTWARES</span></h1>
                <div className="service-card">
                <img src={serviceImage3} alt="Website Development" className="service-image" />
                <div className="service-info">
                    <h2>Learn How Our Custom Business Software Can Help You Grow</h2>
                    <p>
                    Contact us today and learn how we can help bring your business to the next level with a custom software solution!
                    </p>
                    <button className="contact-btn">Contact Us</button>
                </div>
            </div></div>
            <h1 className="services-title">OUR <span className="highlight">SERVICES</span></h1>
            <div className="service-card">
                <img src={serviceImage1} alt="Website Development" className="service-image" />
                <div className="service-info">
                    <h2>Website Development <br /> Full-stack, Backend, Frontend</h2>
                    <p>
                    Contact us today and learn how we can help bring your business to the next level with a custom software solution!
                    </p>
                    <button className="contact-btn">Contact Us</button>
                </div>
            </div>
            <div className="services-grid">
                <div className="service-card1">
                    <div className="service-content">
                        <div className="service-info">
                            <h2>Mobile App Development</h2>
                            <p>
                            Contact us today and learn how we can help bring your business to the next level with a custom software solution!
                            </p>
                        </div>
                        <img src={vector} alt="vector" className="vector-image" />
                    </div>
                </div>
                <div className="service-card2">
                    <div className="service-info">
                    </div>
                </div>

            </div>
            <div className="service-card3">
                <img src={serviceImage2} alt="Website Development" className="service-image2" />
                <div className="service-info2">
                <div className='info2'><h2> Graphic Designing & Visuals</h2>
                    <p>
                    Contact us today and learn how we can help<br/> bring your business to the next level with a<br/> custom software solution!
                    </p><img src={vector} alt="vector" className="vector-image2" /></div>
                </div>
            </div>
        </div>
    );
};

export default Services;
