import SignIn from "./pages/(auth)/SignIn";
import SignUp from "./pages/(auth)/SignUp";
import AuthLayout from "./pages/(auth)/components/AuthLayout";
import LoggedInLayout from "./pages/(loggedIn)/components/loggedInLayout";
import Board from "./pages/(loggedIn)/board";
import BoardId from "./pages/(loggedIn)/board/details/[id]";
import MyBoard from "./pages/(loggedIn)/board/me";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        {/* Board Routes */}
        <Route path="/board" element={<LoggedInLayout />}>
          <Route index element={<Board />} />
          <Route path="details/:id" element={<BoardId />} />
          <Route path="me" element={<MyBoard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
