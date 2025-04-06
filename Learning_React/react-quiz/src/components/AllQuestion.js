import styles from "../styles/AllQuestion.module.css";
import resstyles from "../styles/Analysis.module.css";

import "../styles/global.css";
import Question from "./Question";

// const slidex = document.getElementsByClassName("slide");
// console.log(slidex);

// { Cntx }
export default function AllQuestion({ resultpage }) {
  // for (let i = 0; i < slidex.length; i++) {
  //   slidex[i].style.left = `${i * 100}%`;
  // }

  // function slideimagex() {
  //   for (let i = 0; i < slidex.length; i++) {
  //     slidex[i].style.transform = `translateX(-${cntx * 100}%)`;
  //   }
  // }
  return (
    <>
      {/* <div className={{resultpage}==='true'?resstyles.questions:styles.questions}> */}
      <div
        className={
          resultpage === "true" ? resstyles.questions : styles.questions
        }
      >
        <Question
          // style={{ marginTop: 15 }}
          resultpage={resultpage}
          p="What is the time complexity of binary search?"
          op1="nlogn"
          op2="nlogn"
          op3="nlogn"
          op4="nlogn"
          op5="nlogn"
          op6="nlogn"
          op7="nlogn"
          op8="nlogn"
        />

        <Question
          resultpage={resultpage}
          p="What is the time complexity of binary search?"
          op1="nlogn"
          op2="nlogn"
          op3="nlogn"
          op4="nlogn"
          op5="nlogn"
          op6="nlogn"
          op7="nlogn"
          op8="nlogn"
        />

        <Question
          resultpage={resultpage}
          p="What is the time complexity of binary search?"
          op1="nlogn"
          op2="nlogn"
          op3="nlogn"
          op4="nlogn"
          op5="nlogn"
          op6="nlogn"
          op7="nlogn"
          op8="nlogn"
        />
      </div>
    </>
  );
}
