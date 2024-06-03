import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Header from "../../componets/Header/Header";
import { useNavigate } from 'react-router-dom';
import * as styles from './VelogPage.styles';
import { sendVelogData } from '../../services/apis';

const VelogPage = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate();

  const handleConnection = (e) => {
    let response = sendVelogData(email)
    //console.log(response)
    let checkEmail = response
  };
  const links = [
    {
      to: "/home",
      label: "Home",
      onClick: (e) => {
      },
      style: {
      }
    }
  ];

  const checkEmail = (data) => {
    if(email === data){
        console.log("same")
    }
  }

  return (
    <styles.Container>
      <Header links={links}/>
        <styles.BodyContainer>
          <styles.BodyContentContainer>
            <styles.FormContainer>
              <styles.FormTitle>Velog 계정 연동</styles.FormTitle>
              <styles.Input 
                type="text" 
                placeholder="Velog 이메일" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <styles.ButtonContainer>
                <styles.Button onClick = {handleConnection}>계정 연동 이메일 보내기</styles.Button>
              </styles.ButtonContainer>
            </styles.FormContainer>
          </styles.BodyContentContainer>
        </styles.BodyContainer>
    </styles.Container>
  );
};

export default VelogPage;
