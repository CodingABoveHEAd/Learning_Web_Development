import "../styles/global.css";
import styles from "../styles/Quiz.module.css";
import AllQuestion from "./AllQuestion";
import PrevNext from "./PrevNext";

export default function Quiz() {
  return (
    <>
      <div className={styles.bod}>
        <AllQuestion resultpage="false" />
        <progress
          style={{ width: "100%", marginTop: "50px" }}
          value="25"
          max="100"
        ></progress>
        {/* <AllQuestion /> */}
        <PrevNext />
      </div>
    </>
  );
}
