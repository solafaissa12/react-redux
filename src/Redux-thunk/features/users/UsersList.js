import { useSelector } from "react-redux";
import { selectAllUsers } from "./UserSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const users = useSelector(selectAllUsers);
  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </li>
    );
  });

  return (
    <section className="post">
      <h2 style={{ color: "rgb(237, 240, 90)" }}>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  );
};

export default UsersList;
