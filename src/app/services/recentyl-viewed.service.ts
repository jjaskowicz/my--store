import { Injectable } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import {
  StatePersistanceService,
  StorageKey,
} from './state-persistance.service';

@Injectable({
  providedIn: 'root',
})
export class RecentylViewedService {
  storedProduct: Product[] = [];
  uniqStoredProduct: Product[] = [];

  constructor(
    private currentProductService: CurrentProductService,
    private statePersistanceService: StatePersistanceService
  ) {}

  storeProducts(): void {
    this.currentProductService.getProduct().subscribe((product: any) => {
      this.statePersistanceService.setProducts(product, StorageKey.VIEWED_KEY);
    });
  }

  recentlyViewedProducts(): Observable<Product | null>[] {
    this.storedProduct = JSON.parse(
      this.statePersistanceService.getProducts(StorageKey.VIEWED_KEY)!
    );

    if (this.storedProduct?.length) {
      this.uniqStoredProduct = [
        ...new Map(
          this.storedProduct.map((item: Product) => [item['code'], item])
        ).values(),
      ];

      return this.uniqStoredProduct.map((product: any) => {
        return of(product);
      });
    } else return [of({})];
  }
}
