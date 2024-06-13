import { useSelector } from "react-redux";
/* import { selectUserById } from "./UserSlice"; */
import { selectAll } from "../posts/PostSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  /* const user = useSelector((state) => selectUserById(state, Number(userId))); */

  const postForUser = useSelector((state) => {
    const allPosts = selectAll(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postTitles = postForUser.map((post) => {
    return (
      <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    );
  });

  return (
    <section className="post">
      {/* <h2>{user?.title}</h2> */}
      <h2 style={{ color: "rgb(237, 240, 90)" }}>Titles: </h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
