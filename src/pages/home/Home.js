import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as styles from "./Home.styles";
import Header from "../../componets/Header/Header";
import { sendGptRequestData, gptFormatData, postVelog, initGptRequestFormat, initVelogPostFormat } from "../../services/apis"

function Home() {
  const [issue, setIssue] = useState('');
  const [inference, setInference] = useState('');
  const [solution, setSolution] = useState('');
  const [result, setResult] = useState('');
  const [token, setToken] = useState('');
  const [title, setTitle] = useState('');

  const links = [
    {
      to: "/velog",
      label: "Velog 연동",
      style: { margin: "0 8px 0 0"}
    },
    {
      to: "/",
      label: "로그아웃",
      style: {}
    }
  ];


  const handleGenerate = async () => {
    //console.log(issue);
    //console.log(inference);
    //console.log(solution);
    const response = await sendGptRequestData(initGptRequestFormat(issue,inference,solution));
    setResult(response);
  };

  const handleReset = () => {
    setIssue('');
    setInference('');
    setSolution('');
    setResult('');
  };

  const hanldeSend = async () => {
    setTitle('Test')
    const response = await postVelog(initVelogPostFormat(title,result,token))

  }

  return (
    <styles.Container>
        <Header links = {links}/>
      <styles.FormContainer>
        <styles.FormRowContainer>
          <styles.FormColumnContainer>
            <styles.FormTitle>오늘 하루 정리한 내용을 작성하세요.</styles.FormTitle>
            <styles.FormText>키워드를 기반으로 생성형 AI가 글을 작성해줍니다.</styles.FormText>
            <styles.FormTitle>ISSUE (발생한 이슈)</styles.FormTitle>
            <styles.Input
              type="text"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
            <styles.FormTitle>INFERENCE (해결 추론 과정) </styles.FormTitle>
            <styles.Input
              type="text"
              value={inference}
              onChange={(e) => setInference(e.target.value)}
            />
            <styles.FormTitle>SOLUTION (해결 방법) </styles.FormTitle>
            <styles.Input
              type="text"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />
            <styles.ButtonContainer>
            <styles.Button onClick={handleGenerate}>생성하기</styles.Button>
            </styles.ButtonContainer>
          </styles.FormColumnContainer>
          <styles.FormColumnContainer>
            <styles.FormTitle> 작성된 결과 </styles.FormTitle>
            <styles.ResultBox>
            <styles.ResultText>{result}</styles.ResultText>
            </styles.ResultBox>
            <styles.ButtonContainer>
              <styles.Button onClick={handleReset}>다시 생성하기</styles.Button>
              <styles.Button onClick={handleGenerate} style={{ marginLeft: "10px" }}>전송하기</styles.Button>
            </styles.ButtonContainer>
          </styles.FormColumnContainer>
        </styles.FormRowContainer>
      </styles.FormContainer>
    </styles.Container>
  );
}

export default Home;
