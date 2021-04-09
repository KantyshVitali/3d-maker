import { Grid, Typography, Slider } from '@material-ui/core';
import React from 'react';
import { observer } from 'mobx-react-lite';
import settingBar from '../store/SettingBar';

interface BigSliderProps {
  modelId: string;
  rotationX: number;
  index: number;

  label?: string;
  min: number;
  max: number;
}

interface ScaleSliderProps {
  modelId: string;
  scale: number;

  label?: string;
  min: number;
  max: number;
}

interface SliderProps {
  label?: string;
  min: number;
  max: number;
  value: number;
  handleChange: (_event: object, value: number | number[]) => void;
}

const SliderContainer = observer((props: SliderProps) => {
  const { label, max, min, handleChange, value } = props;
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {label ? (
          <Grid item>
            <Typography>{label}</Typography>
          </Grid>
        ) : null}
        <Grid item xs>
          <Slider
            step={0.1}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <div className="object-maker__controller-value">
            <div className="value">{value}</div>
          </div>
        </Grid>
      </Grid>
    </>
  );
});

const PositionSliderContainer = observer((props: BigSliderProps) => {
  const { label, max, min, index, rotationX, modelId } = props;

  const handleSliderChange = (_event: object, value: number | number[]) => {
    if (typeof value === 'number') settingBar.changePositionX(modelId, value, index);
  };

  return (
    <SliderContainer
      max={max}
      value={rotationX}
      min={min}
      label={label}
      handleChange={handleSliderChange}
    />
  );
});

const RotationSliderContainer = observer((props: BigSliderProps) => {
  const { label, max, min, index, rotationX, modelId } = props;

  const handleSliderChange = (_event: object, value: number | number[]) => {
    if (typeof value === 'number') settingBar.changeRotationX(modelId, value, index);
  };

  return (
    <SliderContainer
      max={max}
      value={rotationX}
      min={min}
      label={label}
      handleChange={handleSliderChange}
    />
  );
});

const ScaleSliderContainer = observer((props: ScaleSliderProps) => {
  const { label, max, min, modelId, scale } = props;

  const handleSliderChange = (_event: object, value: number | number[]) => {
    if (typeof value === 'number') settingBar.setScale(modelId, value);
  };

  return (
    <SliderContainer
      max={max}
      value={scale}
      min={min}
      label={label}
      handleChange={handleSliderChange}
    />
  );
});

export { PositionSliderContainer, RotationSliderContainer, ScaleSliderContainer };
