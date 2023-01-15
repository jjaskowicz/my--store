import { Injectable } from '@angular/core';
import { Config } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
  useExisting: Config, // makes CovidConfig an alias for Config
})
export abstract class CovidConfig {
  isCovid?: boolean;
}

declare module '@spartacus/core' {
  interface Config extends CovidConfig {}
}
