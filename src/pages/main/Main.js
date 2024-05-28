import React, { useState, useContext } from "react";
import * as styles from "./Main.styles";
import Header from "../../componets/Header/Header";
import AnimatedTitle from "../../componets/Animated/AnimatedTitle/AnimatedTitle";
import AnimatedRoundBox from "../../componets/Animated/AnimatedRoundBox/AnimatedRoundBox";
import Modal from "../../componets/Modal/Modal";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { sendLoginData } from '../../services/apis';

function Main() {
  const [title1, setTitle1] = useState('UPLOAD WHAT YOU STUDY\nWITH GENAI');
  const [title2, setTitle2] = useState('What is AutoDevLog');
  const [title3, setTitle3] = useState('START AUTODEVLOG!');

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
    console.log('handleLogin called');

    try {
      const responseData = await sendLoginData(data);
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }

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
        <AnimatedTitle title={title1} style={{ padding: "1em", fontSize: "4em", color: "white" }} trigger={false} />
      </styles.BodyContainer>
      <AnimatedTitle title={title2} style={{ paddingTop: "1em", fontSize: "3em", color: "white" }} trigger={true} />
      <styles.BoxContainer>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Issue
          </styles.BoxTitle>
          <styles.BoxText>
            Issue is Issue
          </styles.BoxText>
        </AnimatedRoundBox>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Inference
          </styles.BoxTitle>
          <styles.BoxText>
            Inference for your Issue
          </styles.BoxText>
        </AnimatedRoundBox>
        <AnimatedRoundBox>
          <styles.BoxTitle>
            Solution
          </styles.BoxTitle>
          <styles.BoxText>
            What is your solution
          </styles.BoxText>
        </AnimatedRoundBox>
      </styles.BoxContainer>
      <styles.BodyContainer>
        <AnimatedTitle title={title3} style={{ paddingTop: "1em", fontSize: "3em", color: "white"}} trigger={true} />
        <AnimatedRoundBox onClick={handleClick} trigger={true} style={{ backgroundColor: "white", marginBottom: "5em", textAlign: "center"}}>
          <styles.BoxTitle style={{marginTop: "3px"}}>Register</styles.BoxTitle>
        </AnimatedRoundBox>
      </styles.BodyContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
      </Modal>
        <styles.SlidingBox 
          isOpen={isSlidingBoxOpen}>
          <styles.Button onClick={handleSlidingBoxClose}>Close</styles.Button>
          <styles.BoxTitle3>로그인</styles.BoxTitle3>
          <styles.FormContainer onSubmit={handleLogin}>
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