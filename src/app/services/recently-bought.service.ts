import { Injectable } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import {
  StatePersistanceService,
  StorageKey,
} from './state-persistance.service';

@Injectable({
  providedIn: 'root',
})
export class RecentlyBoughtService {
  storedProduct: Product[] = [];
  uniqStoredProduct: Product[] = [];

  constructor(
    private currentProductService: CurrentProductService,
    private statePersistanceService: StatePersistanceService
  ) {}

  storeProducts(): void {
    this.currentProductService.getProduct().subscribe((product: any) => {
      this.statePersistanceService.setProducts(product, StorageKey.BOUGHT_KEY);
    });
  }
}
