import resstyles from "../styles/Analysis.module.css";
import "../styles/global.css";
import styles from "../styles/Question.module.css";
import Option from "./Option";

export default function Question({ resultpage, title, options = [], handle }) {
  // console.log(resultpage);
  return (
    <div
      className={resultpage === "true" ? resstyles.question : styles.question}
    >
      <div className={resultpage === "true" ? resstyles.ques : styles.ques}>
        <p>{title}</p>
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
        {options.map((option, index) => (
          <Option
            Text={option.title}
            Value={index}
            Check={option.checked}
            onChange={(e) => handle(e, index)}
          />
        ))}
      </div>
    </div>
  );
}
