import { Typography } from '@material-ui/core';
import canvasSettings from '../../../../store/CanvasSettings';
import React from 'react';
import { observer } from 'mobx-react-lite';

import './CanvasController.scss';

const CanvasController = observer(() => {
  return (
    <>
      <div className="object-maker__controller-color">
        <Typography gutterBottom>Color</Typography>
        <input
          type="color"
          onChange={e => {
            canvasSettings.changeColor(e.target.value);
          }}
          value={canvasSettings.color}
        />
      </div>
    </>
  );
});

export default CanvasController;
