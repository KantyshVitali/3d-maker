import { makeAutoObservable } from 'mobx';
import { Model, ModelInfo } from './storeInterfaces';
import { nanoid } from 'nanoid';

class SettingBar {
  models: Model[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setScale(modelId: string, scale: number) {
    const model = this.models.find(model => model.modelId === modelId);
    if (model) model.modelInfo.scale = scale;
  }

  addModel(modelInfo: ModelInfo) {
    this.models.push({ modelId: nanoid(), modelInfo });
  }

  deleteModel(modelId: string) {
    this.models = this.models.filter(x => x.modelId !== modelId);
  }

  changeRotationX(modelId: string, rotationX: number, index: number) {
    const model = this.models.find(model => model.modelId === modelId);
    if (model) model.modelInfo.rotation[index] = rotationX;
  }
  changePositionX(modelId: string, rotationX: number, index: number) {
    const model = this.models.find(model => model.modelId === modelId);
    if (model) model.modelInfo.position[index] = rotationX;
  }
}

export default new SettingBar();
