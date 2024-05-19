import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import MainHome from './pages/home/Home'
import VelogPage from './pages/VelogPage/VelogPage';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <AuthProvider>
      <Body>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><MainHome /></PrivateRoute>} />
            <Route path="/velog" element={<VelogPage />} />
          </Routes>
        </Router>
      </Body>
    </AuthProvider>
  );
}

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;

const Body = styled.div`
  /* 스타일을 여기에 추가합니다 */
`;
