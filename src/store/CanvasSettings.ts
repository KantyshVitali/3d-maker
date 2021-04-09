import { makeAutoObservable } from 'mobx';

class CanvasSettings {
  color: string = '#ffffff';
  currentId: string = '';
  constructor() {
    makeAutoObservable(this);
  }

  changeColor(color: string) {
    this.color = color;
  }

  changeCurrentId(id: string) {
    this.currentId = id;
  }
}

export default new CanvasSettings();
