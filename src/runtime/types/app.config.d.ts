declare module '#build/app.config' {
  import type { AppConfig } from '@nuxt/schema'

  const _default: AppConfig
  export default _default
}

import * as z from 'zod'

export const PathComponentTypeSchema = z.enum(["linear", "polar", "snake"]);
export const SVGPathTypeSchema = z.enum(["bars", "steps", "mirror"]);

export const SVGPathSchema = z.object({
  d: z.string(),
  r: z.number().positive().optional(),
  sr: z.number().positive().optional(),
  er: z.number().positive().optional(),
  deg: z.number().positive().optional(),
  sdeg: z.number().positive().optional(),
  edeg: z.number().positive().optional(),
  minshow: z.number().positive().max(1).optional(),
  maxshow: z.number().positive().max(1).optional(),
  normalize: z.boolean().optional()
})

export const LinearWaveformPropsSchema = z.object({
  audioBuffer: z.unknown(),
  type: z.union([z.string(), SVGPathTypeSchema]),
  channel: z.number(),
  samples: z.number(),
  normalize: z.boolean(),
  svgPaths: z.array(SVGPathSchema),
  top: z.number(),
  left: z.number(),
  distance: z.number(),
  startDegrees: z.number(),
  endDegrees: z.number(),
  invertDegrees: z.boolean(),
  invertPath: z.boolean(),
  animation: z.boolean(),
  animationFrames: z.number(),
})

export const PolarWaveformPropsSchema = z.object({
  audioBuffer: z.unknown(),
  type: z.union([z.string(), SVGPathTypeSchema]),
  channel: z.number(),
  samples: z.number(),
  normalize: z.boolean(),
  svgPaths: z.array(SVGPathSchema),
  top: z.number(),
  left: z.number(),
  distance: z.number(),
  length: z.number(),
  startDegrees: z.number(),
  endDegrees: z.number(),
  invertDegrees: z.boolean(),
  invertPath: z.boolean(),
  animation: z.boolean(),
  animationFrames: z.number(),
})

export const SnakeWaveformPropsSchema = z.object({
  audioBuffer: z.unknown(),
  type: z.union([z.string(), SVGPathTypeSchema]),
  channel: z.number(),
  samples: z.number(),
  normalize: z.boolean(),
  svgPaths: z.array(SVGPathSchema),
  top: z.number(),
  left: z.number(),
  distance: z.number(),
  length: z.number(),
  startDegrees: z.number(),
  endDegrees: z.number(),
  invertDegrees: z.boolean(),
  invertPath: z.boolean(),
  animation: z.boolean(),
  animationFrames: z.number(),
})

export type ProcessSampleVolumeOptions = {
  normalize: boolean;
  scale: number;
}

export type GradientFillAttributes = {
  offset: number;
  style: string;
}

export type PathComponentType = z.output<typeof PathComponentTypeSchema>
export type SVGPathType = z.output<typeof SVGPathTypeSchema>
export type LinearWaveformProps = z.output<typeof LinearWaveformPropsSchema>
export type PolarWaveformProps = z.output<typeof PolarWaveformPropsSchema>
export type SnakeWaveformProps = z.output<typeof SnakeWaveformPropsSchema>

export type SVGPath = z.output<typeof SVGPathSchema>
