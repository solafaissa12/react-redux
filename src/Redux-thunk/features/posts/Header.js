import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Redux Project</h1>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/post">Add Post</Link>
          <Link to="/user">Users</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
