import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/1">User 1 Profile</Link>
          </li>
          <li>
            <Link to="/user/2">User 2 Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
