import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletsComponent } from './my-outlets/my-outlets.component';
import { OutletPosition, OutletRefModule, provideOutlet } from '@spartacus/storefront';
import { BannerComponent } from './banner/banner.component';

const COMPONENTS = [MyOutletsComponent, BannerComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, OutletRefModule],
  exports: [...COMPONENTS],
  providers: [
    // provideOutlet({
    //   id: 'SiteLinks', // equals to <ng-template cxOutletRef="MiniCart" />
    //   component: BannerComponent,
    //   position: OutletPosition.AFTER,
    // }),
    // provideOutlet({
    //   id: 'Section1',
    //   component: BannerComponent,
    //   position: OutletPosition.BEFORE,
    // }),
  ]
})
export class MyOutletsModule {}
