import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TodoPage from "./pages/TodoPage/TodoPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="*" element={<div>Page not found! 404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
