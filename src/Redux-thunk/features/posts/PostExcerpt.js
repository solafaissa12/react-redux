import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsBtns from "./ReactionsBtns";
import { Link } from "react-router-dom";
import React from "react";

let PostExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 75)}</p>
      <Link to={`post/${post.id}`}>view post</Link>
      <p>{<PostAuthor userId={post.userId} />}</p>
      <p>{<TimeAgo timestamp={post.date} />}</p>
      {<ReactionsBtns post={post} />}
    </article>
  );
};

PostExcerpt = React.memo(PostExcerpt);
export default PostExcerpt;
