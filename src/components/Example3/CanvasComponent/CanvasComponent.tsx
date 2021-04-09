import React, { Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import canvasSettings from '../../../store/CanvasSettings';
import CameraController from '../../../utils/ControllerUtils';
import settingBar from '../../../store/SettingBar';
import Box from '../Box';
import { Model } from '../../../utils/ModelUtils';
import { Canvas } from 'react-three-fiber';

const CanvasComponent = observer(() => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      {/*@ts-ignore*/}
      <color attach="background" args={[canvasSettings.color]} />
      <CameraController />
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.8} position={[300, 300, 400]} />
      {settingBar.models.map(model => {
        const [posX, posY, posZ] = model.modelInfo.position;
        const [rotX, rotY, rotZ] = model.modelInfo.rotation;
        return (
          <Suspense key={model.modelId} fallback={<Box />}>
            <Model
              position={[posX, posY, posZ]}
              scale={model.modelInfo.scale}
              modelPath={model.modelInfo.path}
              rotation={[rotX, rotY, rotZ]}
              modelId={model.modelId}
            />
          </Suspense>
        );
      })}
    </Canvas>
  );
});

export default CanvasComponent;
