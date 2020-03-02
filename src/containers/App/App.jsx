/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import styles from './App.module.css';

const App = () => {
  console.log(styles);
  return (
    <div className={`${styles.container}`}>
    <p className={styles.btn__inicio}>hola</p>
    <p>hola</p>
    <p>hola</p>
    <p>hola</p>

  </div>
  );
};

export default App;
