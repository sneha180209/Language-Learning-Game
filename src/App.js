import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <h1>Language Game</h1>
      <p>Learn a new language by playing a game!</p>
      <p>Sign up or log in to get started.</p>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
