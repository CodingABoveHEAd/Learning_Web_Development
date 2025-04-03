import "../styles/global.css";
import styles from "../styles/login.module.css";
import Illustration from "./illustration";
import Nav from "./nav";

export default function Login() {
  return (
    <>
      <Nav />
      <p>
        <b>Login to your account</b>
      </p>
      <div className={styles.login}>
        <div className={styles.left}>
          <p>
            <b>Login to your account</b>
          </p>
          <Illustration
            image="/HTML_Template/images/3071357.jpg"
            Alt="login image"
          />
        </div>
        <div className={styles.right}>
          <input type="email" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
          <p>
            Don't have an account?<a href="/signUp.js">Signup</a> instead.
          </p>
        </div>
      </div>
    </>
  );
}
