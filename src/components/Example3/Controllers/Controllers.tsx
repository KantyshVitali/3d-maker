import React from 'react';

import { observer } from 'mobx-react-lite';

import canvasSettings from '../../../store/CanvasSettings';
import MdlController from './MdlController';

import CanvasController from './CanvasController';
import { Typography } from '@material-ui/core';

const Controller = observer(() => {
  return (
    <>
      <CanvasController />
      {canvasSettings.currentId ? (
        <MdlController modelId={canvasSettings.currentId} />
      ) : (
        <Typography>choice an object</Typography>
      )}
    </>
  );
});

export default Controller;
