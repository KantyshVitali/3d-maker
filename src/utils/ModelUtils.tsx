import { MeshProps, useFrame } from 'react-three-fiber';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import * as THREE from 'three';

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
  const [x, y, z] = position;
  const vec = useMemo(() => new THREE.Vector3(x, y, z), [position]);

  const mesh = useRef<MeshProps | null>(null);
  const [model, setModel] = useState<GLTF>();

  const onClickHandler = () => {
    canvasSettings.changeCurrentId(modelId);
  };

  useFrame(() => {
    if (mesh.current) {
      // @ts-ignore
      mesh.current.position.lerp(vec, 0.05);
    }
  });

  useEffect(() => {
    new GLTFLoader().load(modelPath, setModel);
  }, [modelPath]);

  return model?.scene ? (
    <primitive
      object={model.scene}
      ref={mesh}
      position={position}
      scale={[1, 1, 1].map(x => x * scale)}
      rotation={rotation}
      onClick={() => onClickHandler()}
    />
  ) : null;
});
