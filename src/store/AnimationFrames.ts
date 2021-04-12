import { makeAutoObservable } from 'mobx';
import { Model, ModelInfo } from './storeInterfaces';

class AnimationFrames {
  frames: Array<Model[]> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFrame(frame: Model[]) {
    this.frames.push(frame);
  }
}

export default new AnimationFrames();
