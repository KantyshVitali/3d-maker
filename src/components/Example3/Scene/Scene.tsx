import React from 'react';
import './Scene.scss';
import { observer } from 'mobx-react-lite';

import Controllers from '../Controllers';
import AddNewModel from '../AddNewModel';

import CanvasComponent from '../CanvasComponent';

const Scene = observer(() => {
  return (
    <div className="object-maker">
      <div className="object-maker__controller-container">
        <AddNewModel />
        <Controllers />
      </div>

      <div className="object-maker__canvas">
        <CanvasComponent />
      </div>
    </div>
  );
});

export default Scene;
