import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  CmsConfig,
  ConfigModule,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  provideDefaultConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
  PAGE_LAYOUT_HANDLER,
  ParagraphComponent,
} from '@spartacus/storefront';
import { ConfigDebugEnum } from '../configs/covid.config';
import { customLayoutConfig } from '../configs/custom-layout.config';
import { BannerComponent } from '../my-outlets/banner/banner.component';

@NgModule({
  declarations: [],
  imports: [
    // debugConfig
    ConfigModule.withConfig({
      configDebug: ConfigDebugEnum.console,
    }),
    ConfigModule.withConfig({
      // routing: {
      //   protected: true,
      // },
      checkout: {
        guest: true,
      },
    }),
    ConfigModule.withConfig({
      cmsComponents: {
        CMSParagraphComponent: {
          component: BannerComponent,
        },
      },
    } as CmsConfig),
    // ConfigModule.withConfig(customLayoutConfig),
  ],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
    provideConfig({
      view: {
        infiniteScroll: {
          active: true,
          productLimit: 5,
          showMoreButton: true,
        },
      },
    }),
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        BannerComponent: {
          component: BannerComponent,
        },
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
