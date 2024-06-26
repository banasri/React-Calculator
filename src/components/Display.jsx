import React from 'react'
import styles from "./Display.module.css";

function Display({ result }) {
  return (
    <>
      <input className={styles.displayBox} type="text" value={result} readOnly={true}></input>
    </>
  )
}

export default Display
