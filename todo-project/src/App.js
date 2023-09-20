import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
