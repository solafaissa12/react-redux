/* import Counter from "./features/counter/Counter"; */
import Addpost from "./features/posts/Addpost";
import PostsList from "./features/posts/PostsList";
import "./App.css";

const App = () => {
  return (
    <main>
      {/* <Counter /> */}
      <Addpost />
      <PostsList />
    </main>
  );
};

export default App;
