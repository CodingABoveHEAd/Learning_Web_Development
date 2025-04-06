import "../styles/global.css";
import styles from "../styles/Summary.module.css";

export default function Summary() {
  return (
    <>
      <div className={styles.summary}>
        <div className={styles.txt}>
          <b>
            Your Score is
            <br />
            15 out of 20
          </b>
        </div>
        <div className={styles.imag}>
          <img
            src="/HTML_Template/images/result-removebg-preview.png"
            alt="result_img"
          />
        </div>
      </div>
    </>
  );
}
