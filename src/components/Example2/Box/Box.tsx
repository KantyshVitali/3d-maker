import { observer } from 'mobx-react-lite';
import React from 'react';

const Box = observer(() => (
  <mesh>
    <boxGeometry attach="geometry" args={[3, 2, 1]} />
    <meshPhongMaterial attach="material" color="hotpink" />
  </mesh>
));

export default Box;
