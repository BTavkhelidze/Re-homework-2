import React from 'react';
import style from './Main.module.scss';
import img from '../../../image.png';

const MainSection = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>
          Hi, I am <span>Chukwukwe Chisom</span>
        </h1>
        <p>Frontend Developer</p>
        <button>Download CV</button>
      </div>
      <div className={style.imageWrapper}>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export default MainSection;
