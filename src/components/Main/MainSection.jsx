import React from 'react';
import style from './Main.module.scss';
import img from '../../../image.png';
import Skills from '../skills/Skills';
import facebook from '../../assets/svg/facebook.svg';
import instagram from '../../assets/svg/instagram.svg';
import twitter from '../../assets/svg/twitter.svg';
import linkdIn from '../../assets/svg/linkdIn.svg';
import whatsApp from '../../assets/svg/whatsApp.svg';

const MainSection = ({ mode }) => {
  return (
    <>
      <div className={style.container}>
        <div>
          <h1
            style={
              mode ? { color: '#455174', opacity: '80%' } : { color: 'white' }
            }
          >
            Hi, I am <span>Chukwukwe Chisom</span>
          </h1>
          <p>Frontend Developer</p>
          <button>Download CV</button>
          <div className={style.socialMedia}>
            <a href='#'>
              <img src={facebook} alt='facebookIcon' />
            </a>
            <a href='#'>
              <img src={instagram} alt='instagramIcon' />
            </a>
            <a href='#'>
              <img src={twitter} alt='twitterIcon' />
            </a>
            <a href='#'>
              <img src={linkdIn} alt='linkdInIcon' />
            </a>
            <a href='#'>
              <img src={whatsApp} alt='whatsAppIcon' />
            </a>
          </div>
        </div>
        <div className={style.imageWrapper}>
          <img src={img} alt='icon' />
        </div>
      </div>
      <div className={style.skillsContainer}>
        <Skills />
      </div>
    </>
  );
};

export default MainSection;
