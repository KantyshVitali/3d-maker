interface ModelInfo {
  path: string;
  position: [x: number, y: number, z: number];
  rotation: [x: number, y: number, z: number];
  scale: number;
}

interface Model {
  modelId: string;
  modelInfo: ModelInfo;
}

export type { Model, ModelInfo };
