/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import styles from '../styles/pages/App.module.css';

const App = () => {
  console.log(styles);
  return (
    <div className={styles.header}>Hello react</div>
  );
};

export default App;
