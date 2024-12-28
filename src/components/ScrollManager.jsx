import { useScroll } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  const isMobileVer = window.innerWidth < 768;

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: isMobileVer
        ? section * window.innerHeight + section
        : section * data.el.clientHeight * 1.25,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, isMobileVer]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(0);
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};
