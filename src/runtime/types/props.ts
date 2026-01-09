export type SVGModifierProps = {
  stroke?: string,
  strokeWidth?: number;
  fill?: string
}

export type BasePathComponentProps = {
  animation?: boolean;
  audioBuffer: AudioBuffer | null;
  channel?: number;
  frames?: number;
  normalize?: boolean;
  samples?: number;
  flip?: "vertical" | "horizontal" | "both" | 'none',
  svg?: SVGModifierProps
  type?: "steps" | "bars" | "mirror";
}

export type LinearPathComponentProps = BasePathComponentProps & {
  backgroundColor?: string;
  height?: number;
  width?: number;
  top?: number;
  left?: number;
}

export type PolarPathComponentProps = BasePathComponentProps & {
    animationFrames: number;
    channel: number;
    distance: number;
    invertDegrees?: boolean;
    invertPath?: boolean;
    length: number;
    normalize: boolean;
    samples: number;
    startDegrees: number;
    endDegrees: number;
}
