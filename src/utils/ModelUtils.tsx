import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from 'react';
import { observer } from 'mobx-react-lite';

import canvasSettings from '../store/CanvasSettings';

export interface IModel {
  modelPath: string;
  position: [x: number, y: number, z: number];
  scale: number;
  rotation: [x: number, y: number, z: number];
  modelId: string;
}

export const Model = observer((props: IModel) => {
  const { modelPath, position, scale, rotation, modelId } = props;
  const gltf = useLoader(GLTFLoader, modelPath);

  const onClickHandler = () => {
    canvasSettings.changeCurrentId(modelId);
  };

  return gltf.scene ? (
    <primitive
      object={gltf.scene}
      position={position}
      scale={[1, 1, 1].map(x => x * scale)}
      rotation={rotation}
      onClick={() => onClickHandler()}
    />
  ) : null;
});
