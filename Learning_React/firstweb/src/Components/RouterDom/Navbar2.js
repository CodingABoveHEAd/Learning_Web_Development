import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <>
      <ul style={{listStyleType:'decimal'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/about/js/react">About</Link>
        </li>
      </ul>
    </>
  );
}
