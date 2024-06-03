import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from "../../componets/Header/Header";
import { useNavigate } from 'react-router-dom';
import * as styles from './VelogPage.styles';
import { sendAuthLink, sendLoginLink, sendVelogData } from '../../services/apis';

const VelogPage = () => {
  const [email, setEmail] = useState('');
  const [authLink, setAuthLink] = useState('');
  const [isSendEmail, setIsSendEmail] = useState(false);
  const navigate = useNavigate();

  const handleSendMail = async (e) => {
    e.preventDefault(); // 기본 동작 방지
    try {
      let response = await sendVelogData(email); // await 키워드 사용
      if (response.ok) {
        setIsSendEmail(true);
      } else {
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleConnection = async (e) => { 
    e.preventDefault(); // 기본 동작 방지
    try {
      let response = await sendLoginLink(authLink);
      if (response.ok) {
        console.log("success!")
      } else {
        console.error('Error sending authlink:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const links = [
    {
      to: "/home",
      label: "Home",
      onClick: (e) => {},
      style: {}
    }
  ];

  return (
    <styles.Container>
      <Header links={links}/>
        <styles.BodyContainer>
          <styles.BodyContentContainer>
            {!isSendEmail ? (
              <styles.FormContainer>
                <styles.FormTitle>Velog 계정 연동 메일 전송</styles.FormTitle>
                <styles.Input 
                  type="text" 
                  placeholder="Velog 이메일" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
                <styles.ButtonContainer>
                  <styles.Button onClick={handleSendMail}>계정 연동 이메일 보내기</styles.Button>
                </styles.ButtonContainer>
              </styles.FormContainer>
            ) : (
              <styles.FormContainer>
                <styles.FormTitle>Velog 계정 연동</styles.FormTitle>
                <styles.Input
                  type="text"
                  placeholder="링크"
                  value={authLink}
                  onChange={(e) => setAuthLink(e.target.value)}
                />
                <styles.ButtonContainer>
                  <styles.Button onClick={handleConnection}>계정 연동</styles.Button>
                </styles.ButtonContainer>
              </styles.FormContainer>
            )}
          </styles.BodyContentContainer>
        </styles.BodyContainer>
    </styles.Container>
  );
};

export default VelogPage;