import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as styles from './AnimatedRoundBox.styles';

const AnimatedRoundBox = ({ children, trigger, style, onclick}) => {
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
    opacity: isVisible ? 1 : 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('roundBox');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    if (trigger) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsVisible(true);
    }
  }, [trigger]);

  return (
    <styles.RoundBox id="roundBox" style={{ ...animationProps, ...style }} onClick = {onclick}>
      {children}
    </styles.RoundBox>
  );
};

export default AnimatedRoundBox;