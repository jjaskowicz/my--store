import { LayoutConfig } from '@spartacus/storefront';

export const customLayoutConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      slots: [
        'SearchBox',
        'SiteLogo',
        // 'PreHeader',
        // 'SiteContext',
        // 'SiteLinks',
        // 'SiteLogin',
        // 'MiniCart',
      ],
      //   xs: {
      //     slots: [
      //       'PreHeader',
      //       'SiteContext',
      //       'SiteLinks',
      //       'SiteLogo',
      //       'SearchBox',
      //       'SiteLogin',
      //     ],
      //   },
    },
  },
};
