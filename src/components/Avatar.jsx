import { useGLTF, Html, useFBX, useAnimations } from '@react-three/drei';
import { useState, useEffect, useRef } from 'react';
import { useControls } from 'leva';

export default function Avatar(props) {
  const { animation } = props;
  const { wireframe } = useControls({ wireframe: false });
  const group = useRef();
  const { scene, isLoading, nodes, materials } = useGLTF('models/2.glb');

  const { animations: typingAnimations } = useFBX('animations/Typing.fbx');

  let typingAnimation;

  if (typingAnimations && typingAnimations.length > 0) {
    typingAnimation = typingAnimations[0];
    typingAnimation.name = 'Typing';
  }

  const animationsArray = [typingAnimation].filter(Boolean);
  const { actions } = useAnimations(animationsArray, group);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    console.log('Loaded animations:', animationsArray); // Для проверки анимаций

    if (!isLoading) {
      setLoading(false);

      // Использование onFinished для управления анимациями поочередно
      if (actions[animation]) {
        const currentAction = actions[animation];
        // Обработка завершения предыдущей анимации перед началом новой
        Object.values(actions).forEach((action) => {
          if (action !== currentAction) {
            action.stop();
          }
        });

        currentAction.reset().fadeIn(0.5).play();
      }
    }
  }, [isLoading, actions, animation]);

  if (loading) {
    return (
      <Html center>
        <div className="loader">Загрузка...</div>
      </Html>
    );
  }

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);

  return <primitive object={scene} ref={group} {...props} />;
}
