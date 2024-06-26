import React from 'react'
import styles from "./Buttons.module.css";

function Buttons({ handleClick }) {
  const buttons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  function buttonClick(item) {
    console.log("button Clicked");
    //console.log(e);
    console.log(item);
    handleClick(item)
  }
  return (
    <div className={styles.btnContainer}>
      {buttons.map((item) => {
        return <button key={item} className={styles.btn} onClick={() => buttonClick(item)}>{item} </button>
      })}
    </div>
  )
}

export default Buttons
