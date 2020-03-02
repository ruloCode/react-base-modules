/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import style from './App.module.css';
import baseStyle from '../../assets/styles/vars.module.css';

const App = () => {
  return (
    <div className={`${baseStyle.flex_column_evenly} ${style.container} `}>
      <p className={style.btn__inicio}>Hello React</p>
    </div>
  );
};

export default App;
