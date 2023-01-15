import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletsComponent } from './my-outlets/my-outlets.component';
import {
  CarouselModule,
  MediaModule,
  OutletPosition,
  OutletRefModule,
  ProductListModule,
  provideOutlet,
} from '@spartacus/storefront';
import { BannerComponent } from './banner/banner.component';
import { Section1Component } from './section1/section1.component';
import {
  provideConfig,
  UrlModule,
} from '@spartacus/core';
import { UpsellingComponent } from './upselling/upselling.component';
import { ReorderComponent } from './reorder/reorder.component';
import { RouterModule } from '@angular/router';
import { ShotWithComponent } from './shot-with/shot-with.component';
import { ShotWithService } from './shot-with/shot-with.service';
import { CovidConfig } from '../configs/covid.config';

const COMPONENTS = [
  MyOutletsComponent,
  BannerComponent,
  Section1Component,
  UpsellingComponent,
  ReorderComponent,
  ShotWithComponent
];

@Injectable({providedIn: 'root'})
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    RouterModule
  ],
  exports: [...COMPONENTS],
  providers: [
    ShotWithService,
    provideOutlet({
      id: 'Section1',
      component: Section1Component,
      position: OutletPosition.REPLACE,
    }),
    provideOutlet({
      id: 'UpSelling',
      component: UpsellingComponent,
      position: OutletPosition.REPLACE,
    }),
    

    provideOutlet({
      id: 'AccountOrderDetailsActionsComponent',
      component: ReorderComponent,
      position: OutletPosition.AFTER,
    }),


    provideOutlet({
      id: 'ProductDetailsPageTemplate',
      component: ShotWithComponent,
      position: OutletPosition.AFTER,
    }),
    provideConfig({
      isCovid: false,
    } as CovidConfig)
  ],
})
export class MyOutletsModule {}
