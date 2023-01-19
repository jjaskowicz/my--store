import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';


export enum ConfigDebugEnum {
    screen = 'SCREEN',
    console = "CONSOLE",
    none = "NONE"
}

@Injectable({
  providedIn: 'root',
  useExisting: Config, // makes CovidConfig an alias for Config
})

export abstract class MyCustomConfig {
  isCovid?: boolean;
  configDebug?: string;
}

declare module '@spartacus/core' {
  interface Config extends MyCustomConfig {}
}
