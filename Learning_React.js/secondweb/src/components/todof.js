import React, { useState } from "react";

function Todof() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;
  return (
    <>
      <p>{title}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTodo({
            ...todo,
            title: e.target.value,
          });
        }}
      />
      <p>{description}</p>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setTodo({
            ...todo,
            description: e.target.value,
          });
        }}
      />
    </>
  );
}

export default Todof;
//   const [warning,setwarning]=useState('');
//    const Handler = (e) => {
//         const inpval = e.target.value;
//         const warning = inpval.includes(".js") ? "You need JS Knowledge.":
//         'no need of JavaScript.';
//         setTodo(inpval);
//         setwarning(warning);
//       };
