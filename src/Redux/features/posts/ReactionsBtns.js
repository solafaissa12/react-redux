import { useDispatch } from "react-redux";
import { reactionAdding } from "./PostSlice";

const reactionEmoje = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionsBtns = ({ post }) => {
  const dispatch = useDispatch();
  const reactionbtns = Object.entries(reactionEmoje).map(([name, emoje]) => {
    return (
      <button
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdding({ postId: post.id, reaction: name }))
        }
      >
        {emoje} {post.reactions[name]}
      </button>
    );
  });
  return <div className="btns">{reactionbtns}</div>;
};

export default ReactionsBtns;
