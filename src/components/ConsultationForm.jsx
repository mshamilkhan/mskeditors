import React,{useState, useEffect} from 'react';
import './ConsultationForm.css';  
import logo from '../assets/img/logo.png';
import client1 from '../assets/img/client1.png';
import client2 from '../assets/img/client2.png';
import client3 from '../assets/img/client3.png';
import client4 from '../assets/img/client4.png';
import client5 from '../assets/img/client5.png';
import client6 from '../assets/img/client6.png';
import client7 from '../assets/img/client7.png';
import client8 from '../assets/img/client8.png';
import client9 from '../assets/img/client9.png';
export const Heading = () => {
    return (
        <div className="heading">
            <h2><span className="highlight">Benefit</span> from a tried and true application development process.</h2>
            <p>Let’s use an agile process to string together iterative victories.</p>
            <button className="consultation-button">Schedule Consultation</button>
        </div>
    )
};
export const Clients = () => {
        const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9];
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
          }, 4000);
      
          return () => clearInterval(interval);
        }, [clients.length]);
      
        const currentClients = [];
        for (let i = 0; i < 4; i++) {
          currentClients.push(clients[(currentIndex + i) % clients.length]); 
        }
      
        return (
          <div className="clients-section">
            <div className="clients-heading">
              <h2><span className="highlight">Clients</span> We Have Worked With</h2>
              <p>Let's use an agile process to string together iterative victories.</p>
            </div>
            <div className='line'></div>

            <div className="clients-logos">
              {currentClients.map((client, index) => (
                <img key={index} src={client} alt={`Client ${index + 1}`} className="client-logo" />
              ))}
            </div>
      
            <div className='line2'></div>
          </div>
        );
      };
const ConsultationForm = () => {
    return (<>
    <Clients/>
        <Heading/>
        <div className="container">
            {/* Logo Section */}
            <div className="logo-container">
                <img src={logo} alt="Logo" className="contactlogo" />
            </div>

            {/* Form Section */}
            <div className="form-container">
                <h2>Let’s <span className="highlight">Chat</span> About Your Project</h2>
                <form className="form">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Work Email" />
                    <input type="text" placeholder="Contact" />
                    <button type="submit">Schedule Consultation</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default ConsultationForm;
