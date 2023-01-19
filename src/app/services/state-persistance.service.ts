import { Injectable } from '@angular/core';
import { Product, RoutingService } from '@spartacus/core';

export enum StorageKey {
  VIEWED_KEY = 'lastViewed',
  BOUGHT_KEY = 'bought',
}

@Injectable({
  providedIn: 'root',
})
export class StatePersistanceService {
  product: Product[] = [];
  constructor(private foo: StatePersistanceService) {}

  getProducts(storageKey: string) {
    return localStorage.getItem(`${storageKey}`);
  }

  setProducts(lastProduct: Product, storageKey: StorageKey) {
    if (localStorage) {
      if (!localStorage[`${storageKey}`]) this.product = [];
      else this.product = JSON.parse(localStorage[`${storageKey}`]);

      if (!(this.product instanceof Array)) this.product = [];

      lastProduct ? this.product.push(lastProduct) : null;

      localStorage.setItem(storageKey, JSON.stringify(this.product));
    }
  }
}
