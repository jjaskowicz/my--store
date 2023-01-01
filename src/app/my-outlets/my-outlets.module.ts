import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOutletsComponent } from './my-outlets/my-outlets.component';
import { OutletPosition, OutletRefModule, ProductListModule, provideOutlet } from '@spartacus/storefront';
import { BannerComponent } from './banner/banner.component';
import { Section1Component } from './section1/section1.component';

const COMPONENTS = [MyOutletsComponent, BannerComponent];

@NgModule({
  declarations: [...COMPONENTS, Section1Component],
  imports: [CommonModule, OutletRefModule, ProductListModule],
  exports: [...COMPONENTS],
  providers: [
    provideOutlet({
      id: 'Section1',
      component: Section1Component,
      position: OutletPosition.REPLACE,
    }),
  ]
})
export class MyOutletsModule {}
