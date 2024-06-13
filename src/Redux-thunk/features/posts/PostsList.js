import { useSelector } from "react-redux";
import { selectAll, getPostsStatus, getPostsError } from "./PostSlice";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const posts = useSelector(selectAll);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content = "";

  if (status === "loading") {
    content = <p> Loading...</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="post">
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
