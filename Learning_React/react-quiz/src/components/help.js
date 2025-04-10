import { useRef, useState } from "react";
import useHelp from "../Hooks/useHelp";
import "../styles/global.css";
import styles from "../styles/help.module.css";

export default function Help() {
  const [disp, setdisp] = useState(false);
  const dispref = useRef();

  function func4() {
    if (!disp) {
      setdisp(true);
      dispref.current.style.display = "flex";
    } else {
      setdisp(false);
      dispref.current.style.display = "none";
    }
  }

  const { load, error, helps } = useHelp();

  return (
    <div className={styles.help} onClick={func4}>
      <img
        style={{ height: "100%", width: "100%" }}
        src="/HTML_Template/images/help.png"
        alt="help_image"
      />

      <div className={styles.side} ref={dispref}>
        {!load &&
          !error &&
          helps.map((topic, index) => (
            <div key={index} className={styles.topicLinks}>
              <a href={topic.gfg} target="_blank" rel="noopener noreferrer">
                <img src="/HTML_Template/images/GeeksforGeeks.jpeg" alt="gfg" />
              </a>

              <a href={topic.gpt} target="_blank" rel="noopener noreferrer">
                <img
                  src="/HTML_Template/images/Korean Bulgogi Marinade for Ground Beef from Chapt GPT.jpeg"
                  alt="chatgpt"
                />
              </a>

              <a href={topic.yt} target="_blank" rel="noopener noreferrer">
                <img src="/HTML_Template/images/youtube.png" alt="youtube" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
