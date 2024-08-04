import React from 'react';
import style from './Skills.module.scss';
import jsImg from '../.././assets/images/javaScript.png';
import reImg from '../.././assets/images/React.png';
import vueImg from '../.././assets/images/vue.png';
import angularImg from '../.././assets/images/angular.png';

const Skills = () => {
  return (
    <div className={style.mainContainer}>
      <div>
        <img src={jsImg} alt='javascript icon' />
        <p>Javascript</p>
      </div>
      <div>
        <img src={reImg} alt='javascript icon' />
        <p>React</p>
      </div>
      <div>
        <img src={angularImg} alt='javascript icon' />
        <p>Angular js</p>
      </div>
      <div>
        <img src={vueImg} alt='javascript icon' />
        <p>Vue js</p>
      </div>
    </div>
  );
};

export default Skills;
