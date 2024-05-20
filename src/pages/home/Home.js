import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as styles from "./Home.styles";
import Header from "../../componets/Header/Header";

function Home() {
  const [issue, setIssue] = useState('');
  const [inference, setInference] = useState('');
  const [solution, setSolution] = useState('');
  const [result, setResult] = useState('');

  const { nickname } = useContext(AuthContext)

  const links = [
    {
      to: "/velog",
      label: "Velog 연동",
      style: { paddingRight: '20px'}
    },
    {
      to: "/login",
      label: "로그아웃",
      style: {}
    }
  ];


  const handleGenerate = () => {
    // 결과를 생성하는 로직 처리
    setResult('결과 값이 나옵니다.');
  };

  const handleReset = () => {
    setIssue('');
    setInference('');
    setSolution('');
    setResult('');
  };

  return (
    <styles.Container>
        <Header links = {links}/>
      <styles.BodyContainer>
        <styles.BodyContentContainer>
        <styles.BodyTitle>
            AudoDevLog
        </styles.BodyTitle>
        <styles.BodyText>
            { nickname } 님 안녕하세요 
            {'\n'} 오늘 하루 공부 한걸 작성해보세요
        </styles.BodyText>
        </styles.BodyContentContainer>
      </styles.BodyContainer>
      <styles.FormContainer>
        <styles.FormTitle>키워드</styles.FormTitle>
        <styles.FormText>키워드를 입력하세요</styles.FormText>
          <styles.FormTitle>ISSUE</styles.FormTitle>
          <styles.Input
            type="text"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
          <styles.FormTitle>INFERENCE</styles.FormTitle>
          <styles.Input
            type="text"
            value={inference}
            onChange={(e) => setInference(e.target.value)}
          />
          <styles.FormTitle>SOLUTION</styles.FormTitle>
          <styles.Input
            type="text"
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
          />
        <styles.ButtonContainer>
          <styles.Button onClick={handleGenerate}>생성하기</styles.Button>
        </styles.ButtonContainer>
        <styles.ResultBox>
        <styles.BodyText>{result}</styles.BodyText>
        </styles.ResultBox>
        <styles.ButtonContainer>
            <styles.Button onClick={handleReset}>다시 생성하기</styles.Button>
            <styles.Button style={{ marginLeft: "10px" }}>전송하기</styles.Button>
        </styles.ButtonContainer>
      </styles.FormContainer>
    </styles.Container>
  );
}

export default Home;
