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
import { ConfigModule, provideConfig, UrlModule } from '@spartacus/core';
import { UpsellingComponent } from './upselling/upselling.component';
import { ReorderComponent } from './reorder/reorder.component';
import { RouterModule } from '@angular/router';
import { ShotWithComponent } from './shot-with/shot-with.component';
import { ShotWithService } from './shot-with/shot-with.service';
import { ConfigDebugEnum, MyCustomConfig } from '../configs/covid.config';
import { ConfigDebugComponent } from './config-debug/config-debug.component';
import { RecentylViewedComponent } from './recentyl-viewed/recentyl-viewed.component';
import { RecentylBoughtComponent } from './recentyl-bought/recentyl-bought.component';
import { AutoLogoutService } from '../services/auto-logout.service';

const COMPONENTS = [
  MyOutletsComponent,
  BannerComponent,
  Section1Component,
  UpsellingComponent,
  ReorderComponent,
  ShotWithComponent,
  ConfigDebugComponent,
  RecentylViewedComponent,
];

@Injectable({ providedIn: 'root' })
@NgModule({
  declarations: [...COMPONENTS, RecentylBoughtComponent],
  imports: [
    CommonModule,
    OutletRefModule,
    ProductListModule,
    CarouselModule,
    MediaModule,
    UrlModule,
    RouterModule,
  ],
  exports: [...COMPONENTS],
  providers: [
    ShotWithService,
    AutoLogoutService,
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
    } as MyCustomConfig),

    provideOutlet({
      id: 'cx-footer',
      component: ConfigDebugComponent,
      position: OutletPosition.AFTER,
    }),

    provideOutlet({
      id: 'Section2C',
      component: RecentylViewedComponent,
      position: OutletPosition.AFTER,
    }),
    provideOutlet({
      id: 'CartPageTemplate',
      component: RecentylBoughtComponent,
      position: OutletPosition.AFTER,
    }),
  ],
})
export class MyOutletsModule {}
