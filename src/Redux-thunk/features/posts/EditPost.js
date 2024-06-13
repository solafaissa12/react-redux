import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostById, updatePost, deletePost } from "./PostSlice";
import { selectAllUsers } from "../users/UserSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const post = useSelector((state) => getPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    );
  }

  const onSave = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        );
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.log("failed to update post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };
  const onDelete = () => {
    try {
      setRequestStatus("pending");
      dispatch(
        deletePost({
          id: post.id,
        })
      );
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.log("failed to delete post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section className="addpost">
      <h2>Edit Post:</h2>
      <form>
        <label htmlFor="title">Edit Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <select
          id="author"
          defaultValue={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="content">Edit Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSave} disabled={!canSave}>
          Save Post
        </button>
        <button type="button" onClick={onDelete}>
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPost;
