import { useSelector } from "react-redux";
import { selectAll } from "./PostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsBtns from "./ReactionsBtns";

const PostsList = () => {
  const posts = useSelector(selectAll);

  const renderPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{<PostAuthor userId={post.userId} />}</p>
        <p>{<TimeAgo timestamp={post.date} />}</p>
        {<ReactionsBtns post={post} />}
      </article>
    );
  });
  return (
    <section className="post">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostsList;
