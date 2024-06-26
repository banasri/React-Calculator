import React, { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  const [result, setResult] = useState("");
  function handleClick(key) {
    if (key === 'C') {
      setResult("");
      return;
    }
    if (key === '=') {
      setResult(eval(result));
    } else {
      let newRes = result + key;

      setResult(newRes);
    }
  }
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Display result={result}></Display>
        <Buttons handleClick={handleClick}></Buttons>
      </div>
    </div>
  )

}

export default App;


