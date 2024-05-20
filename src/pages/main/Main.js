import React, { useState } from "react";
import * as styles from "./Main.styles";
import Header from "../../componets/Header/Header";
import AnimatedTitle from "../../componets/Animated/AnimatedTitle/AnimatedTitle";
import AnimatedRoundBox from "../../componets/Animated/AnimatedRoundBox/AnimatedRoundBox";
function Main() {
  const [title1, setTitle1] = useState('UPLOAD WHAT YOU STUDY\nWITH GENAI');
  const [title2, setTitle2] = useState('What is AutoDevLog');
  const [title3, setTitle3] = useState('START AUTODEVLOG!')
  /* Header Props */
  const links = [
    {
      to: "/login",
      label: "로그인",
      style: {}
    }
  ];

  const handleClick =() => {
    console.log("clicked!")
  };

  return (
    <styles.Container>
      <Header links={links}/>
      <styles.BodyContainer>
        <AnimatedTitle title={title1} style={{ padding: "1em", fontSize: "5em" }} trigger={false} />
      </styles.BodyContainer>
      <AnimatedTitle title={title2} style = {{ paddingTop: "1em", fontSize: "3em" }} trigger={true} />
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
        <AnimatedTitle title={title3} style = {{ paddingTop: "1em", fontSize: "3em"}} trigger = {true} />
          <AnimatedRoundBox onclick= {handleClick} trigger = {true} style = {{ backgroundColor: "white", marginBottom : "5em", textAlign : "center"}}>
            <styles.BoxTitle style = {{marginTop : "3px"}}>Register</styles.BoxTitle>
          </AnimatedRoundBox>
      </styles.BodyContainer>
      
    </styles.Container>
  );
}

export default Main;