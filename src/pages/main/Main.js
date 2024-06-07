import React, { useState, useContext } from "react";
import * as styles from "./Main.styles";
import Header from "../../componets/Header/Header";
import AnimatedTitle from "../../componets/Animated/AnimatedTitle/AnimatedTitle";
import AnimatedRoundBox from "../../componets/Animated/AnimatedRoundBox/AnimatedRoundBox";
import Modal from "../../componets/Modal/Modal";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { initLoginFormat, sendLoginData } from '../../services/apis';
import logo_revert from '../../assets/logo_revert.svg';

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSlidingBoxOpen, setIsSlidingBoxOpen] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // 에러 메시지를 저장하는 상태
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const data = {
      id: username,
      password: password,
    }
    e.preventDefault();

    try {
      const responseData = await sendLoginData(initLoginFormat(username, password));
      console.log(responseData);
      localStorage.setItem('accessToken', responseData['accessToken']);
      localStorage.setItem('refreshToken', responseData['refreshToken']);
      console.log('accessToken:', localStorage.accessToken);
      console.log('refreshToken:', localStorage.refreshToken);
      navigate("/home");
    } catch (error) {
      console.error('Error:', error);
    }

    /*
    // ID와 PW 검증 로직
    if (username === 'admin' && password === '1234') {
      const token = 'dummy-token'; // 실제 로그인 로직에서 토큰 받아오기
      console.log('Login successful, navigating to /home');
      login(token, username);
      navigate("/home");
    } else {
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
      console.log('Login failed');  // 에러 메시지 설정
    }
    */
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleSlidingBoxOpen = () => {
    setTimeout(() => setIsSlidingBoxOpen(true), 10); // 약간의 딜레이를 주어 애니메이션 시작
  };
  const handleSlidingBoxClose = () => {
    setIsSlidingBoxOpen(false);
  };

  /* Header Props */
  const links = [
    {
      to: "#",
      label: "로그인",
      onClick: (e) => {
        e.preventDefault();
        handleSlidingBoxOpen();
      },
      style: {
      }
    }
  ];

  const handleClick = () => {
    handleModalOpen();
    console.log("clicked!");
  };

  return (
    <styles.Container>
      <Header links={links}/>
      <styles.BodyContainer>
        <AnimatedTitle title="AUTO DEVELOPER" 
          style={{ padding: "10vh", paddingBottom: "0px",margin:"0px", fontSize: "10em", color: "white",textAlign: "right"}} trigger={true}/>
        <AnimatedTitle title=".LOG" 
          style={{ padding: "0 10vh", margin:"0px", fontSize: "10em", color: "white",textAlign: "left"}} trigger={true}/>
      </styles.BodyContainer>
      <styles.ColumnContainer>
        <AnimatedTitle title="오늘 하루 당신의 개발일지를 작성하세요" style={{ paddingTop: "1em", fontSize: "5vh", color: "white", textAlign:"center" }} trigger={true} />
        <styles.BoxContainer>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Issue
          </styles.BoxTitle>
          <styles.BoxText>
            개발 중에 발생한 이슈는 무엇이었나요?
          </styles.BoxText>
        </AnimatedRoundBox>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Inference
          </styles.BoxTitle>
          <styles.BoxText>
            이슈를 해결하는 과정은 무엇이었나요?
          </styles.BoxText>
        </AnimatedRoundBox>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Solution
          </styles.BoxTitle>
          <styles.BoxText>
            최종적으로 해결한 방법은?
          </styles.BoxText>
        </AnimatedRoundBox>
      </styles.BoxContainer>
      </styles.ColumnContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      </Modal>
        <styles.SlidingBox 
          isOpen={isSlidingBoxOpen}>
          <styles.CloseButton onClick={handleSlidingBoxClose}>X</styles.CloseButton>
          <styles.FormContainer onSubmit={handleLogin}>
            <styles.LogoContainer>
            <img src={logo_revert} alt="Logo" />
            </styles.LogoContainer>
            {error && <styles.ErrorText>{error}</styles.ErrorText>}
            <styles.Input 
              type="text" 
              placeholder="아이디" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <styles.Input 
              type="password" 
              placeholder="비밀번호" 
              autocomplete="off"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <styles.Button type="submit">로그인</styles.Button>
          </styles.FormContainer>
        </styles.SlidingBox>
    </styles.Container>
  );
}

export default Main;