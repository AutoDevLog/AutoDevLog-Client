import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import Login from "./pages/login/login"
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Body>
  );
}

export default App;

const Body = styled.div`
`;