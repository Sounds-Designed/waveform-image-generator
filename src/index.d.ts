declare module "#app" {
  interface NuxtApp {
    $waveformImageGenerator: { [key: string]: function };
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $waveformImageGenerator: { [key: string]: function };
  }
}

export {};
