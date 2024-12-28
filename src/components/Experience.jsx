import Office from './Office';
import { motion } from 'framer-motion-3d';
import Avatar from './Avatar';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { animate, useMotionValue } from 'framer-motion';

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width;

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  const avatarX = useMotionValue(1.8);
  const avatarY = useMotionValue(0.1);
  const avatarRotationY = useMotionValue(Math.PI / 3);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 550,
      damping: 50,
      restDelta: 0.0001,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      type: 'spring',
      mass: 5,
      stiffness: 550,
      damping: 50,
      restDelta: 0.0001,
    });

    animate(avatarX, menuOpened ? 44 : section === 1 ? -3 : isMobile ? 0.5 : 2, {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    });
    animate(avatarY, menuOpened ? 1 : section === 1 ? -viewport.height : isMobile ? -0.5 : 0.15, {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut',
    });

    animate(avatarRotationY, menuOpened ? Math.PI * 2 : Math.PI / 3, {
      duration: 0.5,
      type: 'tween',
    });
  }, [menuOpened, section, viewport.height, isMobile]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const getAvatarAnimation = () => {
    if (menuOpened) {
      return 'Standing';
    } else {
      return section === 0 ? 'Typing' : 'Standing';
    }
  };

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 5, 0]} intensity={5} decay={2} distance={10} color="white" />
      <pointLight position={[-5, 5, 5]} intensity={36.5} decay={1} distance={10} color="orange" />

      <motion.group
        position={isMobile ? [0, 2, 3] : [1.5, 2, 3]}
        scale={isMobile ? [0.5, 0.5, 0.5] : [0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 8}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>
      {!menuOpened && section === 0 && (
        <motion.group
          scale={isMobile ? [0.4, 0.4, 0.4] : [0.7, 0.7, 0.7]}
          position={isMobile ? [0.3, 0.1, 3.3] : [avatarX, avatarY, 3.3]}
          rotation-y={avatarRotationY}
        >
          <Avatar animation={getAvatarAnimation()} />
        </motion.group>
      )}
    </>
  );
};
