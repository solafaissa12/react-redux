import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsAdding } from "./PostSlice";
import { selectAllUsers } from "../users/UserSlice";

const Addpost = () => {
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const onSaveClicked = () => {
    if (title && content && userId) {
      dispatch(postsAdding(title, content, userId));
    }
    setTitle("");
    setContent("");
    setUserId("");
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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
          onChange={(e) => setUserId(e.target.value)}
        >
          <option></option>
          {userOptions}
        </select>

        <label htmlFor="content">Add Content:</label>
        <input
          id="Content"
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
