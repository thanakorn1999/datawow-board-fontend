import SignIn from "./pages/(auth)/SignIn";
import SignUp from "./pages/(auth)/SignUp";
import AuthLayout from "./pages/(auth)/components/AuthLayout";
import LoggedInLayout from "./pages/(loggedIn)/components/loggedInLayout";
import Board from "./pages/(loggedIn)/board";
import BoardId from "./pages/(loggedIn)/board/[id]";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<LoggedInLayout />}>
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<BoardId />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
