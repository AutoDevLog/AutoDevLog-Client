import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../../componets/Header/Header';
import * as styles from './Login.styles';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // 에러 메시지를 저장하는 상태
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('handleLogin called');
    // ID와 PW 검증 로직
    if (username === 'Admin' && password === '1234') {
      const token = 'dummy-token'; // 실제 로그인 로직에서 토큰 받아오기
      console.log('Login successful, navigating to /home');
      login(token, username);
      navigate("/home");
    } else {
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
      console.log('Login failed');  // 에러 메시지 설정
    }
  };

  const links = [
    {
      to: "/",
      label: "Home",
      style: {}
    }
  ];

  return (
    <styles.Container>
        <Header links={links}/>
      <styles.BodyContainer>
        <styles.BodyContentContainer>
          <styles.FormContainer onSubmit = {handleLogin}>
            <styles.FormTitle>로그인</styles.FormTitle>
            <styles.Input 
              type="text" 
              placeholder="아이디" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <styles.Input 
              type="password" 
              placeholder="비밀번호" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <styles.ErrorText>{error}</styles.ErrorText>}
            <styles.ButtonContainer>
              <styles.Button type="submit">로그인</styles.Button>
            </styles.ButtonContainer>
          </styles.FormContainer>
        </styles.BodyContentContainer>
      </styles.BodyContainer>
      <styles.FooterContainer>
        footer
      </styles.FooterContainer>
    </styles.Container>
  );
};

export default Login;
