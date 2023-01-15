import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';

@Injectable()
export class ProductNormalizer
  implements Converter<Occ.Product, Product> {
  convert(source: any, target?: any): Product {
    target.code = source.code;
    target.name = source.title;
    target.summary = source.summary;
    target.price = {formattedValue: source.price?.unitaryPrice};
    target.images = source.images;

    return target;
  }

}
