import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsBtns from "./ReactionsBtns";
import { useSelector } from "react-redux";
import { getPostById } from "./PostSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }
  return (
    <div className="post">
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <p>{<PostAuthor userId={post.userId} />}</p>
        <p>{<TimeAgo timestamp={post.date} />}</p>
        {<ReactionsBtns post={post} />}
      </article>
    </div>
  );
};

export default SinglePostPage;
