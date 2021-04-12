import React, { useState } from 'react';
import './Scene.scss';
import { observer } from 'mobx-react-lite';

import Controllers from '../Controllers';
import AddNewModel from '../AddNewModel';

import CanvasComponent from '../CanvasComponent';
import CreateAnimation from '../CreateAnimation';
import { Button } from '@material-ui/core';

const Scene = observer(() => {
  return (
    <div className="object-maker">
      <div className="object-maker__controller-container">
        <AddNewModel />
        <Controllers />
        <CreateAnimation />
      </div>

      <div className="object-maker__canvas">
        <div className="canvas">
          <CanvasComponent />
        </div>
      </div>
    </div>
  );
});

export default Scene;
