import resstyles from "../styles/Analysis.module.css";
import "../styles/global.css";
import AllQuestion from "./AllQuestion";

export default function Analysis() {
  return (
    <>
      <p className={resstyles.an}>Result Analysis:</p>
      <AllQuestion resultpage="true" />
    </>
  );
}
