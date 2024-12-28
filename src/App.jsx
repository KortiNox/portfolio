import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { Experience } from './components/Experience';
import { Interface } from './components/Interface';
import { ScrollManager } from './components/ScrollManager';
import { Menu } from './components/Menu';
import { MotionConfig } from 'framer-motion';
import { Leva } from 'leva';
import { useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <MotionConfig
        transition={{ type: 'spring', mass: 5, stiffness: 550, damping: 50, restDelta: 0.0001 }}
      >
        <Canvas shadows camera={{ position: [0, 3, 10], fov: 40 }}>
          <color attach="background" args={['#f0bb3f']} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
