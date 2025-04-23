import Counter from "./counter";
import Stats from "./stats"

const initialCounters = [
  {
    id: 1,
    value: 0,
  },

  {
    id: 2,
    value: 0,
  },
];


export default function Apps() {
  return (
    <>
      <Counter />
      <Counter />
      <Stats total="12">Total Count:</Stats>
    </>
  );
}
