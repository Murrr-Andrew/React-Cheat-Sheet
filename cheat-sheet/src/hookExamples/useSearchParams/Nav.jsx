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
            <Link to="/items">Items</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
