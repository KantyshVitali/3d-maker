import React from 'react';
import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import settingBar from '../../../store/SettingBar';

import './AddNewModel.scss';

const AddNewModel = observer(() => {
  function addModel(
    path: string,
    rotation: [x: number, y: number, z: number] = [0, 0, 0],
    scale: number = 1,
    position: [x: number, y: number, z: number] = [0, 0, 0]
  ) {
    settingBar.addModel({ path, rotation, scale, position });
  }

  return (
    <div className="new-models">
      <Button
        variant="outlined"
        onClick={() => addModel('./models/wooden-sofa/source/Wooden_Sofa/substance_file.glb')}
      >
        Add Sofa model
      </Button>
      <Button variant="outlined" onClick={() => addModel('./models/arwing.glb')}>
        Add plane model
      </Button>
    </div>
  );
});

export default AddNewModel;
