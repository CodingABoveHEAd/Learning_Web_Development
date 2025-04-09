import "../styles/global.css";
import styles from "../styles/Option.module.css";

export default function Option({ Text, Value, Check, onChange, disabled }) {
  // const [isSelected, setIsSelected] = useState(false);

  // const handleClick = (e) => {
  //   isSelected === true ? setIsSelected(false) : setIsSelected(true);
  //   let parent = e.target.parentElement;
  //   if (isSelected) {
  //     parent.style.backgroundColor = "lightblue";
  //     e.target.checked = true;
  //   } else {
  //     parent.style.backgroundColor = "rgb(255, 255, 255)";
  //     e.target.checked = false;
  //   }
  // };

  return (
    <div className={styles.opt}>
      <input
        value={Value}
        checked={Check}
        type="checkbox"
        onChange={onChange}
        style={{ cursor: "pointer", margin: "0px 5px" }}
        disabled={disabled}
      />
      <span>{Text}</span>
    </div>
  );
}
