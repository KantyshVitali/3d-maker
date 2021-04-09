import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import BoxProps from './boxProps';

const Box = (props: BoxProps) => {
  const mesh = useRef<MeshProps | null>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.rotation.x = mesh.current.rotation.y += props.speed;
    }
  });

  return (
    <mesh
      position={props.position}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={props.geometry} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};
export default Box;
