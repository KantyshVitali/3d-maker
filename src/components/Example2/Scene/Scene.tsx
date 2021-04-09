import React from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

import Box from '../Box';
import CameraController from '../../../utils/ControllerUtils';

import './Scene.scss';

const Scene = () => (
  <div className="scene">
    <Canvas>
      <CameraController />
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <primitive object={new THREE.AxesHelper(10)} />
      <Box />
    </Canvas>
  </div>
);
export default Scene;
