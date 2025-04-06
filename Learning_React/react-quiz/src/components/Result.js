import "../styles/global.css";
import styles from "../styles/result.module.css";
import Analysis from "./Analysis";
import Summary from "./Summary";

export default function Result() {
  return (
    <div className={styles.container}>
      <Summary />
      <Analysis />
    </div>
  );
}
