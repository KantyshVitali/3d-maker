import React from 'react';

export default interface controllerProps {
  setPosition: React.Dispatch<React.SetStateAction<[x: number, y: number, z: number]>>;
  scenePosition: [x: number, y: number, z: number];
}
