/* import Counter from "./features/counter/Counter"; */
import Addpost from "./features/posts/Addpost";
import PostsList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPost from "./features/posts/EditPost";
import UserPage from "./features/users/UserPage";
import UsersList from "./features/users/UsersList";
import "./App.css";
import Header from "./features/posts/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Counter /> */}
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="post" element={<Addpost />} />
          <Route path="post/:postId" element={<SinglePostPage />} />
          <Route path="post/edit/:postId" element={<EditPost />} />
          <Route path="user" element={<UsersList />} />
          <Route path="user/:userId" element={<UserPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
