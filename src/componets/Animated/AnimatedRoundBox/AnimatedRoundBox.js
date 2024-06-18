import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import * as styles from './AnimatedRoundBox.styles';

const AnimatedRoundBox = ({ children, trigger, style, onClick, alignLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const animationPropsRight = useSpring({
    transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
    opacity: isVisible ? 1 : 0,
  });

  const animationPropsLeft = useSpring({
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    opacity: isVisible ? 1 : 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <styles.RoundBox
      ref={ref}
      style={{ ...style, ...(alignLeft ? animationPropsLeft : animationPropsRight) }}
      onClick={onClick}
      alignLeft={alignLeft}
    >
      {children}
    </styles.RoundBox>
  );
};

export default AnimatedRoundBox;