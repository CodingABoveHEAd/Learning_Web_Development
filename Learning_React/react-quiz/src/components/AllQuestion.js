import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../Hooks/useQuestions";
import styles from "../styles/AllQuestion.module.css";
import resstyles from "../styles/Analysis.module.css";
import "../styles/global.css";
import PrevNext from "./PrevNext";
import Question from "./Question";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

export default function AllQuestion({ resultpage }) {
  const { id } = useParams();
  const { load, error, questions } = useQuestion(id);
  const [curques, setcurques] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function next() {
    if (curques <= questions.length) {
      setcurques((prev) => prev + 1);
    } else {
      console.log(questions.length);
      alert("No more question");
      setcurques(questions.length - 1);
      return;
    }
  }

  function prev() {
    if (curques && curques <= questions.length) {
      setcurques((prev) => prev - 1);
    }
  }

  function change(e, index) {
    dispatch({
      type: "answer",
      questionID: curques,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  console.log(qna);

  return (
    <>
      {load && <div>Loading</div>}
      {error && <div>There was an error!</div>}

      {!load && !error && qna && qna.length > 0 && (
        <>
          <div
            className={
              resultpage === "true" ? resstyles.questions : styles.questions
            }
          >
            {qna && qna.length > 0 && (
              <Question
                resultpage={resultpage}
                title={qna[curques].title}
                options={qna[curques].options}
                handle={change}
              />
            )}
          </div>

          <progress
            style={{ width: "100%", marginTop: "50px" }}
            value={(curques + 1) * 25}
            max="100"
          ></progress>

          <PrevNext Nextques={next} Prevques={prev} />
        </>
      )}
    </>
  );
}

// const slidex = document.getElementsByClassName("slide");
// console.log(slidex);

// { Cntx }
//
// for (let i = 0; i < slidex.length; i++) {
//   slidex[i].style.left = `${i * 100}%`;
// }

// function slideimagex() {
//   for (let i = 0; i < slidex.length; i++) {
//     slidex[i].style.transform = `translateX(-${cntx * 100}%)`;
//   }
// }
