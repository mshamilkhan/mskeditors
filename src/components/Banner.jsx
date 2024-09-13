import React from 'react';
import Header from './Header';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
        <Header />
      <div className="content">
        <h1>MAKE  <span className="highlight">YOUR</span><br/><span className='highlight2'> BUSINESS </span><span className='highlight3'> A</span> <br/><span className="highlight1"> BRAND</span></h1>
        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
}

export default Banner;
