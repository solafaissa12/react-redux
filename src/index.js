import React from "react";
import ReactDOM from "react-dom/client";

/* import App from "../src/Redux/App";
import { store } from "../src/Redux/app/store"; */
import App from "../src/Redux-thunk/App";
import { store } from "../src/Redux-thunk/app/store";
import { Provider } from "react-redux";
import { fetchusers } from "./Redux-thunk/features/users/UserSlice";
import { fetchposts } from "./Redux-thunk/features/posts/PostSlice";
import { BrowserRouter as Router } from "react-router-dom";
store.dispatch(fetchusers());
store.dispatch(fetchposts());

/* import './index.css'; */
/* import reportWebVitals from './reportWebVitals'; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <Routes>
          <Route path="/" element={<App />} />
        </Routes> */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

/* const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* reportWebVitals(); */

//ReactDOM.render(<App />,document.getElementById('root'));
