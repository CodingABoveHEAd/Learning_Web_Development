import resstyles from "../styles/Analysis.module.css";
import "../styles/global.css";
import styles from "../styles/Question.module.css";
import Option from "./Option";

export default function Question({
  resultpage,
  p,
  op1,
  op2,
  op3,
  op4,
  op5,
  op6,
  op7,
  op8,
}) {
  // console.log(resultpage);
  return (
    <div
      className={resultpage === "true" ? resstyles.question : styles.question}
    >
      <div className={resultpage === "true" ? resstyles.ques : styles.ques}>
        <p>{p}</p>
        <p
          style={{
            marginTop: 10,
            fontSize: 18,
            color: " rgb(107, 110, 110)",
          }}
        >
          Choose one option
        </p>
      </div>

      <div className={resultpage === "true" ? resstyles.quiz : styles.quiz}>
        <Option Text={op1} />
        <Option Text={op2} />
        <Option Text={op3} />
        <Option Text={op4} />
        <Option Text={op5} />
        <Option Text={op6} />
        <Option Text={op7} />
        <Option Text={op8} />
      </div>
    </div>
  );
}
