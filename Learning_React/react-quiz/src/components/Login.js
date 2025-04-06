import { Link } from "react-router-dom";
import "../styles/global.css";
import styles from "../styles/login.module.css";
import Illustration from "./illustration";

export default function Login() {
  return (
    <>
      <p>
        <b>Login to your account</b>
      </p>
      <div className={styles.login}>
        <div className={styles.left}>
          <p>
            <b>Login to your account</b>
          </p>
          <Illustration
            image="/HTML_Template/images/login.jpg"
            Alt="login image"
          />
        </div>
        <div className={styles.right}>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
          <p>
            Don't have an account?<Link to="/signUp">Signup</Link> instead.
          </p>
        </div>
      </div>
    </>
  );
}
