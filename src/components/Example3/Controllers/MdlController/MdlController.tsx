import React, { useMemo } from 'react';

import './MdlController.scss';
import { observer } from 'mobx-react-lite';

import {
  RotationSliderContainer,
  PositionSliderContainer,
  ScaleSliderContainer,
} from '../../../../utils/Slider';

import settingBar from '../../../../store/SettingBar';
import { Button, Typography } from '@material-ui/core';
import MdlControllerProps from './MdlControllerProps';

const MdlController = observer((props: MdlControllerProps) => {
  const { modelId } = props;
  const model = useMemo(() => {
    return settingBar.models.find(model => model.modelId === modelId);
  }, [modelId]);

  return model ? (
    <>
      <div className="object-maker__controller-size">
        <Typography>Size</Typography>
        <ScaleSliderContainer scale={model.modelInfo.scale} modelId={modelId} min={0} max={20} />
      </div>
      <div className="object-maker__controller-position_container">
        <Typography>Position</Typography>
        <PositionSliderContainer
          modelId={modelId}
          index={0}
          rotationX={model.modelInfo.position[0]}
          min={-100}
          max={100}
          label="X"
        />
        <PositionSliderContainer
          modelId={modelId}
          index={1}
          rotationX={model.modelInfo.position[1]}
          min={-100}
          max={100}
          label="Y"
        />
        <PositionSliderContainer
          modelId={modelId}
          index={2}
          rotationX={model.modelInfo.position[2]}
          min={-100}
          max={100}
          label="Z"
        />
      </div>
      <div className="object-maker__controller-position_container">
        <Typography>Rotation</Typography>
        <RotationSliderContainer
          modelId={modelId}
          index={0}
          rotationX={model.modelInfo.rotation[0]}
          min={-5}
          max={5}
          label="X"
        />
        <RotationSliderContainer
          modelId={modelId}
          index={1}
          rotationX={model.modelInfo.rotation[1]}
          min={-5}
          max={5}
          label="Y"
        />
        <RotationSliderContainer
          modelId={modelId}
          index={2}
          rotationX={model.modelInfo.rotation[2]}
          min={-5}
          max={5}
          label="Z"
        />
      </div>
      <div className="delete-model">
        <Button variant="outlined" color="secondary" onClick={() => {
          settingBar.deleteModel(modelId);
        }}>
          Delete model
        </Button>
      </div>
    </>
  ) : null;
});

export default MdlController;
