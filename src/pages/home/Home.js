import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as styles from "./Home.styles";
import Header from "../../componets/Header/Header";
import { sendGptRequestData, postVelog, initGptRequestFormat, initVelogPostFormat, postVelogServerUpload } from "../../services/apis";
import styled, { keyframes } from 'styled-components';
import ReactMarkdown from "react-markdown";
import Modal from 'react-modal';
import { BeatLoader } from "react-spinners";

// 애니메이션 정의
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 애니메이션이 적용된 컨테이너
const AnimatedContainer = styled.div`
  animation: ${fadeInUp} 0.7s ease-out;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  }
};

Modal.setAppElement('#root');

function addSpaceAfterHash(input) {
  return input.replace(/#/g, '# ');
}

function Home() {
  const [issue, setIssue] = useState('');
  const [inference, setInference] = useState('');
  const [solution, setSolution] = useState('');
  const [result, setResult] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const [sendloading, setSendLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const links = [
    {
      to: "/velog",
      label: "Velog 연동",
      style: { margin: "0 8px 0 0" }
    },
    {
      to: "/",
      label: "로그아웃",
      style: {}
    }
  ];

  const handleGenerate = async () => {
    setLoading(true);
    const response = await sendGptRequestData(initGptRequestFormat(issue, inference, solution));
    setResult(addSpaceAfterHash(response));
    setLoading(false);
  };

  const handleReGeneration = async () => {
    setLoading(true);
    const response = await sendGptRequestData(initGptRequestFormat(issue, inference, solution));
    setResult(addSpaceAfterHash(response));
    setLoading(false);
  };

  const handleSend = async () => {
    //console.log(result);
    setSendLoading(true);
    await postVelog(initVelogPostFormat(title, result));
    setLoading(false);
    setCompleted(true);
  };

  const handleReset = () => {
    // 상태 초기화 로직
    setIssue('');
    setInference('');
    setSolution('');
    setTitle('');
    setResult('');
    setSendLoading(false);
    setCompleted(false);
  };

  return (
    <styles.Container>
      <Header links={links} />
      <AnimatedContainer>
        <styles.FormContainer>
          <styles.FormRowContainer>
            <styles.FormColumnContainer>
              <styles.FormTitle>오늘 하루 정리한 내용을 작성하세요.</styles.FormTitle>
              <styles.FormText>키워드를 기반으로 생성형 AI가 글을 작성해줍니다.</styles.FormText>
              {(!issue || !inference || !solution) && (
                <styles.WarningText style={{ margin: "10px 0" }}>모든 필드를 채워주세요</styles.WarningText>
              )}
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

                <styles.Button
                  onClick={handleGenerate}
                  disabled={!issue || !inference || !solution}
                >
                  생성하기
                </styles.Button>

              </styles.ButtonContainer>
            </styles.FormColumnContainer>
            <styles.FormColumnContainer>
              <styles.FormTitle> 글 제목 </styles.FormTitle>
              {(!title || !result) && (
                <styles.WarningText>제목을 입력주세요</styles.WarningText>
              )}
              <styles.Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
              <styles.FormTitle> 작성된 결과 </styles.FormTitle>
              <styles.ResultBox>
                <styles.ResultText>
                  <ReactMarkdown>
                    {result}
                  </ReactMarkdown>
                </styles.ResultText>
              </styles.ResultBox>
              <styles.ButtonContainer>
                <styles.Button onClick={handleReGeneration}>다시 생성하기</styles.Button>
                <styles.Button onClick={handleSend} style={{ marginLeft: "10px" }}>전송하기</styles.Button>
              </styles.ButtonContainer>
            </styles.FormColumnContainer>
          </styles.FormRowContainer>
        </styles.FormContainer>
      </AnimatedContainer>

      <Modal
        isOpen={loading}
        onRequestClose={() => setLoading(false)}
        style={customStyles}
        contentLabel="Loading Modal"
      >
        <styles.ModalContent>
          <styles.ModalTitle>생성형 AI 작성 중</styles.ModalTitle>
          <styles.ModalText>잠시만 기다려주세요</styles.ModalText>
          <BeatLoader color="#FFFFFF" loading={loading} size={15} margin={2} />
        </styles.ModalContent>
      </Modal>

      <Modal
        isOpen={sendloading}
        onRequestClose={() => setSendLoading(false)}
        style={customStyles}
        contentLabel="SendLoading Modal"
      >
        <styles.ModalContent>
          <styles.ModalTitle>Velog 업로드 중</styles.ModalTitle>
          <styles.ModalText>잠시만 기다려주세요</styles.ModalText>
          <BeatLoader color="#FFFFFF" loading={loading} size={15} margin={2} />
        </styles.ModalContent>
      </Modal>

      <Modal
        isOpen={completed}
        onRequestClose={() => setCompleted(false)}
        style={customStyles}
        contentLabel="Completed Modal"
      >
        <styles.ModalContent>
          <styles.ModalTitle>작성 완료</styles.ModalTitle>
          <styles.ModalText>작성된 글을 Velog업로드를 완료하였습니다.</styles.ModalText>
          <Link to="/Home">
            <styles.Button onClick = {handleReset}>다시 작성하기</styles.Button>
          </Link>
        </styles.ModalContent>
      </Modal>
    </styles.Container>
  );
}

export default Home;