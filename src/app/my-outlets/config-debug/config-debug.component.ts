import { Component, OnInit } from '@angular/core';
import { Config } from '@spartacus/core';
import { ConfigDebugEnum } from 'src/app/configs/covid.config';

@Component({
  selector: 'app-config-debug',
  templateUrl: './config-debug.component.html',
  styleUrls: ['./config-debug.component.scss']
})
export class ConfigDebugComponent implements OnInit {

  configDebugEnum = ConfigDebugEnum;

  constructor(public config: Config) { }

  ngOnInit(): void {
    if(this.config?.configDebug === this.configDebugEnum.console) {
      console.log("We debuugging")
    }
  }

}
