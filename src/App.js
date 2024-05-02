import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <Body>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: 0 auto;
`;