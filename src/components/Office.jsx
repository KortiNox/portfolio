import { useGLTF, Html, useTexture } from '@react-three/drei';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Office(props) {
  const group = useRef();
  const texture = useTexture('textures/mouse.jpg'); // Новая текстура

  const texture3 = useTexture('textures/stenaV12.jpg'); // Новая текстура2
  const { scene, isLoading, materials } = useGLTF('models/Office.glb');
  texture.flipY = false;

  const [loading, setLoading] = useState(isLoading);

  // Заменяем текстуру после загрузки модели
  useEffect(() => {
    if (!loading) {
      // Предположим, что материал, который вы хотите изменить, называется 'ComputerMouse_mat1'
      // Замените 'ComputerMouse_mat1' на фактическое имя материала в вашей модели
      const mouseMaterial = materials['ComputerMouse_mat1']; // Замените на имя вашего материала
      const mouseMaterial2 = materials['BlackWood'];
      const mouseMaterial3 = materials['floor'];

      if (mouseMaterial) {
        mouseMaterial.map = texture; // Заменяем текстуру
        mouseMaterial.needsUpdate = true; // Уведомляем Three.js о том, что материал обновился
      }
      if (mouseMaterial2) {
        mouseMaterial2.map = texture; // Заменяем текстуру
        mouseMaterial2.needsUpdate = true; // Уведомляем Three.js о том, что материал обновился
      }
      if (mouseMaterial3) {
        mouseMaterial3.map = texture3; // Заменяем текстуру
        mouseMaterial3.needsUpdate = true; // Уведомляем Three.js о том, что материал обновился
      }
    }
  }, [loading, materials, texture]);

  if (loading) {
    return (
      <Html center>
        <div className="loader">Загрузка...</div>
      </Html>
    );
  }

  return <primitive object={scene} ref={group} {...props} />;
}
