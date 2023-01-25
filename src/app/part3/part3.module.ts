import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLayoutConfigHandler } from './my-layout-config/my-layout-config.component';
import {
  CartCouponModule,
  CartDetailsComponent,
  CartSharedModule,
  CartValidationWarningsModule,
  PAGE_LAYOUT_HANDLER,
  PromotionsModule,
} from '@spartacus/storefront';
import { MyLayoutConfig2Component } from './my-layout-config2/my-layout-config2.component';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfigModule,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { customLayoutConfig } from '../configs/custom-layout.config';
import { AdDirective } from './directives/ad.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { PageService } from '../services/page.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyLayoutConfig2Component, AdDirective, AdBannerComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig(customLayoutConfig),
    CartSharedModule,
    CartCouponModule,
    RouterModule,
    UrlModule,
    PromotionsModule,
    FeaturesConfigModule,
    I18nModule,
    CartValidationWarningsModule,
  ],
  providers: [
    {
      provide: PAGE_LAYOUT_HANDLER,
      useExisting: MyLayoutConfigHandler,
      multi: true,
    },
    PageService,
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        CartComponent: {
          component: MyLayoutConfig2Component,
        },
      },
    }),
  ],
})
export class Part3Module {}
