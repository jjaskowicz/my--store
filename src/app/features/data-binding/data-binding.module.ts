import { NgModule } from '@angular/core';
import { ProductAdapter, PRODUCT_NORMALIZER } from '@spartacus/core';
import { ProductAdapter2 } from './product.adapter';
import { ProductNormalizer } from './product.converter';

@NgModule({
  // providers: [
  //   {
  //     provide: ProductAdapter,
  //     useClass: ProductAdapter2,
  //   },
  //   {
  //     provide: PRODUCT_NORMALIZER,
  //     useClass: ProductNormalizer,
  //     multi: true,
  //   },
  // ],
})
export class DataBindingModule {}
