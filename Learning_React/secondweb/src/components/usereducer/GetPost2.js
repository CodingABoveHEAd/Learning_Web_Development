import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useEffect } from "react";

const initialstate = {
  loading: "true",
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };

    case "failure":
      return {
        loading: false,
        post: "",
        error: "An error occured",
      };

    default:
      return { state };
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "success", result: data });
      })

      .catch((err) => {
        dispatch({ type: "failure", result: data });
      });
  }, []);

  return(

    <>
        {state.loading?'loading...':state.post.body};
        {state.error?state.error:null};
    </>
);
}
