import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./PostSlice";
import { selectAllUsers } from "../users/UserSlice";
import { useNavigate } from "react-router-dom";

const Addpost = () => {
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSaveClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate("/");
      } catch (err) {
        console.error(err);
      } finally {
        setAddRequestStatus("idle");
      }
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
      <h2>Add a New Post:</h2>
      <form>
        <label htmlFor="title">Add Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <select
          id="author"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        >
          <option></option>
          {userOptions}
        </select>

        <label htmlFor="content">Add Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onSaveClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default Addpost;
