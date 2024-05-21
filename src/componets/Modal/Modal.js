import React, { useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import * as styles from './Modal.styles';

const Modal = ({ isOpen, onClose, children }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSecondInput, setShowSecondInput] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(null);

  const secondInputProps = useSpring({
    opacity: showSecondInput ? 1 : 0,
    transform: showSecondInput ? 'translateY(0)' : 'translateY(-20px)',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup to set overflow back to auto when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      setPassword('');
      setConfirmPassword('');
      setShowSecondInput(false);
      setPasswordMatch(null);
    };
  }, [isOpen]);

  const handleIdChange = (e) => {
    setId(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowSecondInput(e.target.value.length > 0);
    
    /* 첫번째 비밀번호를 전부 삭제한 경우 초기화 진행 */
    if(e.target.value === ''){
      setShowSecondInput(false);
      setConfirmPassword('')
      setPasswordMatch(null);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordMatch(password === value);
  };

  const handleIdCheck = () =>{
    if (id === 'taken') {
      alert('ID is already taken');
    } else {
      alert('ID is available');
    }
  }

  if (!isOpen) return null;

  return (
    <styles.ModalOverlay onClick={onClose}>
      <styles.ModalContent onClick={e => e.stopPropagation()}>
        <styles.CloseButton onClick={onClose}>X</styles.CloseButton>
        <styles.ModalTitle>Register</styles.ModalTitle>
        <styles.ModalTitle2>ID</styles.ModalTitle2>
        <styles.InputWrapper>
          <styles.Input 
            placeholder='ID'
            value={id}
            onChange={handleIdChange}
          />
          <styles.CheckButton>중복확인</styles.CheckButton>
        </styles.InputWrapper>
        

        <styles.ModalTitle2>Passwords</styles.ModalTitle2>
        {showSecondInput === true && passwordMatch !== null && (
          <styles.ModalText match={passwordMatch}>
            {passwordMatch ? 'Passwords match' : 'Passwords do not match'}
          </styles.ModalText>
        )}
        <styles.Input
          type="password"
          placeholder='passwords'
          value={password}
          onChange={handlePasswordChange}
        />
        {showSecondInput && (
          <styles.AnimatedInput
            style={secondInputProps}
            type="password"
            placeholder="comfirm passwords"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        )}
      </styles.ModalContent>
    </styles.ModalOverlay>
  );
};

export default Modal;