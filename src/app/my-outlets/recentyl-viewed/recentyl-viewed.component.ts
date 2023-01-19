import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product, ProductSearchService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecentylViewedService } from 'src/app/services/recentyl-viewed.service';

@Component({
  selector: 'app-recentyl-viewed',
  templateUrl: './recentyl-viewed.component.html',
  styleUrls: ['./recentyl-viewed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecentylViewedComponent implements OnInit {
  items$!: Observable<Observable<Product | null>[]>;

  constructor(private recentlyViewedService: RecentylViewedService) {}

  ngOnInit(): void {
    this.recentlyViewedService.storeProducts();

    this.items$ = of(this.recentlyViewedService.recentlyViewedProducts());
  }
}
