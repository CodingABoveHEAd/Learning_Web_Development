function Tempcheck(props) {
  if (props.farenheit >= 100) return <p>Will boil</p>;
  return <p>Will not boil</p>;
}

export default Tempcheck;
