import React from "react";
import "../styles/global.css";
import styles from "../styles/item.module.css";

export default function Item({ name, image }) {
  return (
    <div className={styles.item}>
      <img src={image} alt="logo" />
      <p>
        <b>{name}</b>
      </p>
      <div className={styles.det}>
        <p style={{ top: 20, left: 3 }}>4 Questions</p>
        <p style={{ top: 20, right: 3 }}>Total points: 20</p>
      </div>
    </div>
  );
}
