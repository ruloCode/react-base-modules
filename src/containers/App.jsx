/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import styles from '../styles/pages/App.module.css';

const App = () => {
  console.log(styles);
  return (
    <div className={`${styles.container}`}>
    <p>hola</p>
    <p>hola</p>
    <p>hola</p>
    <p>hola</p>

  </div>
  );
};

export default App;
