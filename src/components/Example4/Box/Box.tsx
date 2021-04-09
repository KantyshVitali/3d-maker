import React, { Suspense } from 'react';
import { useLoader, Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CameraController from '../../../utils/ControllerUtils';

function Duck() {
  const gltf = useLoader(GLTFLoader, './models/arwing.glb');
  return gltf.scene ? <primitive object={gltf.scene} position={[0, 0, 0]} /> : null;
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense fallback={<Box />}>
          <Duck />
        </Suspense>
      </Canvas>
    </div>
  );
}
