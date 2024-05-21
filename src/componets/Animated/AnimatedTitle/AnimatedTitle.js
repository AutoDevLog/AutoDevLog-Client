import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import * as styles from './AnimatedTitle.styles';

const AnimatedTitle = ({ title, style, trigger }) => {
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(title);
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
  }, [trigger, title]);

  return (
    <styles.AnimatedTitle id={title} style={{ ...animationProps, ...style }}>
      {title}
    </styles.AnimatedTitle>
  );
};

export default AnimatedTitle;