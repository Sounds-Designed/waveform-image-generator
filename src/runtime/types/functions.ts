export type GetAudioData = (url: string) => Promise<AudioBuffer>

export type AudioBufferToCoordinatesConverter =  (
  snapshot: Float32Array<ArrayBuffer>,
  samples: number,
  blockSize: number
) => number[]

export type GetSnapshotDataOptions = {
  animation: boolean;
  channel: number;
  frames: number;
};

export type LinearPathGenerator =  (
  audioBuffer: Float32Array<ArrayBuffer>,
  options: Partial<GenerateLinearPathOptions>
) => number[]

export type GenerateLinearPathOptions = {
  channel: number;
  samples: number;
  height: number;
  width: number;
  top: number;
  left: number;
  type: "bars" | "mirror" | "steps";
  svgPaths: object[];
  animation: boolean;
  frames: number;
  normalize: boolean;
};
