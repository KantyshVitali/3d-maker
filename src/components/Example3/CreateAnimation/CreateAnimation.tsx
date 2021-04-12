import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import './CreateAnimation.scss';
import { Button, Typography } from '@material-ui/core';
import animationFrames from '../../../store/AnimationFrames';
import settingBar from '../../../store/SettingBar';

const CreateAnimation = observer(() => {
  const [active, setActive] = useState(false);
  const [activeFrame, setActiveFrame] = useState(1);

  const createFirstFrame = () => {
    setActive(!active);
    animationFrames.addFrame(settingBar.models);
  }

  const createFrame = () => {

  }

  const switchFrame = (frameNumber: number) => {

    setActiveFrame(frameNumber);
  }

  if (!active)
    return (
      <div className="animation-creator-button">
        <Button variant="contained" color="secondary" onClick={createFirstFrame}>
          Create Animation
        </Button>
      </div>
    );

  return (
    <div className="animation-creator">
      <div className="animation-creator__subtitle">
        <Typography align="center" variant="h5" >Create Animation</Typography>
      </div>
      <Button variant="outlined" color="primary">play</Button>
      <div className="frames">
        {animationFrames.frames.map(() => {

        })}
        <Button
          size="large"
          variant="contained"
          color={activeFrame === 1 ? "primary" : "default"}
          onClick={() => switchFrame(1)}
        >
          <span className="font-big">1</span>
        </Button>
        <Button
          size="large"
          variant="contained"
          color={activeFrame === 2 ? "primary" : "default"}
          onClick={() => switchFrame(2)}
        >
          <span className="font-big">2</span>
        </Button>
        <Button onClick={() => createFrame()} ><span className="font-big">+</span></Button>
      </div>
      <Button variant="contained" color="secondary" onClick={() => setActive(!active)}>
        Delete Animation
      </Button>
    </div>
  );
});

export default CreateAnimation;
