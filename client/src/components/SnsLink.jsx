import React from 'react';
import fbimage from '../img/facebook.png';
import inimage from '../img/instagram.png';
import './SnsLink.css';

const SnsLink = () => (
  <div className="col12">
    <a href="http://www.facebook.com"><img className="snsicons" src={fbimage} alt="#" /></a>
    <a href="http://www.instagram.com"><img className="snsicons" src={inimage} alt="#" /></a>
    <p className="Address">서울특별시 강남구 테헤란로 201</p>
  </div>
);

export default SnsLink;
