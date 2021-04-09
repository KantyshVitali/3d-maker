import React from 'react';
import { Canvas } from 'react-three-fiber';

import Box from '../Box';

import SceneProps from './SceneProps';

const Scene = (props: SceneProps) => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[15, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Box {...props} />
  </Canvas>
);

export default Scene;
