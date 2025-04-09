import resstyles from "../styles/Analysis.module.css";
import "../styles/global.css";
import AllQuestion from "./AllQuestion";

export default function Analysis({ answers }) {
  return (
    <>
      <p className={resstyles.an}>Result Analysis:</p>
      <AllQuestion resultpage="true" Answers={answers} />
    </>
  );
}
