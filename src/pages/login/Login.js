import React, { useState,  } from 'react';
import Header from '../../componets/Header/Header';

import * as styles from './Login.styles';


const Login = () => {


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
        </styles.BodyContentContainer>
      </styles.BodyContainer>
      <styles.FooterContainer>
        footer
      </styles.FooterContainer>
    </styles.Container>
  );
};

export default Login;
