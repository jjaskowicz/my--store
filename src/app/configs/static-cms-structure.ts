import { ValueProvider } from '@angular/core';
import { provideCmsStructure } from '@spartacus/storefront';

export const defaultCmsContentProviders: ValueProvider[] = [
  provideCmsStructure({
    componentId: 'BannerComponent',
    pageSlotPosition: 'Tabs',
  }),
  provideCmsStructure({
    componentId: 'HamburgerMenuComponent',
    pageSlotPosition: 'PreHeader',
  }),
];
